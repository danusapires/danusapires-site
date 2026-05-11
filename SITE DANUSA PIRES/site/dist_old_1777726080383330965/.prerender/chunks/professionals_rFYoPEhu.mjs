import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, s as spreadAttributes, r as renderComponent, F as Fragment } from './prerender_C4ipaaDD.mjs';
import { c as createComponent, a as WA_BASE } from './BaseLayout_BUJM_jaJ.mjs';
import 'piccolore';
import 'clsx';

const $$OptimizedImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OptimizedImage;
  const {
    src,
    alt,
    width,
    height,
    loading = "lazy",
    fetchpriority,
    decoding = "async",
    sizes,
    class: className,
    style
  } = Astro2.props;
  const avifSrc = src.replace(".webp", ".avif");
  return renderTemplate`${maybeRenderHead()}<picture> <source${addAttribute(avifSrc, "srcset")} type="image/avif"> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(loading, "loading")}${addAttribute(fetchpriority, "fetchpriority")}${addAttribute(decoding, "decoding")}${addAttribute(sizes, "sizes")}${addAttribute(className, "class")}${addAttribute(style, "style")}> </picture>`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/components/OptimizedImage.astro", void 0);

const $$ProfessionalCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProfessionalCard;
  const { name, role, bg, ig, photo, description, tags, clickable = false, slug } = Astro2.props;
  const waMessage = encodeURIComponent(`Ola, gostaria de agendar com ${name}`);
  const waLink = `${WA_BASE}?text=${waMessage}`;
  const igUrl = ig ? `https://instagram.com/${ig.replace("@", "")}` : "";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`pc r ${clickable ? "pc-clickable" : ""}`, "class")}${spreadAttributes(clickable ? {
    "data-name": name,
    "data-role": role,
    "data-photo": photo || "",
    "data-ig": ig || "",
    "data-ig-url": igUrl,
    "data-wa": waLink,
    "data-desc": description || "",
    "data-tags": tags ? tags.join("|") : "",
    "data-slug": slug || "",
    role: "button",
    tabindex: "0",
    "aria-label": `Ver perfil de ${name}`
  } : {})}> <div class="pc-ph"> ${photo ? renderTemplate`${renderComponent($$result, "OptimizedImage", $$OptimizedImage, { "src": photo, "alt": name, "class": "pc-img", "loading": "lazy", "decoding": "async", "width": 700, "height": 1050, "sizes": "(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw" })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="pc-bg"${addAttribute(`background:${bg}`, "style")}></div> <svg class="pc-sl" viewBox="0 0 80 110" width="46" aria-hidden="true"> <circle cx="40" cy="30" r="20" fill="#3D3835"></circle> <path d="M5 110Q5 70 40 70Q75 70 75 110" fill="#3D3835"></path> </svg> ` })}`} </div> <div class="pc-i"> <p class="pc-n">${name}</p> <p class="pc-r">${role}</p> ${ig && !clickable && renderTemplate`<a${addAttribute(igUrl, "href")} target="_blank" rel="noopener noreferrer" style="font-size:10px;font-weight:400;color:var(--color-brand-text);text-decoration:none;display:inline-flex;align-items:center;gap:5px;margin-top:6px;letter-spacing:.03em"> ${ig} </a>`} </div> </div>`;
}, "/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/src/components/ProfessionalCard.astro", void 0);

const professionals = [
  {
    slug: "danusa-pires",
    name: "Dra. Danusa Pires",
    role: "Fundadora · Especialista em Saúde Estética e Tricologia",
    unit: "tricologia",
    photo: "/team/danusa-pires.webp",
    bg: "#C4BBB8",
    ig: "@dradanusa",
    description: "Após quase duas décadas atuando em emergências, Danusa construiu uma nova forma de cuidar — com tempo e intenção. Desde 2022 dedica-se à saúde estética e tricologia, liderando avaliações, planejando protocolos e conduzindo cada paciente por uma jornada de transformação.",
    tags: ["Tricologia", "Cosmetologia", "Soroterapia", "18 anos em saúde"],
    registration: "COREN-RS 395164",
    education: {
      graduation: "Enfermagem",
      postgrad: ["TODO_POS_GRADUACAO_DETALHADA"]
    },
    specialties: ["Tricologia", "Cosmetologia", "Saúde Estética", "Soroterapia"],
    mainComplaints: [
      "Queda capilar e alopecias",
      "Calvície masculina e feminina",
      "Cuidado pós-implante capilar",
      "Cuidados estéticos faciais",
      "Suporte vitamínico orientado"
    ]
  },
  {
    slug: "adriana-melo",
    name: "Adriana Melo",
    role: "Técnica de Enfermagem · Terapeuta em Biorressonância",
    unit: "soroterapia",
    photo: "/team/adriana-melo.webp",
    bg: "#AEA5A2",
    description: "Adriana reúne rigor clínico e visão integrativa. Nas avaliações, contribui com o teste de biorressonância — uma leitura energética e funcional que expande o olhar diagnóstico. Também atua nos procedimentos e na sala de soroterapia, elo entre a ciência e o equilíbrio do paciente.",
    tags: ["Biorressonância", "Procedimentos clínicos", "Soroterapia", "Abordagem integrativa"],
    registration: "TODO_COREN_ADRIANA",
    specialties: ["Biorressonância", "Soroterapia", "Procedimentos estéticos"],
    mainComplaints: [
      "Equilíbrio energético e funcional",
      "Suporte de soroterapia",
      "Cuidado estético complementar"
    ]
  },
  {
    slug: "equipe-tecnica",
    name: "Equipe Técnica",
    role: "Técnicas de Enfermagem · Execução e Cuidado",
    unit: "tricologia",
    bg: "#918886",
    description: "Duas técnicas de enfermagem compõem a base de sustentação de cada procedimento — da preparação do paciente à execução dos protocolos e administração da soroterapia. Treinadas, alinhadas e comprometidas com a mesma partitura.",
    tags: ["Procedimentos", "Soroterapia", "Preparo e esterilização", "Acolhimento"],
    specialties: ["Procedimentos clínicos", "Soroterapia"]
  }
];

export { $$ProfessionalCard as $, professionals as p };
