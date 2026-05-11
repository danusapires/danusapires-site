import { A as AstroError, I as InvalidComponentArgs, c as createRenderInstruction, m as maybeRenderHead, b as addAttribute, a as renderTemplate, d as defineScriptVars, r as renderComponent, e as renderSlot, f as renderHead, u as unescapeHTML } from './prerender_C4ipaaDD.mjs';
import 'piccolore';
import 'clsx';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const SITE = {
  name: "Dra. Danusa Pires",
  url: "https://dradanusa.com.br",
  phone: "+55 51 98016-4433",
  email: "TODO_EMAIL",
  instagram: "@dradanusa",
  whatsapp: "5551980164433",
  address: {
    street: "Rua Mariante",
    number: "180",
    complement: "9° andar — Edifício Moinhos 180",
    neighborhood: "Moinhos de Vento",
    city: "Porto Alegre",
    state: "RS",
    zip: "90430-180",
    country: "BR"
  },
  coordinates: {
    lat: -30.0277,
    // Moinhos de Vento aprox — confirmar com geocoding antes do go-live
    lng: -51.2068
  },
  cnpj: "TODO_CNPJ",
  responsavelTecnico: "Danusa Pires",
  registroProfissional: "COREN-RS 395164",
  gtmId: "TODO_GTM_ID",
  metaPixelId: "TODO_PIXEL_ID",
  gasUrl: "TODO_GOOGLE_APPS_SCRIPT_URL",
  mapsUrl: "https://maps.google.com/?q=Rua+Mariante+180+Moinhos+de+Vento+Porto+Alegre"};
const WA_BASE = `https://wa.me/${SITE.whatsapp}`;
const WA_DEFAULT = `${WA_BASE}?text=${encodeURIComponent("Olá Dra. Danusa, vim pelo site e gostaria de agendar uma avaliação.")}`;
const PILLARS = [
  {
    slug: "tricologia",
    name: "tricologia",
    description: "Avaliação clínica do couro cabeludo, queda capilar, alopecias e calvície. Antes de qualquer protocolo, diagnóstico.",
    href: "/tricologia"
  },
  {
    slug: "cosmetologia",
    name: "cosmetologia",
    description: "Protocolos faciais e corporais com formulações selecionadas e indicação técnica baseada na pele de cada paciente.",
    href: "/cosmetologia"
  },
  {
    slug: "soroterapia",
    name: "soroterapia",
    description: "Sala exclusiva, formulação individualizada. Vitaminas, antioxidantes, hidratação celular e protocolos de longevidade.",
    href: "/soroterapia"
  },
  {
    slug: "pos-implante-capilar",
    name: "pós-implante capilar",
    description: "Acompanhamento técnico para preservar e potencializar o resultado do implante a médio e longo prazo.",
    href: "/pos-implante-capilar"
  }
];
const NAV_LINKS = [
  { label: "inicio", href: "/" },
  { label: "tricologia", href: "/tricologia" },
  { label: "cosmetologia", href: "/cosmetologia" },
  { label: "soroterapia", href: "/soroterapia" },
  { label: "profissionais", href: "/profissionais" },
  { label: "blog", href: "/blog" },
  { label: "sobre", href: "/sobre" }
];

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Nav;
  const { currentPage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="nav" role="navigation" aria-label="Menu principal"> <a href="/"${addAttribute(SITE.name, "aria-label")}> <svg class="nav-logo" viewBox="0 0 120 24" aria-hidden="true"> <!-- TODO: substituir pelo SVG do logo real --> <text x="0" y="18" font-family="var(--font-primary)" font-size="18" font-weight="500" fill="currentColor">${SITE.name}</text> </svg> </a> <ul class="nav-links" role="list"> ${NAV_LINKS.map((link) => renderTemplate`<li role="listitem"> <a${addAttribute(link.href, "href")}${addAttribute(currentPage === link.label ? "page" : void 0, "aria-current")}>${link.label}</a> </li>`)} </ul> <a href="/agendamento" class="nav-cta">agendar</a> <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false" type="button"> <span></span> <span></span> <span></span> </button> </nav>`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer-grid"> <div> <h4>${SITE.name}</h4> <p style="line-height:1.8">${SITE.address.street}, ${SITE.address.number}<br>${SITE.address.complement}<br>${SITE.address.neighborhood}, ${SITE.address.city}</p> </div> <div> <h4>paginas</h4> <ul class="footer-links"> ${NAV_LINKS.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}>${link.label}</a></li>`)} </ul> </div> <div> <h4>areas</h4> <ul class="footer-links"> ${PILLARS.map((p) => renderTemplate`<li><a${addAttribute(p.href, "href")}>${p.name}</a></li>`)} </ul> </div> <div> <h4>contato</h4> <ul class="footer-links"> <li><a${addAttribute(`tel:${SITE.phone}`, "href")}>${SITE.phone}</a></li> <li><a${addAttribute(`mailto:${SITE.email}`, "href")}>${SITE.email}</a></li> <li><a${addAttribute(`https://instagram.com/${SITE.instagram.replace("@", "")}`, "href")} target="_blank" rel="noopener noreferrer">${SITE.instagram}</a></li> </ul> </div> </div> <div class="footer-bottom"> <p>Responsavel tecnico: ${SITE.responsavelTecnico}, ${SITE.registroProfissional}. CNPJ ${SITE.cnpj}.</p> <p style="margin-top:8px"> <a href="/politica-de-privacidade">politica de privacidade</a> ·
<a href="/termos-de-uso">termos de uso</a> </p> </div> </footer>`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/components/Footer.astro", void 0);

const $$CookieConsent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cookie-consent" style="display:none;position:fixed;bottom:0;left:0;right:0;z-index:9999;background:var(--color-ink);color:#fff;padding:16px;font-size:13px;font-weight:300;line-height:1.7" role="alert"> <div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;max-width:1200px;margin:0 auto"> <p style="margin:0;flex:1;min-width:260px">Este site utiliza cookies para melhorar sua experiencia. Ao continuar navegando, voce concorda com nossa <a href="/politica-de-privacidade" style="color:var(--color-brand-light);text-decoration:underline">politica de privacidade</a>.</p> <div style="display:flex;gap:8px"> <button id="cookie-reject" style="background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3);padding:10px 28px;font-size:12px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;cursor:pointer">rejeitar</button> <button id="cookie-accept" style="background:var(--color-brand);color:#fff;border:none;padding:10px 28px;font-size:12px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;cursor:pointer">aceitar</button> </div> </div> </div> ${renderScript($$result, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts")}`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/components/CookieConsent.astro", void 0);

const $$WhatsAppFab = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(WA_DEFAULT, "href")} target="_blank" rel="noopener noreferrer" class="wa-fab" aria-label="Falar pelo WhatsApp"> <svg viewBox="0 0 24 24" aria-hidden="true"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path> <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.113 1.519 5.845L.055 23.455a.5.5 0 00.612.612l5.61-1.464A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.382-1.572l-.386-.232-3.332.87.87-3.332-.232-.386A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path> </svg> </a>`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/components/WhatsAppFab.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    ogImage = "/og-default.jpg",
    robots = "index,follow",
    breadcrumbs,
    currentPage
  } = Astro2.props;
  const fullTitle = `${title} | ${SITE.name}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_b || (_b = __template(['<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta name="robots"', `><!-- Security Headers --><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.clarity.ms https://*.google-analytics.com https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https: wss:; frame-src https://www.googletagmanager.com https://www.facebook.com; worker-src 'self' blob:; form-action 'self' https://script.google.com https://*.google.com; base-uri 'self'"><meta http-equiv="X-Content-Type-Options" content="nosniff"><meta http-equiv="X-Frame-Options" content="SAMEORIGIN"><meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()"><!-- Canonical & Hreflang --><link rel="canonical"`, '><link rel="alternate" hreflang="pt-BR"', '><link rel="alternate" hreflang="x-default"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="pt_BR"><meta property="og:site_name"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Theme --><meta name="theme-color" content="#FAF8F6"><link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml"><link rel="manifest" href="/manifest.json"><!-- Font Preloads --><link rel="preload" href="/fonts/arboria-300.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/arboria-400.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/arboria-500.woff2" as="font" type="font/woff2" crossorigin><!-- Structured Data: Organization --><script type="application/ld+json">', "<\/script><!-- Breadcrumbs -->", "", '</head> <body> <a href="#main-content" class="skip-link">Pular para o conteudo</a> ', ' <main id="main-content"> ', " </main> ", " ", " ", " <!-- Reveal Animation --> ", " <!-- Mobile Menu --> ", " <!-- GTM (consent-gated) --> <script>(function(){", "\n  window.dataLayer=window.dataLayer||[];\n  function loadGTM(){if(window._gtmLoaded)return;window._gtmLoaded=true;\n  dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});\n  var j=document.createElement('script');j.async=true;\n  j.src='https://www.googletagmanager.com/gtm.js?id='+gtmId;\n  document.head.appendChild(j);}\n  function setupGTMListeners(){\n  document.addEventListener('scroll',loadGTM,{once:true,passive:true});\n  document.addEventListener('click',loadGTM,{once:true});\n  document.addEventListener('touchstart',loadGTM,{once:true,passive:true});\n  document.addEventListener('keydown',loadGTM,{once:true});\n  setTimeout(loadGTM,12000);}\n  if(localStorage.getItem('cookie_consent')==='accepted'){setupGTMListeners();}\n  window.addEventListener('consent_accepted',function(){setupGTMListeners();},{once:true});\n  })();<\/script> <!-- Meta Pixel (consent-gated) --> <script>(function(){", "\n  function loadMetaPixel(){if(window._fbqLoaded)return;window._fbqLoaded=true;\n  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\n  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\n  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}\n  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');\n  window.fbq('init',pixelId);window.fbq('track','PageView');}\n  function setupPixelListeners(){if(window._fbqListenersAttached)return;window._fbqListenersAttached=true;\n  document.addEventListener('scroll',loadMetaPixel,{once:true,passive:true});\n  document.addEventListener('click',loadMetaPixel,{once:true});\n  document.addEventListener('touchstart',loadMetaPixel,{once:true,passive:true});\n  setTimeout(loadMetaPixel,12000);}\n  if(localStorage.getItem('cookie_consent')==='accepted'){setupPixelListeners();}\n  window.addEventListener('consent_accepted',function(){setupPixelListeners();},{once:true});\n  })();<\/script> <!-- Service Worker --> ", " </body> </html>"])), fullTitle, addAttribute(description, "content"), addAttribute(robots, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "href"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(new URL(ogImage, Astro2.site), "content"), addAttribute(SITE.name, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, Astro2.site), "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": SITE.name,
        "url": SITE.url
      },
      {
        "@type": "MedicalBusiness",
        "name": SITE.name,
        "url": SITE.url,
        "telephone": SITE.phone,
        "email": SITE.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${SITE.address.street}, ${SITE.address.number}`,
          "addressLocality": SITE.address.city,
          "addressRegion": SITE.address.state,
          "postalCode": SITE.address.zip,
          "addressCountry": SITE.address.country
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": SITE.coordinates.lat,
          "longitude": SITE.coordinates.lng
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        "sameAs": [
          `https://instagram.com/${SITE.instagram.replace("@", "")}`
        ]
      }
    ]
  })), breadcrumbs && breadcrumbs.length > 0 && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": SITE.url },
      ...breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        "position": i + 2,
        "name": b.name,
        "item": `${SITE.url}${b.url}`
      }))
    ]
  }))), renderHead(), renderComponent($$result, "Nav", $$Nav, { "currentPage": currentPage }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "CookieConsent", $$CookieConsent, {}), renderComponent($$result, "WhatsAppFab", $$WhatsAppFab, {}), renderScript($$result, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/layouts/BaseLayout.astro?astro&type=script&index=1&lang.ts"), defineScriptVars({ gtmId: SITE.gtmId }), defineScriptVars({ pixelId: SITE.metaPixelId }), renderScript($$result, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/layouts/BaseLayout.astro?astro&type=script&index=2&lang.ts"));
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, PILLARS as P, SITE as S, WA_DEFAULT as W, WA_BASE as a, createComponent as c, renderScript as r };
