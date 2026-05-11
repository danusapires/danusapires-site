import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_C4ipaaDD.mjs';
import { $ as $$CtaSection } from './CtaSection_B8bjHGjG.mjs';

const $$Sobre = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sobre", "description": "A trajetória da Dra. Danusa Pires: 18 anos em saúde, especialização em tricologia e saúde estética. Por que tempo, escuta e cuidado profundo viraram o método da clínica.", "currentPage": "sobre", "breadcrumbs": [{ name: "Sobre", url: "/sobre" }] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" style="min-height:60vh"> <div class="hero-content"> <p class="lbl r">a trajetória</p> <h1 class="r d1">Da emergência <em>à escuta clínica</em></h1> <p class="r d2">A clínica nasceu de uma decisão deliberada: trocar o ritmo da urgência pelo tempo necessário para diagnosticar, planejar e acompanhar. Em saúde estética, errar essa ordem é desperdiçar o tempo do paciente.</p> </div> </section> <section> <div class="g2"> <div> <h2 class="section-title r">18 anos em saúde, agora em saúde estética</h2> <p class="section-subtitle r d1" style="max-width:none">Antes da clínica, foram quase duas décadas atuando em emergências. Esse percurso ensinou algo que se tornaria a base do trabalho atual: <strong>diagnóstico correto vem antes de qualquer conduta</strong>. Em uma sala de urgência, errar essa ordem é grave. Em saúde estética, errar essa ordem é desperdiçar o tempo do paciente.</p> <p class="section-subtitle r d2" style="max-width:none;margin-top:var(--space-md)">Desde 2022, a Dra. Danusa Pires dedica-se exclusivamente à saúde estética, com foco em tricologia, cosmetologia e soroterapia. A escolha não foi aleatória — tricologia exige formação contínua, leitura de exames, acompanhamento de longo prazo e capacidade de explicar com clareza.</p> <p class="section-subtitle r d3" style="max-width:none;margin-top:var(--space-md)">A enfermagem brasileira tem regulamentação sólida em saúde estética. Atuamos dentro do que o conselho determina, com responsabilidade técnica registrada — COREN-RS 395164.</p> </div> <div class="r d2" style="aspect-ratio:4/3;background:var(--color-cream);border-radius:2px;display:flex;align-items:center;justify-content:center;color:var(--color-ink-soft);font-size:12px;letter-spacing:.1em;text-transform:uppercase">
[PENDENTE: foto do espaço]
</div> </div> </section> <section style="background:var(--color-cream)"> <p class="lbl r">o método</p> <h2 class="section-title r d1">Avaliação primeiro. Protocolo depois.</h2> <p class="section-subtitle r d2">Cada paciente passa por avaliação clínica detalhada antes de qualquer protocolo. Em tricologia, isso inclui análise do couro cabeludo e dos fios; em soroterapia, anamnese e formulação individualizada. O retorno traz o plano. O acompanhamento garante que o plano funcione ou seja ajustado a tempo.</p> <div class="g3" style="margin-top:var(--space-lg)"> <div class="r"> <h3 style="font-size:14px;font-weight:500;margin-bottom:8px">acolhimento</h3> <p class="section-subtitle" style="max-width:none">O paciente é recebido com atenção antes de qualquer protocolo. A escuta ativa vem primeiro.</p> </div> <div class="r d1"> <h3 style="font-size:14px;font-weight:500;margin-bottom:8px">evidência</h3> <p class="section-subtitle" style="max-width:none">Nenhuma indicação sem base científica. Cada protocolo é sustentado por comprovação clínica.</p> </div> <div class="r d2"> <h3 style="font-size:14px;font-weight:500;margin-bottom:8px">personalização</h3> <p class="section-subtitle" style="max-width:none">Não existe tratamento padrão. Existe o tratamento certo para aquela pessoa específica.</p> </div> </div> </section> ${renderComponent($$result2, "CtaSection", $$CtaSection, { "heading": "Quer entender o que está acontecendo com o <em>seu caso</em>?", "subtext": "A primeira conversa pelo WhatsApp já adianta a triagem antes da avaliação presencial." })} ` })}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/sobre.astro", void 0);

const $$file = "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/pages/sobre.astro";
const $$url = "/sobre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sobre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
