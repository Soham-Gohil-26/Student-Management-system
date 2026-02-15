(function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('[data-nav]').forEach((link) => {
    const target = link.getAttribute('href');
    if (path.endsWith(target)) {
      link.classList.add('active');
    }
  });
})();
