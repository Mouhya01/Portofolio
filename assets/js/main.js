

(function () {
  'use strict';

  /* ── 1. Navbar scroll behaviour ──  */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ── 2. Mobile navigation toggle ──  */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.innerHTML = isOpen
        ? '<i class="bi bi-x-lg"></i>'
        : '<i class="bi bi-list"></i>';
    });

    /* Close mobile menu when a link is clicked */
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<i class="bi bi-list"></i>';
      });
    });
  }

  /* ── 3. Scroll-triggered reveal animation ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── 4. Skill bar width animation ── */
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card  = entry.target;
        const bar   = card.querySelector('.skill-bar');
        const level = card.dataset.skillLevel;
        if (bar && level) {
          setTimeout(() => { bar.style.width = level + '%'; }, 300);
        }
        barObserver.unobserve(card);
      }
    });
  }, { threshold: 0.30 });

  document.querySelectorAll('[data-skill-level]').forEach(el => barObserver.observe(el));

  /* ── 5. Page-level active nav link ─── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) link.classList.add('active');
    else link.classList.remove('active');
  });

  /* ── 6. Smooth counter animation (About page stats) ── */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el       = entry.target;
      const target   = parseInt(el.dataset.target, 10);
      const suffix   = el.dataset.suffix || '';
      const duration = 1400;
      const start    = performance.now();

      function step(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        /* Ease-out cubic */
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

})();
