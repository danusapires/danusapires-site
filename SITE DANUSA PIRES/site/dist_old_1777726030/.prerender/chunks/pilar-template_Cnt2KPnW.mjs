import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './prerender_C4ipaaDD.mjs';
import { p as professionals, $ as $$ProfessionalCard } from './professionals_rFYoPEhu.mjs';
import { $ as $$CtaSection } from './CtaSection_B8bjHGjG.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PilarTemplate = createComponent(($$result, $$props, $$slots) => {
  const UNIT = "TODO_UNIT_SLUG";
  const unitProfessionals = professionals.filter((p) => p.unit === UNIT);
  const faqs = [
    { q: "TODO_PERGUNTA_1", a: "TODO_RESPOSTA_1" },
    { q: "TODO_PERGUNTA_2", a: "TODO_RESPOSTA_2" },
    { q: "TODO_PERGUNTA_3", a: "TODO_RESPOSTA_3" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "TODO_TITULO_PILAR", "description": "TODO_DESCRICAO_PILAR", "currentPage": "TODO_NAV_LABEL", "breadcrumbs": [{ name: "TODO_PILAR", url: "/TODO_ROTA" }] }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> ", '<section class="hero" style="min-height:60vh"> <div class="hero-content"> <p class="lbl r">TODO_LABEL_PILAR</p> <h1 class="r d1">TODO_HEADLINE_PILAR</h1> <p class="r d2">TODO_SUBTITULO_PILAR</p> <a href="/agendamento" class="btn btn-primary r d3">agendar avaliacao</a> </div> </section>  <section> <p class="lbl r">abordagem</p> <h2 class="section-title r d1">TODO_ABORDAGEM_TITULO</h2> <p class="section-subtitle r d2">TODO_ABORDAGEM_TEXTO</p> </section>  <section style="background:var(--color-cream)"> <p class="lbl r">servicos</p> <h2 class="section-title r d1">TODO_SERVICOS_TITULO</h2> <div class="g3" style="margin-top:var(--space-lg)"> <div class="pillar-card r"> <h3>TODO_SERVICO_1</h3> <p>TODO_SERVICO_1_DESC</p> </div> <div class="pillar-card r d1"> <h3>TODO_SERVICO_2</h3> <p>TODO_SERVICO_2_DESC</p> </div> <div class="pillar-card r d2"> <h3>TODO_SERVICO_3</h3> <p>TODO_SERVICO_3_DESC</p> </div> </div> </section>  <section> <p class="lbl r">equipe</p> <h2 class="section-title r d1">TODO_EQUIPE_TITULO</h2> <div class="g4" style="margin-top:var(--space-lg)"> ', ' </div> </section>  <section style="background:var(--color-cream)"> <p class="lbl r">duvidas frequentes</p> <h2 class="section-title r d1">TODO_FAQ_TITULO</h2> <div style="max-width:680px;margin-top:var(--space-lg)"> ', " </div> </section> ", " "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  })), maybeRenderHead(), unitProfessionals.map((p) => renderTemplate`${renderComponent($$result2, "ProfessionalCard", $$ProfessionalCard, { "name": p.name, "role": p.role, "bg": p.bg, "photo": p.photo, "ig": p.ig, "slug": p.slug, "clickable": true })}`), faqs.map((faq, i) => renderTemplate`<details class="r"${addAttribute(`border-bottom:1px solid var(--color-stone);padding:var(--space-md) 0;${i > 0 ? `transition-delay:${i * 0.1}s` : ""}`, "style")}> <summary style="font-size:14px;font-weight:400;cursor:pointer;list-style:none">${faq.q}</summary> <p style="font-size:13px;font-weight:300;color:var(--color-ink-soft);margin-top:var(--space-sm);line-height:1.8">${faq.a}</p> </details>`), renderComponent($$result2, "CtaSection", $$CtaSection, { "heading": "TODO_CTA_PILAR", "subtext": "TODO_CTA_PILAR_SUB" })) })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/pilar-template.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/pilar-template.astro";
const $$url = "/pilar-template";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PilarTemplate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
