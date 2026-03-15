// =============================================
// THE JOHNTOUR — Site Scripts
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const toggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  // --- Nav scroll effect ---
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // --- Scroll fade-up animations ---
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => observer.observe(el));
  }

  // --- Active nav link ---
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.nav-links a, .footer-nav a').forEach(link => {
    const href = link.getAttribute('href').replace('.html', '').replace('./', '').replace('/', '');
    const linkPage = href === '' || href === 'index' ? 'index' : href;
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // --- Notify form ---
  const notifyForm = document.getElementById('notifyForm');
  if (notifyForm) {
    notifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = notifyForm.querySelector('input');
      if (input && input.value) {
        input.value = '';
        const btn = notifyForm.querySelector('button');
        const original = btn.textContent;
        btn.textContent = "YOU'RE IN";
        btn.style.background = 'var(--navy)';
        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
        }, 2500);
      }
    });
  }

});
