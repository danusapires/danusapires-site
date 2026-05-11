import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './prerender_C4ipaaDD.mjs';
import { p as professionals, $ as $$ProfessionalCard } from './professionals_rFYoPEhu.mjs';
import { $ as $$CtaSection } from './CtaSection_B8bjHGjG.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Cosmetologia = createComponent(($$result, $$props, $$slots) => {
  const UNIT = "cosmetologia";
  const unitProfessionals = professionals.filter((p) => p.unit === UNIT);
  const faqs = [
    {
      q: "A cosmetologia da clínica substitui o trabalho do dermatologista?",
      a: "Não. Atuamos de forma complementar, com indicações dentro do que a regulamentação da enfermagem estética permite. Casos que exigem tratamento médico são encaminhados."
    },
    {
      q: "Faz sentido combinar com tricologia ou soroterapia?",
      a: "Frequentemente sim. Pacientes em tratamento capilar costumam se beneficiar de protocolos cosmetológicos específicos, e a soroterapia funciona como suporte interno em ciclos planejados."
    },
    {
      q: "Como saber qual rotina faz sentido para a minha pele?",
      a: "Pela avaliação. Pele não é monolítica — varia em áreas, estações, ciclos hormonais, antes e depois de procedimentos. A rotina certa nasce dessa leitura, não de receita pronta."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Cosmetologia", "description": "Cosmetologia clínica facial e corporal com indicação técnica baseada na sua pele. Clínica Dra. Danusa Pires — Porto Alegre.", "currentPage": "cosmetologia", "breadcrumbs": [{ name: "Cosmetologia", url: "/cosmetologia" }] }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<section class="hero" style="min-height:60vh"> <div class="hero-content"> <p class="lbl r">cosmetologia</p> <h1 class="r d1">Cuidado contínuo da pele <em>com leitura clínica</em></h1> <p class="r d2">Cosmetologia, na clínica, é cuidado contínuo da pele com leitura clínica. O foco não é vender pacote — é montar uma rotina sustentável, com sessões na frequência certa e produtos domiciliares que façam sentido para o seu caso.</p> <a href="/agendamento" class="btn btn-primary r d3">agendar avaliação</a> </div> </section> <section> <p class="lbl r">abordagem</p> <h2 class="section-title r d1">Pele que muda pede rotina que muda junto</h2> <p class="section-subtitle r d2">Pele não é monolítica. Uma mesma pessoa tem áreas mais oleosas e outras mais ressecadas. A rotina muda no inverno e no verão, em ciclos hormonais, antes e depois de procedimentos. Por isso a indicação genérica funciona até certo ponto — depois disso, ou estabiliza ou piora. A cosmetologia clínica corrige rota antes que isso aconteça.</p> </section> <section style="background:var(--color-cream)"> <p class="lbl r">o que tratamos</p> <h2 class="section-title r d1">Frentes da cosmetologia clínica</h2> <div class="g3" style="margin-top:var(--space-lg)"> <div class="pillar-card r"> <h3>avaliação da pele</h3> <p>Tipo, fototipo, hidratação, barreira cutânea, sinais de envelhecimento, processos inflamatórios.</p> </div> <div class="pillar-card r d1"> <h3>indicação de ativos</h3> <p>Combinação de ativos, tecnologia e frequência de sessões definida para o seu objetivo — sem pacote pronto.</p> </div> <div class="pillar-card r d2"> <h3>acompanhamento</h3> <p>Ajustes a cada ciclo, integrando o que o ambiente, a estação ou a fase hormonal estão exigindo da pele.</p> </div> </div> </section> ', '<section style="background:var(--color-cream)"> <p class="lbl r">dúvidas frequentes</p> <h2 class="section-title r d1">Antes de começar uma rotina cosmetológica</h2> <div style="max-width:680px;margin-top:var(--space-lg)"> ', " </div> </section> ", " "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  })), maybeRenderHead(), unitProfessionals.length > 0 && renderTemplate`<section> <p class="lbl r">quem cuida</p> <h2 class="section-title r d1">Profissionais da unidade</h2> <div class="g4" style="margin-top:var(--space-lg)"> ${unitProfessionals.map((p) => renderTemplate`${renderComponent($$result2, "ProfessionalCard", $$ProfessionalCard, { "name": p.name, "role": p.role, "bg": p.bg, "photo": p.photo, "ig": p.ig, "slug": p.slug, "clickable": true })}`)} </div> </section>`, faqs.map((faq, i) => renderTemplate`<details class="r"${addAttribute(`border-bottom:1px solid var(--color-stone);padding:var(--space-md) 0;${i > 0 ? `transition-delay:${i * 0.1}s` : ""}`, "style")}> <summary style="font-size:14px;font-weight:400;cursor:pointer;list-style:none">${faq.q}</summary> <p style="font-size:13px;font-weight:300;color:var(--color-ink-soft);margin-top:var(--space-sm);line-height:1.8">${faq.a}</p> </details>`), renderComponent($$result2, "CtaSection", $$CtaSection, { "heading": "Sua pele <em>parou</em> de responder ao que sempre funcionou?", "subtext": "Talvez seja hora de uma avaliação cosmetológica. Pele que muda pede rotina que muda junto." })) })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/cosmetologia.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/cosmetologia.astro";
const $$url = "/cosmetologia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cosmetologia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
