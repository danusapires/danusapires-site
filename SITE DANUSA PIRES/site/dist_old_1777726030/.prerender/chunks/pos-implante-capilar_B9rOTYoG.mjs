import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './prerender_C4ipaaDD.mjs';
import { p as professionals, $ as $$ProfessionalCard } from './professionals_rFYoPEhu.mjs';
import { $ as $$CtaSection } from './CtaSection_B8bjHGjG.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PosImplanteCapilar = createComponent(($$result, $$props, $$slots) => {
  const UNIT = "pos-implante-capilar";
  const unitProfessionals = professionals.filter((p) => p.unit === UNIT);
  const faqs = [
    {
      q: "Em quanto tempo após o implante posso iniciar o acompanhamento?",
      a: "Depende da técnica e da orientação do cirurgião. A primeira avaliação aqui já ajuda a alinhar o cronograma certo."
    },
    {
      q: "O acompanhamento substitui a equipe que fez o implante?",
      a: "Não. É um cuidado complementar, focado em preservar o resultado obtido e cuidar da saúde do couro cabeludo a longo prazo."
    },
    {
      q: "Quem se beneficia do acompanhamento?",
      a: "Pacientes pós-procedimento (FUE, FUT, DHI), em fase inicial de cicatrização ou em manutenção de longo prazo. O plano se adapta à fase em que você está."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pós-implante capilar", "description": "Acompanhamento técnico para preservar e potencializar o resultado do implante capilar a médio e longo prazo. Clínica Dra. Danusa Pires — Porto Alegre.", "currentPage": "pos-implante-capilar", "breadcrumbs": [{ name: "Pós-implante capilar", url: "/pos-implante-capilar" }] }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", '<section class="hero" style="min-height:60vh"> <div class="hero-content"> <p class="lbl r">pós-implante capilar</p> <h1 class="r d1">O implante é a cirurgia. <em>O resultado depende dos meses seguintes.</em></h1> <p class="r d2">Quem investiu em implante capilar precisa de acompanhamento técnico para preservar e potencializar o resultado. A clínica oferece protocolo dedicado a esse cuidado, da fase inicial à manutenção de longo prazo.</p> <a href="/agendamento" class="btn btn-primary r d3">agendar avaliação</a> </div> </section> <section> <p class="lbl r">abordagem</p> <h2 class="section-title r d1">Implante é investimento. Manutenção é o que protege ele.</h2> <p class="section-subtitle r d2">O resultado do implante depende não só da cirurgia, mas do cuidado nas semanas e meses seguintes — e nos anos que vêm depois. Aqui o foco é exatamente esse acompanhamento de longo prazo: leitura do couro cabeludo, das áreas receptora e doadora, cuidados clínicos e indicações domiciliares ajustadas à fase.</p> </section> <section style="background:var(--color-cream)"> <p class="lbl r">como funciona</p> <h2 class="section-title r d1">Três fases do acompanhamento</h2> <div class="g3" style="margin-top:var(--space-lg)"> <div class="pillar-card r"> <h3>avaliação pós-cirúrgica</h3> <p>Leitura do couro cabeludo, das áreas receptora e doadora e do estágio do processo. Definição da janela de cuidado adequada.</p> </div> <div class="pillar-card r d1"> <h3>plano de manutenção</h3> <p>Protocolo combinando cuidados clínicos, indicações domiciliares e, em parte dos casos, soroterapia complementar.</p> </div> <div class="pillar-card r d2"> <h3>consolidação</h3> <p>Frequência ajustada à evolução. O plano evolui da fase inicial para consolidação e manutenção de longo prazo.</p> </div> </div> </section> ', '<section style="background:var(--color-cream)"> <p class="lbl r">dúvidas frequentes</p> <h2 class="section-title r d1">Antes do acompanhamento</h2> <div style="max-width:680px;margin-top:var(--space-lg)"> ', " </div> </section> ", " "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  })), maybeRenderHead(), unitProfessionals.length > 0 && renderTemplate`<section> <p class="lbl r">quem cuida</p> <h2 class="section-title r d1">Profissionais da unidade</h2> <div class="g4" style="margin-top:var(--space-lg)"> ${unitProfessionals.map((p) => renderTemplate`${renderComponent($$result2, "ProfessionalCard", $$ProfessionalCard, { "name": p.name, "role": p.role, "bg": p.bg, "photo": p.photo, "ig": p.ig, "slug": p.slug, "clickable": true })}`)} </div> </section>`, faqs.map((faq, i) => renderTemplate`<details class="r"${addAttribute(`border-bottom:1px solid var(--color-stone);padding:var(--space-md) 0;${i > 0 ? `transition-delay:${i * 0.1}s` : ""}`, "style")}> <summary style="font-size:14px;font-weight:400;cursor:pointer;list-style:none">${faq.q}</summary> <p style="font-size:13px;font-weight:300;color:var(--color-ink-soft);margin-top:var(--space-sm);line-height:1.8">${faq.a}</p> </details>`), renderComponent($$result2, "CtaSection", $$CtaSection, { "heading": "Quer proteger o <em>investimento</em> do implante?", "subtext": "Marque a avaliação inicial pelo WhatsApp. Vamos definir o cronograma de cuidado para o seu caso." })) })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/pos-implante-capilar.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/pos-implante-capilar.astro";
const $$url = "/pos-implante-capilar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PosImplanteCapilar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
