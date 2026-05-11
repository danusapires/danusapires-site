import { c as createComponent, $ as $$BaseLayout, W as WA_DEFAULT, r as renderScript } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_C4ipaaDD.mjs';

const $$Obrigado = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Obrigado", "description": "Recebemos seus dados", "robots": "noindex,follow" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" style="min-height:70vh;text-align:center"> <div class="hero-content" style="max-width:480px;margin:0 auto"> <p class="lbl r">confirmacao</p> <h1 class="r d1" style="font-size:clamp(28px,4vw,36px)">Recebemos seus dados</h1> <p class="r d2">Nossa equipe entrara em contato em ate 24 horas.</p> <div id="prof-info" class="r d2" style="display:none;margin:var(--space-md) 0;padding:16px;background:var(--color-cream);font-size:13px"> <strong>Profissional recomendado:</strong> <span id="prof-name"></span> </div> <div class="r d3" style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:var(--space-lg)"> <a${addAttribute(WA_DEFAULT, "href")} target="_blank" rel="noopener noreferrer" class="btn btn-primary">falar pelo whatsapp</a> <a href="/blog" class="btn btn-outline">ler o blog</a> </div> </div> </section> ${renderScript($$result2, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/obrigado.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/obrigado.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/obrigado.astro";
const $$url = "/obrigado";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Obrigado,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
