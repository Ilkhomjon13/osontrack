(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const body = document.body;

  if (!toggle || !nav) return;

  // Accessibility init
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'primary-navigation');

  const openNav = () => {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  };

  const toggleNav = () => {
    nav.classList.contains('open') ? closeNav() : openNav();
  };

  // Toggle click
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNav();
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      closeNav();
    }
  });

  // Close on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNav();
    }
  });

  // Reset on resize (desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeNav();
    }
  });
})();
