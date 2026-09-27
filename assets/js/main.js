(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  menuButton?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.setAttribute('aria-label', 'Open navigation');
    });
  });

  document.addEventListener('click', (event) => {
    if (!nav?.classList.contains('open')) return;
    if (nav.contains(event.target) || menuButton?.contains(event.target)) return;
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  });
})();
