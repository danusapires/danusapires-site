const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1500;
const TIMEOUT_MS = 15000;

interface FormResponse {
  success: boolean;
  message: string;
  code?: number;
}

function formDataToObject(formData: FormData): Record<string, string> {
  const obj: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (!key.startsWith('_')) {
      obj[key] = String(value);
    }
  });
  return obj;
}

async function postForm(url: string, payload: Record<string, string>, attempt = 0): Promise<FormResponse> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const json = (await res.json()) as FormResponse;

    if (!res.ok && attempt < MAX_RETRIES) {
      await new Promise(r => setTimeout(r, RETRY_DELAY_MS * (attempt + 1)));
      return postForm(url, payload, attempt + 1);
    }

    if (!res.ok) throw new Error(json.message || `HTTP ${res.status}`);
    return json;
  } catch (err) {
    clearTimeout(timeout);
    if (attempt < MAX_RETRIES) {
      await new Promise(r => setTimeout(r, RETRY_DELAY_MS * (attempt + 1)));
      return postForm(url, payload, attempt + 1);
    }
    throw err;
  }
}

document.querySelectorAll<HTMLFormElement>('.ecooa-form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'enviando...'; }

    const formData = new FormData(form);
    const formType = formData.get('_formType') as string || 'unknown';
    const matchProf = formData.get('_matchProfessional') as string || '';
    const payload = formDataToObject(formData);
    payload.formType = formType;

    try {
      const result = await postForm(form.action, payload);

      if (!result.success) throw new Error(result.message);

      // Analytics
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit_success', { event_label: formType });
      }

      const conversionTypes = ['agendamento', 'segunda-opiniao', 'consulta-online', 'profissional'];
      if (conversionTypes.includes(formType)) {
        if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
        const redirectUrl = `/obrigado?type=${formType}${matchProf ? `&profissional=${matchProf}` : ''}`;
        window.location.href = redirectUrl;
        return;
      }

      if (formType === 'newsletter') {
        if (typeof window.fbq === 'function') window.fbq('track', 'Subscribe');
      }

      form.style.display = 'none';
      const ok = form.parentElement?.querySelector<HTMLElement>('.ecooa-form-ok');
      if (ok) ok.style.display = 'block';

    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err);
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit_error', { event_label: errMsg });
      }
      if (btn) {
        btn.textContent = 'erro, tente novamente';
        btn.disabled = false;
        setTimeout(() => { btn.textContent = 'enviar'; }, 4000);
      }
    }
  });
});
