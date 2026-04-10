/* Header scroll behavior */
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  function updateHeader() {
    if (window.scrollY >= 5) {
      header.classList.add('site-header-scrolled');
    } else {
      header.classList.remove('site-header-scrolled');
    }
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
})();
