import { c as createComponent, $ as $$BaseLayout, S as SITE } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './prerender_C4ipaaDD.mjs';
import { p as professionals, $ as $$ProfessionalCard } from './professionals_rFYoPEhu.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Profissionais = createComponent(($$result, $$props, $$slots) => {
  const units = [...new Set(professionals.map((p) => p.unit))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Profissionais", "description": "A equipe da Clínica Dra. Danusa Pires: enfermeiras especialistas, biorressonância e a sala de soroterapia. Cada profissional ocupa um lugar preciso na partitura do atendimento.", "currentPage": "profissionais", "breadcrumbs": [{ name: "Profissionais", url: "/profissionais" }] }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> ", '<section class="hero" style="min-height:50vh"> <div class="hero-content"> <p class="lbl r">equipe</p> <h1 class="r d1">Uma orquestra <em>em cada atendimento</em></h1> <p class="r d2">Não há improviso. O que o paciente experimenta — da recepção ao pós-protocolo — é o resultado de uma equipe que atua com alinhamento técnico, ética clínica e cumplicidade humana.</p> </div> </section> ', ""])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": SITE.name,
    "url": SITE.url,
    "member": professionals.map((p) => ({
      "@type": "Person",
      "name": p.name,
      "jobTitle": p.role,
      "url": `${SITE.url}/profissionais/${p.slug}`
    }))
  })), maybeRenderHead(), units.map((unit) => renderTemplate`<section${addAttribute(unit !== units[0] ? "background:var(--color-cream)" : "", "style")}> <p class="lbl r">${unit}</p> <div class="g4" style="margin-top:var(--space-md)"> ${professionals.filter((p) => p.unit === unit).map((p) => renderTemplate`${renderComponent($$result2, "ProfessionalCard", $$ProfessionalCard, { "name": p.name, "role": p.role, "bg": p.bg, "photo": p.photo, "ig": p.ig, "slug": p.slug, "clickable": true })}`)} </div> </section>`)) })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/profissionais.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/profissionais.astro";
const $$url = "/profissionais";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profissionais,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
