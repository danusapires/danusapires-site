import { c as createComponent, $ as $$BaseLayout, S as SITE, r as renderScript } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_C4ipaaDD.mjs';

const $$Agendamento = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Agendamento", "description": "Agende sua avaliação na Clínica Dra. Danusa Pires. Tricologia, cosmetologia e soroterapia em Porto Alegre.", "robots": "noindex,follow", "currentPage": "agendamento", "breadcrumbs": [{ name: "Agendamento", url: "/agendamento" }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" style="min-height:auto;padding-top:140px;padding-bottom:var(--section-py)"> <div style="max-width:560px;width:100%"> <p class="lbl r">agendamento</p> <h1 class="r d1" style="font-size:clamp(28px,4vw,36px)">Agende sua <em>avaliação</em></h1> <p class="r d2" style="font-size:14px;color:var(--color-ink-soft);margin-bottom:var(--space-lg)">Conta para a gente o que está acontecendo. Nossa equipe responde no WhatsApp e organiza a primeira avaliação na clínica ou online.</p> <!-- Banner match (visivel se ?profissional= presente) --> <div id="match-banner" class="r" style="display:none;background:var(--color-cream);padding:16px;margin-bottom:var(--space-md);font-size:13px;border-left:3px solid var(--color-brand)"> <strong>Profissional recomendado:</strong> <span id="match-name"></span> </div> <form class="ecooa-form r d2"${addAttribute(SITE.gasUrl, "action")} method="POST"> <input type="hidden" name="_formType" value="agendamento"> <input type="hidden" name="matchProfessional" id="match-prof"> <input type="hidden" name="matchIntent" id="match-intent"> <div style="display:flex;flex-direction:column;gap:var(--space-sm)"> <label style="font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--color-ink-soft)">
nome
<input type="text" name="nome" required style="display:block;width:100%;margin-top:6px;padding:12px 16px;font-size:14px;font-family:var(--font-primary);border:1px solid var(--color-stone);background:var(--color-white);outline:none"> </label> <label style="font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--color-ink-soft)">
whatsapp
<input type="tel" name="whatsapp" required style="display:block;width:100%;margin-top:6px;padding:12px 16px;font-size:14px;font-family:var(--font-primary);border:1px solid var(--color-stone);background:var(--color-white);outline:none"> </label> <label style="font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--color-ink-soft)">
email
<input type="email" name="email" style="display:block;width:100%;margin-top:6px;padding:12px 16px;font-size:14px;font-family:var(--font-primary);border:1px solid var(--color-stone);background:var(--color-white);outline:none"> </label> <label style="font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--color-ink-soft)">
como podemos ajudar
<textarea name="mensagem" rows="3" style="display:block;width:100%;margin-top:6px;padding:12px 16px;font-size:14px;font-family:var(--font-primary);border:1px solid var(--color-stone);background:var(--color-white);outline:none;resize:vertical"></textarea> </label> <button type="submit" class="btn btn-primary" style="margin-top:var(--space-sm);width:100%">enviar</button> </div> </form> <div class="ecooa-form-ok" style="display:none;text-align:center;padding:var(--space-xl) 0"> <p style="font-size:16px;font-weight:400">Recebemos seus dados.</p> <p style="font-size:13px;color:var(--color-ink-soft);margin-top:8px">Nossa equipe entrara em contato em breve.</p> </div> </div> </section> ${renderScript($$result2, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/agendamento.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/agendamento.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/agendamento.astro";
const $$url = "/agendamento";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Agendamento,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
