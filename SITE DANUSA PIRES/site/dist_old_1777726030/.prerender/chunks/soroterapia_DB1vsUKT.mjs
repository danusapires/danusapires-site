import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './prerender_C4ipaaDD.mjs';
import { p as professionals, $ as $$ProfessionalCard } from './professionals_rFYoPEhu.mjs';
import { $ as $$CtaSection } from './CtaSection_B8bjHGjG.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Soroterapia = createComponent(($$result, $$props, $$slots) => {
  const UNIT = "soroterapia";
  const unitProfessionals = professionals.filter((p) => p.unit === UNIT);
  const faqs = [
    {
      q: "Qualquer pessoa pode fazer soroterapia?",
      a: "Não. Há contraindicações que precisam ser avaliadas em anamnese. Por isso a primeira consulta é obrigatória antes de qualquer aplicação."
    },
    {
      q: "Quanto tempo dura uma sessão?",
      a: "Em média, entre 40 e 90 minutos, dependendo da formulação e do volume. A sala foi pensada para que esse tempo seja confortável."
    },
    {
      q: "Posso combinar com tratamentos capilares ou estéticos?",
      a: "Em muitos casos, sim. A soroterapia entra como suporte interno em planos de tricologia ou cosmetologia, com cronograma alinhado às demais sessões."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Soroterapia", "description": "Sala exclusiva. Soroterapia com formulação individualizada — vitaminas, antioxidantes, hidratação celular e protocolos de longevidade. Clínica Dra. Danusa Pires — Porto Alegre.", "currentPage": "soroterapia", "breadcrumbs": [{ name: "Soroterapia", url: "/soroterapia" }] }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<section class="hero" style="min-height:60vh"> <div class="hero-content"> <p class="lbl r">soroterapia</p> <h1 class="r d1">Não é o soro de academia. <em>É um protocolo individualizado.</em></h1> <p class="r d2">A sala de soroterapia é um diferencial deliberado da clínica. Espaço próprio, pensado para a experiência do paciente, com formulação que parte da avaliação — vitaminas, antioxidantes, hidratação celular e protocolos de longevidade aplicados com cuidado técnico.</p> <a href="/agendamento" class="btn btn-primary r d3">conversar sobre indicação</a> </div> </section> <section> <p class="lbl r">abordagem</p> <h2 class="section-title r d1">Indicação parte da anamnese — não do cardápio</h2> <p class="section-subtitle r d2">Levantamento de histórico, exames recentes quando houver, queixas e objetivos definem a fórmula. Não há composição única para todos. A aplicação é conduzida pela equipe técnica, com monitoramento durante a sessão. Em ciclos com mais de uma sessão, o plano define frequência, duração e marcadores de acompanhamento.</p> </section> <section style="background:var(--color-cream)"> <p class="lbl r">indicações comuns</p> <h2 class="section-title r d1">Quando a soroterapia entra como suporte</h2> <div class="g3" style="margin-top:var(--space-lg)"> <div class="pillar-card r"> <h3>suporte vitamínico</h3> <p>Vitaminas e antioxidantes orientados por anamnese, em alta concentração e absorção intravenosa.</p> </div> <div class="pillar-card r d1"> <h3>fadiga e energia</h3> <p>Apoio em quadros de baixa disposição, com formulação ajustada ao perfil clínico de cada paciente.</p> </div> <div class="pillar-card r d2"> <h3>longevidade</h3> <p>Hidratação celular intensiva e protocolos de suporte para envelhecimento saudável e bem-estar.</p> </div> </div> </section> ', '<section style="background:var(--color-cream)"> <p class="lbl r">dúvidas frequentes</p> <h2 class="section-title r d1">Antes da primeira sessão</h2> <div style="max-width:680px;margin-top:var(--space-lg)"> ', " </div> </section> ", " "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  })), maybeRenderHead(), unitProfessionals.length > 0 && renderTemplate`<section> <p class="lbl r">quem cuida</p> <h2 class="section-title r d1">Profissionais da unidade</h2> <div class="g4" style="margin-top:var(--space-lg)"> ${unitProfessionals.map((p) => renderTemplate`${renderComponent($$result2, "ProfessionalCard", $$ProfessionalCard, { "name": p.name, "role": p.role, "bg": p.bg, "photo": p.photo, "ig": p.ig, "slug": p.slug, "clickable": true })}`)} </div> </section>`, faqs.map((faq, i) => renderTemplate`<details class="r"${addAttribute(`border-bottom:1px solid var(--color-stone);padding:var(--space-md) 0;${i > 0 ? `transition-delay:${i * 0.1}s` : ""}`, "style")}> <summary style="font-size:14px;font-weight:400;cursor:pointer;list-style:none">${faq.q}</summary> <p style="font-size:13px;font-weight:300;color:var(--color-ink-soft);margin-top:var(--space-sm);line-height:1.8">${faq.a}</p> </details>`), renderComponent($$result2, "CtaSection", $$CtaSection, { "heading": "Comece pela <em>anamnese</em>. Não pelo soro.", "subtext": "A primeira consulta é obrigatória — é ali que a indicação ganha sentido para o seu caso." })) })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/soroterapia.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/soroterapia.astro";
const $$url = "/soroterapia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Soroterapia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
