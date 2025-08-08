const i18n = {
  es: {
    nav: { services: "Servicios", solutions: "Soluciones", cases: "Casos", pricing: "Modelos", stack: "Stack", faq: "FAQ", contact: "Contacto" },
    hero: {
      title: { l1: "Backend, IA y automatización", l2: "para acelerar tu roadmap" },
      subtitle: "Equipos senior entregando sistemas escalables, modelos de ML en producción y workflows sin fricción. Menos riesgo, más impacto."
    },
    cta: { talk: "Hablemos", work: "Ver trabajos" },
    badges: { experience: "+10 años en Transporte, Turismo, Deporte, Finanzas y Salud", delivery: "Entrega continua y métricas claras" },
    stats: { uptime: "SLA de disponibilidad", speed: "Más rápido del problema al prototipo", data: "Datos procesados mensualmente", compliance: "Cumplimiento y seguridad" },
    services: {
      title: "Servicios",
      backend: { title: "Backend a medida", desc: "APIs y microservicios con observabilidad, seguridad y performance.", p1: "Arquitecturas event-driven (Kafka, RabbitMQ)", p2: "SQL/NoSQL, particionado, tuning y cachés", p3: "Tracing, métricas, alertas y SLOs", p4: "Infra como código y CI/CD" },
      ml: { title: "IA y Machine Learning", desc: "LLMs, RAG y modelos clásicos listos para producción.", p1: "Evaluación, guardrails y observabilidad de IA", p2: "Fine-tuning, distillation e inferencia eficiente", p3: "MLOps: feature store, tracking y despliegue", p4: "CV/NLP/Series: clasificación, forecasting, extracción" },
      automation: { title: "Automatizaciones", desc: "Workflows sin fricción y bots a medida.", p1: "Integraciones SaaS y ETL", p2: "Orquestación y monitoreo", p3: "RPA y asistentes internos", p4: "Data quality y gobernanza" }
    },
    solutions: {
      title: "Soluciones por sector",
      transport: { title: "Transporte", desc: "Rutas óptimas, ETA con ML, telemetría y mantenimiento predictivo." },
      tourism: { title: "Turismo", desc: "Recomendadores, revenue management y motores de reservas." },
      sports: { title: "Deporte", desc: "Tracking de rendimiento, análisis de video y fan engagement." },
      finance: { title: "Finanzas", desc: "Detección de fraude, scoring y automatización regulatoria." },
      health: { title: "Salud", desc: "NLP clínico, triage inteligente y cumplimiento HIPAA/GDPR." },
      custom: { title: "A medida", desc: "Integramos legado y cloud para tus requisitos específicos." }
    },
    cases: {
      title: "Casos de estudio",
      c1: { title: "Optimización de flotas con ETA", desc: "Reducción del 18% en tiempos de llegada y 12% menos combustible." },
      c2: { title: "Recomendador de paquetes", desc: "+23% conversión con recomendaciones personalizadas en tiempo real." },
      c3: { title: "Prevención de fraude", desc: "Disminución del 35% en falsos positivos y detección temprana." }
    },
    testimonials: { title: "Testimonios" },
    stack: { title: "Stack tecnológico" },
    pricing: {
      title: "Modelos de colaboración",
      sprint: { title: "Discovery Sprint", desc: "2-3 semanas para validar enfoque técnico, riesgos y plan.", p1: "Auditoría y arquitectura", p2: "PoC o prototipo", p3: "Roadmap y estimación" },
      tnm: { title: "Time & Materials", desc: "Equipo flexible con sprints y objetivos medibles.", p1: "Ritmo quincenal", p2: "KPIs y visibilidad", p3: "Escalado según demanda" },
      fixed: { title: "Alcance cerrado", desc: "Entregable definido, hitos claros y coste predecible.", p1: "SOW detallado", p2: "Hitos de aceptación", p3: "Garantía de soporte" }
    },
    process: {
      title: "Proceso",
      d: { title: "Descubrimiento", desc: "Contexto, objetivos y métricas de éxito." },
      a: { title: "Arquitectura", desc: "Diseño técnico con riesgos y trade-offs." },
      e: { title: "Ejecución", desc: "Sprints, calidad y observabilidad." },
      h: { title: "Handover", desc: "Despliegue, documentación y transferencia." }
    },
    faq: {
      title: "Preguntas frecuentes",
      q1: { q: "¿Trabajan con NDA?", a: "Sí, podemos firmar NDA antes de intercambiar información sensible." },
      q2: { q: "¿Usan contratos por horas o por proyecto?", a: "Ambos. Recomendamos empezar con un Discovery Sprint." },
      q3: { q: "¿Pueden integrarse con nuestro equipo?", a: "Sí, trabajamos junto a tus squads y estándares." }
    },
    contact: { title: "Cuéntanos sobre tu proyecto", subtitle: "Respondemos en 24-48 horas. También podemos firmar NDA." },
    form: { name: "Nombre", email: "Email", company: "Empresa (opcional)", message: "Mensaje", service: "Servicio de interés", submit: "Enviar", serviceOptions: { backend: "Backend", ml: "IA/ML", automation: "Automatizaciones" } },
    footer: { privacy: "Privacidad", terms: "Términos" }
  },
  en: {
    nav: { services: "Services", solutions: "Solutions", cases: "Case studies", pricing: "Engagement", stack: "Stack", faq: "FAQ", contact: "Contact" },
    hero: {
      title: { l1: "Backend, AI and automation", l2: "to accelerate your roadmap" },
      subtitle: "Senior teams delivering scalable systems, production ML and frictionless workflows. Less risk, more impact."
    },
    cta: { talk: "Let's talk", work: "See work" },
    badges: { experience: "+10 years across Transportation, Tourism, Sports, Finance and Healthcare", delivery: "Continuous delivery and clear metrics" },
    stats: { uptime: "Availability SLA", speed: "Faster from problem to prototype", data: "Data processed monthly", compliance: "Compliance and security" },
    services: {
      title: "Services",
      backend: { title: "Custom backend", desc: "APIs and microservices with observability, security and performance.", p1: "Event-driven architectures (Kafka, RabbitMQ)", p2: "SQL/NoSQL, partitioning, tuning and caches", p3: "Tracing, metrics, alerts and SLOs", p4: "Infra as code and CI/CD" },
      ml: { title: "AI and Machine Learning", desc: "LLMs, RAG and classical models production-ready.", p1: "Evaluation, guardrails and AI observability", p2: "Fine-tuning, distillation and efficient inference", p3: "MLOps: feature store, tracking and deployment", p4: "CV/NLP/Time-series: classification, forecasting, extraction" },
      automation: { title: "Automations", desc: "Frictionless workflows and custom bots.", p1: "SaaS integrations and ETL", p2: "Orchestration and monitoring", p3: "RPA and internal assistants", p4: "Data quality and governance" }
    },
    solutions: {
      title: "Solutions by industry",
      transport: { title: "Transportation", desc: "Optimal routing, ML-based ETA, telemetry and predictive maintenance." },
      tourism: { title: "Tourism", desc: "Recommenders, revenue management and booking engines." },
      sports: { title: "Sports", desc: "Performance tracking, video analytics and fan engagement." },
      finance: { title: "Finance", desc: "Fraud detection, scoring and regulatory automation." },
      health: { title: "Healthcare", desc: "Clinical NLP, smart triage and HIPAA/GDPR compliance." },
      custom: { title: "Custom", desc: "We integrate legacy and cloud for your specific requirements." }
    },
    cases: {
      title: "Case studies",
      c1: { title: "Fleet optimization with ETA", desc: "−18% arrival time and 12% fuel savings." },
      c2: { title: "Travel package recommender", desc: "+23% conversion with real-time personalization." },
      c3: { title: "Fraud prevention", desc: "−35% false positives and earlier detection." }
    },
    testimonials: { title: "Testimonials" },
    stack: { title: "Tech stack" },
    pricing: {
      title: "Engagement models",
      sprint: { title: "Discovery Sprint", desc: "2-3 weeks to validate technical approach, risks and plan.", p1: "Audit and architecture", p2: "PoC or prototype", p3: "Roadmap and estimate" },
      tnm: { title: "Time & Materials", desc: "Flexible team with measurable sprint goals.", p1: "Bi-weekly cadence", p2: "KPIs and visibility", p3: "Scale as needed" },
      fixed: { title: "Fixed scope", desc: "Defined deliverable, clear milestones and predictable cost.", p1: "Detailed SOW", p2: "Acceptance milestones", p3: "Support warranty" }
    },
    process: {
      title: "Process",
      d: { title: "Discovery", desc: "Context, goals and success metrics." },
      a: { title: "Architecture", desc: "Technical design with risks and trade-offs." },
      e: { title: "Execution", desc: "Sprints, quality and observability." },
      h: { title: "Handover", desc: "Deployment, documentation and knowledge transfer." }
    },
    faq: {
      title: "Frequently asked questions",
      q1: { q: "Do you work under NDA?", a: "Yes, we can sign an NDA before sharing sensitive info." },
      q2: { q: "Hourly or project contracts?", a: "Both. We recommend starting with a Discovery Sprint." },
      q3: { q: "Can you integrate with our team?", a: "Yes, we work alongside your squads and standards." }
    },
    contact: { title: "Tell us about your project", subtitle: "We reply within 24-48 hours. NDA available." },
    form: { name: "Name", email: "Email", company: "Company (optional)", message: "Message", service: "Area of interest", submit: "Send", serviceOptions: { backend: "Backend", ml: "AI/ML", automation: "Automations" } },
    footer: { privacy: "Privacy", terms: "Terms" }
  }
};

function t(lang){
  const dict = i18n[lang] || i18n.es;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const path = el.getAttribute('data-i18n').split('.');
    let val = dict;
    for(const p of path) val = val?.[p];
    if(typeof val === 'string') el.textContent = val;
  });
}

function setLanguage(lang){
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  t(lang);
  const select = document.getElementById('langSelect');
  if(select) select.value = lang;
}

function initLanguage(){
  const urlLang = new URLSearchParams(location.search).get('lang');
  const stored = localStorage.getItem('lang');
  const browser = (navigator.language || 'es').startsWith('en') ? 'en' : 'es';
  setLanguage(urlLang || stored || browser);
  const select = document.getElementById('langSelect');
  select?.addEventListener('change', () => setLanguage(select.value));
}

function initYear(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
}

function validate(form){
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return name && emailOk && message;
}

function initForm(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if(!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = document.documentElement.lang || 'es';
    status.textContent = lang === 'en' ? 'Sending…' : 'Enviando…';
    if(!validate(form)){
      status.textContent = lang === 'en' ? 'Please complete the required fields.' : 'Por favor completa los campos requeridos.';
      return;
    }
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      message: form.message.value.trim(),
      service: form.service.value,
      locale: lang
    };
    try{
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await res.json().catch(()=>({}));
      if(res.ok){
        status.textContent = lang === 'en' ? 'Message sent. We will get back to you soon.' : 'Mensaje enviado. Te contactaremos pronto.';
        form.reset();
      } else {
        status.textContent = data?.error || (lang === 'en' ? 'Error. Try again later.' : 'Error. Intenta más tarde.');
      }
    }catch{
      status.textContent = document.documentElement.lang === 'en' ? 'Network error.' : 'Error de red.';
    }
  });
}

function initAccordion(){
  document.querySelectorAll('.acc-item .acc-header').forEach(btn => {
    btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
  });
}

function initCarousel(){
  const slides = Array.from(document.querySelectorAll('#testimonialCarousel .slide'));
  if(slides.length <= 1) return;
  let idx = 0;
  setInterval(()=>{
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 5000);
}

function initReveal(){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('revealed'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

window.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initYear();
  initForm();
  initAccordion();
  initCarousel();
  initReveal();
});