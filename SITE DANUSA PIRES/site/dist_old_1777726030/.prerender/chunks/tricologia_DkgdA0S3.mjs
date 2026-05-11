import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './prerender_C4ipaaDD.mjs';
import { p as professionals, $ as $$ProfessionalCard } from './professionals_rFYoPEhu.mjs';
import { $ as $$CtaSection } from './CtaSection_B8bjHGjG.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Tricologia = createComponent(($$result, $$props, $$slots) => {
  const UNIT = "tricologia";
  const unitProfessionals = professionals.filter((p) => p.unit === UNIT);
  const faqs = [
    {
      q: "Em quanto tempo o tratamento começa a mostrar resultado?",
      a: "Em tricologia, sinais consistentes de melhora costumam aparecer entre 90 e 120 dias. Em quadros agudos pode ser antes; em quadros crônicos, exige mais tempo. O acompanhamento permite ajustar a expectativa caso a caso."
    },
    {
      q: "Vou precisar de exames de sangue ou de outros profissionais?",
      a: "Em parte dos casos, sim. Quando há suspeita de causa sistêmica (tireoide, deficiências nutricionais, distúrbios hormonais), encaminhamos para o profissional adequado e integramos o cuidado."
    },
    {
      q: "Atendem casos de pós-implante capilar?",
      a: "Sim. Há um protocolo dedicado para preservar e potencializar o resultado do implante, com avaliação inicial e plano de manutenção."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tricologia", "description": "Avaliação clínica do couro cabeludo, queda capilar, alopecias e calvície. Antes de qualquer protocolo, diagnóstico. Clínica Dra. Danusa Pires — Porto Alegre.", "currentPage": "tricologia", "breadcrumbs": [{ name: "Tricologia", url: "/tricologia" }] }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> ", '<section class="hero" style="min-height:60vh"> <div class="hero-content"> <p class="lbl r">tricologia</p> <h1 class="r d1">Antes de tratar o cabelo, <em>entender o que está acontecendo</em></h1> <p class="r d2">A tricologia é o estudo clínico do couro cabeludo e dos fios. Aqui ela é especialidade central — sustentada por avaliação detalhada, leitura instrumental e plano de tratamento ajustado ao seu caso.</p> <a href="/agendamento" class="btn btn-primary r d3">agendar avaliação</a> </div> </section>  <section> <p class="lbl r">abordagem</p> <h2 class="section-title r d1">Não há protocolo padrão. Há o protocolo certo para a sua condição.</h2> <p class="section-subtitle r d2">Cada caso passa por anamnese cuidadosa, histórico clínico, hábitos, tempo de evolução do quadro, exame do couro cabeludo e dos fios e leitura instrumental quando indicada. Só com esse mapa em mãos entra o plano — que combina cuidados clínicos na clínica, indicações domiciliares e, em parte dos casos, exames adicionais ou encaminhamentos.</p> </section>  <section style="background:var(--color-cream)"> <p class="lbl r">para quem é indicado</p> <h2 class="section-title r d1">Quem se beneficia da tricologia clínica</h2> <div class="g3" style="margin-top:var(--space-lg)"> <div class="pillar-card r"> <h3>queda capilar</h3> <p>Quedas que duram mais de 8 a 12 semanas, em volume nitidamente acima do habitual, com afinamento dos fios.</p> </div> <div class="pillar-card r d1"> <h3>alopecia e calvície</h3> <p>Alopecia areata, alopecia androgenética masculina e feminina, e outras formas que exigem leitura específica.</p> </div> <div class="pillar-card r d2"> <h3>pós-implante</h3> <p>Acompanhamento técnico para preservar e potencializar o resultado da cirurgia capilar a longo prazo.</p> </div> </div> </section>  ', ' <section style="background:var(--color-cream)"> <p class="lbl r">dúvidas frequentes</p> <h2 class="section-title r d1">O que costuma vir antes da primeira conversa</h2> <div style="max-width:680px;margin-top:var(--space-lg)"> ', " </div> </section> ", " "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  })), maybeRenderHead(), unitProfessionals.length > 0 && renderTemplate`<section> <p class="lbl r">quem cuida</p> <h2 class="section-title r d1">Profissionais da unidade</h2> <div class="g4" style="margin-top:var(--space-lg)"> ${unitProfessionals.map((p) => renderTemplate`${renderComponent($$result2, "ProfessionalCard", $$ProfessionalCard, { "name": p.name, "role": p.role, "bg": p.bg, "photo": p.photo, "ig": p.ig, "slug": p.slug, "clickable": true })}`)} </div> </section>`, faqs.map((faq, i) => renderTemplate`<details class="r"${addAttribute(`border-bottom:1px solid var(--color-stone);padding:var(--space-md) 0;${i > 0 ? `transition-delay:${i * 0.1}s` : ""}`, "style")}> <summary style="font-size:14px;font-weight:400;cursor:pointer;list-style:none">${faq.q}</summary> <p style="font-size:13px;font-weight:300;color:var(--color-ink-soft);margin-top:var(--space-sm);line-height:1.8">${faq.a}</p> </details>`), renderComponent($$result2, "CtaSection", $$CtaSection, { "heading": "Sua queda capilar tem <em>causa</em>. Vamos descobrir qual.", "subtext": "Buscar o profissional certo desde o começo é o que diferencia 'perdi um ano e o cabelo continua caindo' de 'em três a quatro meses já vejo evolução real'." })) })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/tricologia.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/tricologia.astro";
const $$url = "/tricologia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tricologia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
