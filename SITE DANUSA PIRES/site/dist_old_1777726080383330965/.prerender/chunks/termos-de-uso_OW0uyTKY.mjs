import { c as createComponent, $ as $$BaseLayout, S as SITE } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_C4ipaaDD.mjs';

const $$TermosDeUso = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Termos de Uso", "description": "Termos de uso do site", "robots": "noindex,follow" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="padding-top:140px;max-width:680px;margin:0 auto"> <h1 style="font-family:var(--font-serif);font-style:italic;font-size:28px;margin-bottom:var(--space-lg)">Termos de Uso</h1> <div style="font-size:14px;font-weight:300;line-height:1.9;color:var(--color-ink-mid)"> <p>Última atualização: 02 de maio de 2026.</p> <h2 style="font-size:16px;font-weight:500;margin:var(--space-lg) 0 var(--space-sm);color:var(--color-ink)">1. Uso do site</h2> <p>Este site tem carater informativo e nao substitui consulta medica. As informacoes aqui apresentadas nao configuram diagnostico, prescricao ou orientacao medica individualizada.</p> <h2 style="font-size:16px;font-weight:500;margin:var(--space-lg) 0 var(--space-sm);color:var(--color-ink)">2. Propriedade intelectual</h2> <p>Todo o conteudo deste site, incluindo textos, imagens, layout, codigo-fonte, logotipos e marca, e de propriedade de ${SITE.name} e esta protegido pelas leis brasileiras de propriedade intelectual.</p> <h2 style="font-size:16px;font-weight:500;margin:var(--space-lg) 0 var(--space-sm);color:var(--color-ink)">3. Disclaimer medico</h2> <p>Os resultados de tratamentos e procedimentos podem variar de pessoa para pessoa. Nenhuma informacao neste site constitui promessa de resultado. Consulte sempre um profissional habilitado.</p> <h2 style="font-size:16px;font-weight:500;margin:var(--space-lg) 0 var(--space-sm);color:var(--color-ink)">4. Responsavel tecnico</h2> <p>${SITE.responsavelTecnico}, ${SITE.registroProfissional}.<br>CNPJ: ${SITE.cnpj}</p> </div> </section> ` })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/termos-de-uso.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/termos-de-uso.astro";
const $$url = "/termos-de-uso";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TermosDeUso,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
