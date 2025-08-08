(function() {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Number(el.getAttribute('data-reveal-delay') || 0);
          setTimeout(() => el.classList.add('is-visible'), delay);
          observer.unobserve(el);
        }
      }
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  }

  // Parallax for hero text
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
  if (parallaxEls.length && !prefersReducedMotion) {
    const speeds = parallaxEls.map(el => Number(el.getAttribute('data-speed') || 0.2));
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      parallaxEls.forEach((el, i) => {
        el.style.transform = `translateY(${Math.round(y * speeds[i])}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Tilt effect for cards
  const tiltEls = Array.from(document.querySelectorAll('[data-tilt]'));
  if (tiltEls.length && !prefersReducedMotion) {
    const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
    tiltEls.forEach((card) => {
      const onMove = (ev) => {
        const rect = card.getBoundingClientRect();
        const px = (ev.clientX - rect.left) / rect.width;
        const py = (ev.clientY - rect.top) / rect.height;
        const rotateX = clamp((0.5 - py) * 10, -8, 8);
        const rotateY = clamp((px - 0.5) * 10, -8, 8);
        card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      const onLeave = () => { card.style.transform = 'perspective(700px) rotateX(0) rotateY(0)'; };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    });
  }

  // Marquee duplication to ensure continuous scroll
  const marquee = document.querySelector('[data-marquee]');
  if (marquee) {
    const text = marquee.innerHTML.trim();
    marquee.innerHTML = text + text + text; // duplicate content for seamless loop
  }

  // Smooth scroll for internal anchor links (with native behavior fallback)
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();