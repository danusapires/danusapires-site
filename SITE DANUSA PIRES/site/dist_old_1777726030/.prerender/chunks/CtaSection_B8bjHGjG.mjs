import { c as createComponent, S as SITE, W as WA_DEFAULT } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML } from './prerender_C4ipaaDD.mjs';
import 'clsx';

const $$WavePattern = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$WavePattern;
  const { count = 6, y0 = 80, step = 55 } = Astro2.props;
  const paths = Array.from({ length: count }, (_, i) => {
    const y = y0 + i * step;
    return `M0 ${y} Q360 ${y - 40} 720 ${y} T1440 ${y}`;
  });
  return renderTemplate`${paths.map((d) => renderTemplate`${maybeRenderHead()}<path${addAttribute(d, "d")}></path>`)}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/components/WavePattern.astro", void 0);

const $$CtaSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CtaSection;
  const { heading, subtext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="cta-section" aria-label="Chamada para acao"> <svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.04" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true"> <g fill="none" stroke="white" stroke-width="1">${renderComponent($$result, "WavePattern", $$WavePattern, { "count": 8, "y0": 80, "step": 55 })}</g> </svg> <p class="lbl r" style="color:rgba(255,255,255,.4)">${SITE.name} · ${SITE.address.city}</p> <h2 class="r d1">${unescapeHTML(heading)}</h2> <p class="r d2">${subtext}</p> <div class="cta-buttons r d3"> <a${addAttribute(WA_DEFAULT, "href")} target="_blank" rel="noopener noreferrer" class="btn btn-white">falar pelo whatsapp</a> <a href="/agendamento" class="btn btn-outline" style="border-color:rgba(255,255,255,.3);color:#fff">agendar avaliacao</a> </div> </section>`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/components/CtaSection.astro", void 0);

export { $$CtaSection as $, $$WavePattern as a };
