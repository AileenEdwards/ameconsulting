/* ============================================================
   AME CONSULTING — V10  ·  shared interaction layer
   Depends (global, via CDN): gsap, ScrollTrigger, SplitText, Lenis
   Everything degrades: with no JS or reduced-motion, content
   is fully visible (CSS shows final states).
   ============================================================ */
(function () {
  'use strict';

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const TOUCH = window.matchMedia('(hover: none)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined';

  /* ---------------------------------------------------------
     0. PRELOADER  (runs even without GSAP, just faster)
     --------------------------------------------------------- */
  function runPreloader(done) {
    const pre = document.querySelector('.preloader');
    if (!pre) { done(); return; }
    const count = pre.querySelector('.preloader__count');
    const bar = pre.querySelector('.preloader__bar i');

    if (REDUCED || !hasGSAP) {
      pre.style.display = 'none';
      done();
      return;
    }
    const obj = { v: 0 };
    const tl = gsap.timeline({ onComplete: done });
    tl.to(obj, {
      v: 100, duration: 1.4, ease: 'power2.inOut',
      onUpdate: () => {
        const n = Math.round(obj.v);
        if (count) count.textContent = n.toString().padStart(2, '0');
        if (bar) bar.style.width = n + '%';
      }
    })
    .to('.preloader__count', { yPercent: -120, opacity: 0, duration: 0.6, ease: 'power3.in' }, '+=0.1')
    .to('.preloader__bar', { opacity: 0, duration: 0.3 }, '<')
    .to(pre, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '-=0.1')
    .set(pre, { display: 'none' });
  }

  /* ---------------------------------------------------------
     1. LENIS smooth scroll  (synced to ScrollTrigger)
     --------------------------------------------------------- */
  let lenis = null;
  function initLenis() {
    if (REDUCED || TOUCH || typeof window.Lenis === 'undefined') return;
    lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    if (hasGSAP && window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    }
    // anchor links go through Lenis
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length > 1 && document.querySelector(id)) {
          e.preventDefault();
          lenis.scrollTo(id, { offset: -80 });
        }
      });
    });
  }

  /* ---------------------------------------------------------
     2. CUSTOM CURSOR
     --------------------------------------------------------- */
  function initCursor() {
    if (REDUCED || TOUCH || !hasGSAP) return;
    const dot = document.createElement('div'); dot.className = 'cursor-dot';
    const ring = document.createElement('div'); ring.className = 'cursor-ring';
    document.body.append(dot, ring);
    document.body.classList.add('cursor-custom');
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
    window.addEventListener('mousemove', (e) => {
      xDot(e.clientX); yDot(e.clientY); xRing(e.clientX); yRing(e.clientY);
    });
    document.querySelectorAll('a, button, .tilt-card, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
    });
  }

  /* ---------------------------------------------------------
     3. MAGNETIC BUTTONS
     --------------------------------------------------------- */
  function initMagnetic() {
    if (REDUCED || TOUCH || !hasGSAP) return;
    document.querySelectorAll('.magnetic').forEach((el) => {
      const strength = parseFloat(el.dataset.strength || '0.4');
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        gsap.to(el, { x, y, duration: 0.6, ease: 'power3.out' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.4)' });
      });
    });
  }

  /* ---------------------------------------------------------
     4. NAV scroll state + mobile menu
     --------------------------------------------------------- */
  function initNav() {
    const nav = document.querySelector('.nav-shell');
    if (nav) {
      const onScroll = () => nav.classList.toggle('is-solid', window.scrollY > 60);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
    const openBtn = document.querySelector('[data-menu-open]');
    const closeBtn = document.querySelector('[data-menu-close]');
    const menu = document.querySelector('.mobile-nav');
    if (openBtn && menu) {
      const toggle = (open) => {
        menu.classList.toggle('is-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
        if (lenis) open ? lenis.stop() : lenis.start();
      };
      openBtn.addEventListener('click', () => toggle(true));
      closeBtn && closeBtn.addEventListener('click', () => toggle(false));
      menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggle(false)));
    }
  }

  /* ---------------------------------------------------------
     5. HEADLINE split reveal (SplitText if available)
     --------------------------------------------------------- */
  function initSplitHeadlines() {
    if (REDUCED || !hasGSAP) return;
    document.querySelectorAll('[data-split="words"]').forEach((el) => {
      let words;
      if (window.SplitText) {
        const s = new SplitText(el, { type: 'words', wordsClass: 'split-word' });
        words = s.words;
      } else {
        // manual word wrap fallback
        el.innerHTML = el.textContent.replace(/\S+/g, '<span class="split-word">$&</span>');
        words = el.querySelectorAll('.split-word');
      }
      const delay = parseFloat(el.dataset.delay || '0');
      gsap.set(words, { yPercent: 115, opacity: 0 });
      gsap.to(words, {
        yPercent: 0, opacity: 1, duration: 1.1, ease: 'power4.out', stagger: 0.055, delay,
        scrollTrigger: el.dataset.trigger === 'scroll'
          ? { trigger: el, start: 'top 85%' } : undefined
      });
    });
  }

  /* ---------------------------------------------------------
     6. Generic scroll reveals
     --------------------------------------------------------- */
  function initReveals() {
    if (!hasGSAP || !window.ScrollTrigger) {
      // ensure visible
      document.querySelectorAll('.reveal, .reveal-up').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; });
      return;
    }
    if (REDUCED) {
      gsap.set('.reveal, .reveal-up', { opacity: 1, y: 0 });
      return;
    }
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });
    // staggered groups
    gsap.utils.toArray('[data-reveal-group]').forEach((group) => {
      const items = group.querySelectorAll('.reveal-up');
      gsap.to(items, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: group, start: 'top 82%' }
      });
    });
    // line masks
    gsap.utils.toArray('.line-mask').forEach((mask) => {
      const inner = mask.children[0];
      gsap.from(inner, {
        yPercent: 110, duration: 1.1, ease: 'power4.out',
        scrollTrigger: { trigger: mask, start: 'top 90%' }
      });
    });
  }

  /* ---------------------------------------------------------
     7. Animated counters
     --------------------------------------------------------- */
  function initCounters() {
    document.querySelectorAll('[data-count]').forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.decimals || '0', 10);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const render = (v) => el.textContent = prefix + v.toFixed(dec) + suffix;
      if (REDUCED || !hasGSAP || !window.ScrollTrigger) { render(target); return; }
      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el, start: 'top 88%', once: true,
        onEnter: () => gsap.to(obj, { v: target, duration: 2, ease: 'power2.out', onUpdate: () => render(obj.v) })
      });
    });
  }

  /* ---------------------------------------------------------
     8. Marquee (seamless, scroll-velocity aware)
     --------------------------------------------------------- */
  function initMarquee() {
    document.querySelectorAll('[data-marquee]').forEach((track) => {
      const inner = track.querySelector('.marquee');
      if (!inner) return;
      inner.innerHTML += inner.innerHTML; // duplicate for loop
      if (REDUCED || !hasGSAP) return;
      const dir = track.dataset.marquee === 'right' ? 1 : -1;
      const half = inner.scrollWidth / 2;
      const x = gsap.fromTo(inner, { x: dir < 0 ? 0 : -half }, {
        x: dir < 0 ? -half : 0, duration: 24, ease: 'none', repeat: -1
      });
      // briefly speed the marquee with scroll velocity, then ease back to 1x
      if (window.ScrollTrigger) {
        let reset;
        ScrollTrigger.create({
          onUpdate: (self) => {
            const v = 1 + Math.min(Math.abs(self.getVelocity()) / 1400, 2.5);
            x.timeScale(v);
            clearTimeout(reset);
            reset = setTimeout(() => gsap.to(x, { timeScale: 1, duration: 0.6, ease: 'power2.out' }), 120);
          }
        });
      }
    });
  }

  /* ---------------------------------------------------------
     9. Tilt / spotlight cards
     --------------------------------------------------------- */
  function initTilt() {
    if (TOUCH) return;
    document.querySelectorAll('.tilt-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', px * 100 + '%');
        card.style.setProperty('--my', py * 100 + '%');
        if (!REDUCED && hasGSAP && card.dataset.tilt !== 'off') {
          gsap.to(card, { rotateY: (px - 0.5) * 6, rotateX: (0.5 - py) * 6, duration: 0.5, ease: 'power2.out', transformPerspective: 900 });
        }
      });
      card.addEventListener('mouseleave', () => {
        if (!REDUCED && hasGSAP) gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.7, ease: 'power3.out' });
      });
    });
  }

  /* ---------------------------------------------------------
     10. Parallax images
     --------------------------------------------------------- */
  function initParallax() {
    if (REDUCED || !hasGSAP || !window.ScrollTrigger) return;
    gsap.utils.toArray('[data-parallax]').forEach((el) => {
      const amt = parseFloat(el.dataset.parallax || '12');
      gsap.fromTo(el, { yPercent: -amt }, {
        yPercent: amt, ease: 'none',
        scrollTrigger: { trigger: el.closest('[data-parallax-wrap]') || el, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
  }

  /* ---------------------------------------------------------
     11. BOLD kinetic pin (landing only)
     --------------------------------------------------------- */
  function initBold() {
    const section = document.querySelector('[data-bold]');
    if (!section || REDUCED || !hasGSAP || !window.ScrollTrigger) {
      // reveal pillars statically
      document.querySelectorAll('[data-bold] .bold-pillar').forEach((p) => { p.style.opacity = 1; });
      document.querySelectorAll('[data-bold] .bold-letter').forEach((l) => l.classList.add('is-filled'));
      return;
    }
    const letters = section.querySelectorAll('.bold-letter');
    const pillars = section.querySelectorAll('.bold-pillar');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top top', end: '+=' + (pillars.length * 60) + '%', scrub: 1, pin: '.bold-stage' }
    });
    letters.forEach((letter, i) => {
      tl.to(letter, { className: 'bold-letter is-filled', duration: 0.4 }, i * 1);
      if (pillars[i]) {
        tl.fromTo(pillars[i], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4 }, i * 1);
        if (pillars[i - 1]) tl.to(pillars[i - 1], { opacity: 0.15, duration: 0.3 }, i * 1);
      }
    });
  }

  /* ---------------------------------------------------------
     12. Horizontal scroll services (landing)
     --------------------------------------------------------- */
  function initHorizontal() {
    const wrap = document.querySelector('[data-horizontal]');
    if (!wrap) return;
    const track = wrap.querySelector('[data-h-track]');
    if (!track) return;
    if (REDUCED || !hasGSAP || !window.ScrollTrigger || window.innerWidth < 1024) return;
    const distance = track.scrollWidth - window.innerWidth + 120;
    gsap.to(track, {
      x: -distance, ease: 'none',
      scrollTrigger: { trigger: wrap, start: 'top top', end: '+=' + distance, scrub: 1, pin: true, anticipatePin: 1 }
    });
  }

  /* ---------------------------------------------------------
     BOOT
     --------------------------------------------------------- */
  function boot() {
    if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    if (hasGSAP && window.SplitText) gsap.registerPlugin(SplitText);

    initLenis();
    initCursor();
    initNav();
    initMagnetic();
    initSplitHeadlines();
    initReveals();
    initCounters();
    initMarquee();
    initTilt();
    initParallax();
    initBold();
    initHorizontal();

    if (hasGSAP && window.ScrollTrigger) {
      ScrollTrigger.refresh();
      window.addEventListener('load', () => ScrollTrigger.refresh());
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    runPreloader(boot);
  });
})();
