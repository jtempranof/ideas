const i18n = {
  es: {
    nav: { services: "Servicios", industries: "Sectores", process: "Proceso", contact: "Contacto" },
    hero: {
      title: { line1: "Backend de élite", line2: "IA y automatización", line3: "sin humo." },
      subtitle: "Equipos senior que construyen sistemas robustos, modelos de ML listos para producción y automatizaciones que ahorran horas desde el día uno."
    },
    cta: { talk: "Hablemos", services: "Ver servicios" },
    badges: { experience: "+10 años en Transporte, Turismo, Deporte, Finanzas y Medicina" },
    services: {
      title: "Servicios",
      backend: {
        title: "Backend a medida",
        desc: "APIs escalables, microservicios, arquitectura de eventos, mensajería, observabilidad y DevOps.",
        point1: "Diseño y construcción de APIs y microservicios",
        point2: "Bases de datos SQL/NoSQL, colas y streaming",
        point3: "Performance, seguridad y SRE"
      },
      ml: {
        title: "IA y Machine Learning",
        desc: "Modelos de predicción, NLP, LLMs, MLOps y evaluaciones. Fine-tuning e inferencia eficiente.",
        point1: "LLMs, RAG, evaluación y guardrails",
        point2: "Entrenamiento, despliegue e integración",
        point3: "Computer Vision, NLP, tabular y series temporales"
      },
      automation: {
        title: "Automatizaciones",
        desc: "Workflows sin fricción con Zapier/Make, bots, RPA y scripts a medida.",
        point1: "Integraciones SaaS y ETL de datos",
        point2: "Orquestación y monitoreo",
        point3: "Bots y asistentes internos"
      }
    },
    industries: {
      title: "Experiencia por sectores",
      transport: "Transporte",
      tourism: "Turismo",
      sports: "Deporte",
      finance: "Finanzas",
      health: "Medicina",
      note: "Hemos trabajado con startups y corporaciones, integrando sistemas legados y cloud."
    },
    process: {
      title: "Proceso",
      step1: { title: "Descubrimiento", desc: "Entendemos tu contexto, restricciones y métricas clave." },
      step2: { title: "Arquitectura", desc: "Diseño técnico claro, riesgos conocidos y roadmap incremental." },
      step3: { title: "Ejecución", desc: "Sprints cortos, entregables medibles y comunicación transparente." },
      step4: { title: "Entrega y soporte", desc: "Despliegue, documentación y transferencia de conocimiento." }
    },
    contact: { title: "Cuéntanos sobre tu proyecto", subtitle: "Respondemos en 24-48 horas. También podemos firmar NDA." },
    form: { name: "Nombre", email: "Email", company: "Empresa (opcional)", message: "Mensaje", submit: "Enviar" },
    footer: { legal: "Privacidad" }
  },
  en: {
    nav: { services: "Services", industries: "Industries", process: "Process", contact: "Contact" },
    hero: {
      title: { line1: "Elite backend", line2: "AI and automation", line3: "without the fluff." },
      subtitle: "Senior teams building robust systems, production-ready ML and automations that save hours from day one."
    },
    cta: { talk: "Let's talk", services: "See services" },
    badges: { experience: "+10 years across Transportation, Tourism, Sports, Finance and Healthcare" },
    services: {
      title: "Services",
      backend: {
        title: "Custom backend",
        desc: "Scalable APIs, microservices, event architectures, messaging, observability and DevOps.",
        point1: "API and microservices design and build",
        point2: "SQL/NoSQL, queues and streaming",
        point3: "Performance, security and SRE"
      },
      ml: {
        title: "AI and Machine Learning",
        desc: "Predictive models, NLP, LLMs, MLOps and evaluation. Fine-tuning and efficient inference.",
        point1: "LLMs, RAG, evaluation and guardrails",
        point2: "Training, deployment and integration",
        point3: "Computer Vision, NLP, tabular and time series"
      },
      automation: {
        title: "Automations",
        desc: "Frictionless workflows with Zapier/Make, bots, RPA and custom scripts.",
        point1: "SaaS integrations and data ETL",
        point2: "Orchestration and monitoring",
        point3: "Bots and internal assistants"
      }
    },
    industries: {
      title: "Industry experience",
      transport: "Transportation",
      tourism: "Tourism",
      sports: "Sports",
      finance: "Finance",
      health: "Healthcare",
      note: "We have worked with startups and enterprises, integrating legacy systems and cloud."
    },
    process: {
      title: "Process",
      step1: { title: "Discovery", desc: "We learn your context, constraints and key metrics." },
      step2: { title: "Architecture", desc: "Clear technical plan, known risks and incremental roadmap." },
      step3: { title: "Execution", desc: "Short sprints, measurable deliverables and transparent comms." },
      step4: { title: "Delivery & support", desc: "Deployment, documentation and knowledge transfer." }
    },
    contact: { title: "Tell us about your project", subtitle: "We reply within 24-48 hours. NDA available." },
    form: { name: "Name", email: "Email", company: "Company (optional)", message: "Message", submit: "Send" },
    footer: { legal: "Privacy" }
  }
};

const elementsByKey = () => document.querySelectorAll('[data-i18n]');
function setLanguage(lang){
  const dict = i18n[lang] || i18n.es;
  elementsByKey().forEach(el => {
    const path = el.getAttribute('data-i18n').split('.');
    let value = dict;
    for(const p of path){ value = value?.[p]; }
    if(typeof value === 'string'){ el.textContent = value; }
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

function initLanguage(){
  const urlLang = new URLSearchParams(location.search).get('lang');
  const stored = localStorage.getItem('lang');
  const browser = (navigator.language || 'es').startsWith('en') ? 'en' : 'es';
  setLanguage(urlLang || stored || browser);
}

function initYear(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
}

function initLangToggle(){
  const btn = document.getElementById('langToggle');
  btn?.addEventListener('click', () => {
    const current = document.documentElement.lang || 'es';
    setLanguage(current === 'es' ? 'en' : 'es');
  });
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
    status.textContent = document.documentElement.lang === 'en' ? 'Sending…' : 'Enviando…';
    const ok = validate(form);
    if(!ok){
      status.textContent = document.documentElement.lang === 'en' ? 'Please complete the required fields.' : 'Por favor completa los campos requeridos.';
      return;
    }
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      message: form.message.value.trim(),
      locale: document.documentElement.lang || 'es'
    };
    try{
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if(res.ok){
        status.textContent = document.documentElement.lang === 'en' ? 'Message sent. We will get back to you soon.' : 'Mensaje enviado. Te contactaremos pronto.';
        form.reset();
      } else {
        status.textContent = data?.error || (document.documentElement.lang === 'en' ? 'Error. Try again later.' : 'Error. Intenta más tarde.');
      }
    }catch(err){
      status.textContent = document.documentElement.lang === 'en' ? 'Network error.' : 'Error de red.';
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initLangToggle();
  initYear();
  initForm();
});