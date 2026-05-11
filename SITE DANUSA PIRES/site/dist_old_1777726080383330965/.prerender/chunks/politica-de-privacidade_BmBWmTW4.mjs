import { c as createComponent, $ as $$BaseLayout, S as SITE } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_C4ipaaDD.mjs';

const $$PoliticaDePrivacidade = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Politica de Privacidade", "description": "Politica de privacidade e protecao de dados", "robots": "noindex,follow" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="padding-top:140px;max-width:680px;margin:0 auto"> <h1 style="font-family:var(--font-serif);font-style:italic;font-size:28px;margin-bottom:var(--space-lg)">Politica de Privacidade</h1> <div style="font-size:14px;font-weight:300;line-height:1.9;color:var(--color-ink-mid)"> <p>Última atualização: 02 de maio de 2026.</p> <h2 style="font-size:16px;font-weight:500;margin:var(--space-lg) 0 var(--space-sm);color:var(--color-ink)">1. Dados coletados</h2> <p>Coletamos apenas os dados fornecidos voluntariamente por voce nos formularios deste site: nome, telefone/WhatsApp, email e mensagem. Esses dados sao armazenados no Google Sheets via Google Apps Script.</p> <h2 style="font-size:16px;font-weight:500;margin:var(--space-lg) 0 var(--space-sm);color:var(--color-ink)">2. Finalidade</h2> <p>Os dados sao utilizados exclusivamente para entrar em contato com voce sobre o agendamento ou solicitacao realizada.</p> <h2 style="font-size:16px;font-weight:500;margin:var(--space-lg) 0 var(--space-sm);color:var(--color-ink)">3. Ferramentas de terceiros</h2> <p>Este site utiliza Google Tag Manager e Meta Pixel para analise de trafego. Esses servicos so sao carregados apos seu consentimento explícito no banner de cookies.</p> <h2 style="font-size:16px;font-weight:500;margin:var(--space-lg) 0 var(--space-sm);color:var(--color-ink)">4. Seus direitos (LGPD)</h2> <p>Voce tem direito a acessar, corrigir ou solicitar a exclusao dos seus dados pessoais. Para exercer esses direitos, entre em contato pelo email ${SITE.email}.</p> <h2 style="font-size:16px;font-weight:500;margin:var(--space-lg) 0 var(--space-sm);color:var(--color-ink)">5. Responsavel</h2> <p>${SITE.responsavelTecnico}, ${SITE.registroProfissional}.<br>CNPJ: ${SITE.cnpj}<br>Email: ${SITE.email}</p> </div> </section> ` })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/politica-de-privacidade.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/politica-de-privacidade.astro";
const $$url = "/politica-de-privacidade";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PoliticaDePrivacidade,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
