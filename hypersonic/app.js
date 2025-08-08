(function () {
  const htmlElement = document.documentElement;
  const langSelect = document.getElementById("lang-select");
  const currentYearSpan = document.getElementById("year");
  if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear().toString();

  const translations = {
    en: {
      "meta.title": "Hypersonic — Build hyper‑fast sites with style",
      "meta.description": "Build and launch hyper‑fast sites with modern animations and a flawless experience.",
      "meta.og_title": "Hypersonic — Build hyper‑fast sites",
      "meta.og_description": "Build and launch hyper‑fast sites with modern animations and a flawless experience.",
      "meta.twitter_title": "Hypersonic — Build hyper‑fast sites",
      "meta.twitter_description": "Build and launch hyper‑fast sites with modern animations and a flawless experience.",

      "nav.features": "Features",
      "nav.pricing": "Pricing",
      "nav.testimonials": "Testimonials",
      "nav.faq": "FAQ",
      "nav.cta": "Get Started",

      "hero.badge": "New • Premium Template",
      "hero.title": "Build hyper‑fast sites with style",
      "hero.subtitle": "Modern animations, flawless performance and a pro design for your next launch.",
      "hero.primary_cta": "Try free",
      "hero.secondary_cta": "See features",
      "hero.metric_1_label": "Performance",
      "hero.metric_2_label": "SEO",
      "hero.metric_3_label": "Accessibility",

      "features.title": "Everything you need to take off",
      "features.subtitle": "From design to site in minutes with micro‑interactions and top performance.",
      "features.items.0.title": "Fluid animations",
      "features.items.0.desc": "Transitions and micro‑interactions that elevate your brand.",
      "features.items.1.title": "SEO ready",
      "features.items.1.desc": "Meta tags, Open Graph, JSON‑LD and sitemap included.",
      "features.items.2.title": "Performance",
      "features.items.2.desc": "Fast loads, optimized assets and best practices.",
      "features.items.3.title": "Accessibility",
      "features.items.3.desc": "Proper semantics and keyboard navigation.",
      "features.items.4.title": "Responsive design",
      "features.items.4.desc": "Looks perfect on mobile, tablet and desktop.",
      "features.items.5.title": "Clean code",
      "features.items.5.desc": "Clear HTML/CSS/JS that is easy to maintain.",

      "pricing.title": "Simple plans",
      "pricing.subtitle": "Choose the plan that fits your launch.",
      "pricing.free.title": "Free",
      "pricing.free.price": "$0",
      "pricing.free.items.0": "All the basics",
      "pricing.free.items.1": "Essential SEO",
      "pricing.free.items.2": "Base animations",
      "pricing.free.cta": "Start",
      "pricing.pro.badge": "Popular",
      "pricing.pro.title": "Pro",
      "pricing.pro.price": "$89",
      "pricing.pro.items.0": "All features",
      "pricing.pro.items.1": "Advanced optimization",
      "pricing.pro.items.2": "Priority support",
      "pricing.pro.cta": "Get Pro",

      "testimonials.title": "Happy customers",
      "testimonials.subtitle": "Brands that already took off with Hypersonic.",

      "faq.title": "Frequently asked questions",
      "faq.q1.q": "What makes Hypersonic different?",
      "faq.q1.a": "Performance, design and SEO built‑in from the start.",
      "faq.q2.q": "Can I customize the design?",
      "faq.q2.a": "Yes, the code is clear and simple to adapt.",
      "faq.q3.q": "Does it include SEO best practices?",
      "faq.q3.a": "Includes meta, Open Graph, Twitter, JSON‑LD, sitemap and robots.",

      "cta.title": "Ready for lift‑off",
      "cta.subtitle": "Start today and launch faster than ever.",
      "cta.cta": "Start now",

      "footer.tagline": "Modern templates for hyper‑fast sites."
    },
    es: {
      "meta.title": "Hypersonic — Sitios ultrarrápidos con estilo",
      "meta.description": "Crea y lanza sitios hiperrápidos con animaciones modernas y una experiencia impecable.",
      "meta.og_title": "Hypersonic — Construye sitios hiperrápidos",
      "meta.og_description": "Crea y lanza sitios hiperrápidos con animaciones modernas y una experiencia impecable.",
      "meta.twitter_title": "Hypersonic — Construye sitios hiperrápidos",
      "meta.twitter_description": "Crea y lanza sitios hiperrápidos con animaciones modernas y una experiencia impecable.",

      "nav.features": "Características",
      "nav.pricing": "Precios",
      "nav.testimonials": "Testimonios",
      "nav.faq": "FAQ",
      "nav.cta": "Empezar",

      "hero.badge": "Nuevo • Plantilla premium",
      "hero.title": "Construye sitios hiperrápidos con estilo",
      "hero.subtitle": "Animaciones modernas, rendimiento impecable y diseño profesional para tu próximo lanzamiento.",
      "hero.primary_cta": "Probar gratis",
      "hero.secondary_cta": "Ver características",
      "hero.metric_1_label": "Velocidad",
      "hero.metric_2_label": "SEO",
      "hero.metric_3_label": "Accesibilidad",

      "features.title": "Todo lo que necesitas para despegar",
      "features.subtitle": "De diseño a sitio en minutos, con micro‑interacciones y rendimiento top.",
      "features.items.0.title": "Animaciones fluidas",
      "features.items.0.desc": "Transiciones y micro‑interacciones que elevan tu marca.",
      "features.items.1.title": "SEO listo",
      "features.items.1.desc": "Meta etiquetas, Open Graph, JSON‑LD y sitemap incluidos.",
      "features.items.2.title": "Rendimiento",
      "features.items.2.desc": "Cargas rápidas, assets optimizados y buenas prácticas.",
      "features.items.3.title": "Accesibilidad",
      "features.items.3.desc": "Semántica correcta y navegación con teclado.",
      "features.items.4.title": "Diseño responsive",
      "features.items.4.desc": "Se adapta perfecto a móvil, tablet y escritorio.",
      "features.items.5.title": "Código limpio",
      "features.items.5.desc": "HTML/CSS/JS claros y fáciles de mantener.",

      "pricing.title": "Planes sencillos",
      "pricing.subtitle": "Elige el plan que se ajusta a tu lanzamiento.",
      "pricing.free.title": "Gratis",
      "pricing.free.price": "$0",
      "pricing.free.items.0": "Todo lo básico",
      "pricing.free.items.1": "SEO esencial",
      "pricing.free.items.2": "Animaciones base",
      "pricing.free.cta": "Empezar",
      "pricing.pro.badge": "Popular",
      "pricing.pro.title": "Pro",
      "pricing.pro.price": "$89",
      "pricing.pro.items.0": "Todas las características",
      "pricing.pro.items.1": "Optimización avanzada",
      "pricing.pro.items.2": "Soporte prioritario",
      "pricing.pro.cta": "Obtener Pro",

      "testimonials.title": "Clientes felices",
      "testimonials.subtitle": "Marcas que ya despegaron con Hypersonic.",

      "faq.title": "Preguntas frecuentes",
      "faq.q1.q": "¿Qué hace a Hypersonic diferente?",
      "faq.q1.a": "Rendimiento, diseño y SEO integrados desde el inicio.",
      "faq.q2.q": "¿Puedo personalizar el diseño?",
      "faq.q2.a": "Sí, el código es claro y fácil de adaptar.",
      "faq.q3.q": "¿Incluye buenas prácticas SEO?",
      "faq.q3.a": "Incluye meta, Open Graph, Twitter, JSON‑LD, sitemap y robots.",

      "cta.title": "Listo para despegar",
      "cta.subtitle": "Empieza hoy y lanza más rápido que nunca.",
      "cta.cta": "Comenzar ahora",

      "footer.tagline": "Plantillas modernas para sitios hiperrápidos."
    }
  };

  function applyTranslations(languageCode) {
    const dictionary = translations[languageCode];
    if (!dictionary) return;

    document.title = dictionary["meta.title"] || document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && dictionary["meta.description"]) {
      metaDescription.setAttribute("content", dictionary["meta.description"]);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dictionary["meta.og_title"]) {
      ogTitle.setAttribute("content", dictionary["meta.og_title"]);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dictionary["meta.og_description"]) {
      ogDesc.setAttribute("content", dictionary["meta.og_description"]);
    }
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle && dictionary["meta.twitter_title"]) {
      twTitle.setAttribute("content", dictionary["meta.twitter_title"]);
    }
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc && dictionary["meta.twitter_description"]) {
      twDesc.setAttribute("content", dictionary["meta.twitter_description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dictionary[key];
      if (typeof value === "string") {
        el.textContent = value;
      }
    });

    htmlElement.setAttribute("lang", languageCode);
  }

  function initLanguage() {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    const storedLang = localStorage.getItem("hypersonic_lang");
    const browserLang = (navigator.language || "en").slice(0, 2);

    const chosen = (queryLang || storedLang || (browserLang === "es" ? "es" : "en"));
    langSelect.value = chosen;
    applyTranslations(chosen);
    localStorage.setItem("hypersonic_lang", chosen);
    updateHreflangs(chosen);
  }

  function updateHreflangs(lang) {
    const base = window.location.pathname.replace(/\/$/, "");
    const en = `${base || "/"}?lang=en`;
    const es = `${base || "/"}?lang=es`;
    let linkEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
    let linkEs = document.querySelector('link[rel="alternate"][hreflang="es"]');
    if (linkEn) linkEn.setAttribute("href", en);
    if (linkEs) linkEs.setAttribute("href", es);
  }

  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      localStorage.setItem("hypersonic_lang", lang);
      applyTranslations(lang);
      updateHreflangs(lang);
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    });
  }

  // Scroll reveal animations
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Simple tilt effect on hero card
  const tilt = document.querySelector(".hero-card");
  if (tilt) {
    const maxRotation = 8;
    const handleMove = (event) => {
      const rect = tilt.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * -2 * maxRotation;
      const ry = (px - 0.5) * 2 * maxRotation;
      tilt.style.transform = `translate(-50%, -40%) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const reset = () => {
      tilt.style.transform = "translate(-50%, -40%)";
    };
    tilt.addEventListener("mousemove", handleMove);
    tilt.addEventListener("mouseleave", reset);
    tilt.addEventListener("touchmove", (e) => {
      if (!e.touches || !e.touches[0]) return;
      const t = e.touches[0];
      handleMove({ clientX: t.clientX, clientY: t.clientY });
    }, { passive: true });
    tilt.addEventListener("touchend", reset);
  }

  initLanguage();
})();