// Dark mode button and abstract buttons.
(function () {
  var root = document.documentElement;

  // Dark mode: switch, and remember the choice for the next visit.
  var toggle = document.querySelector('.theme-toggle');
  function setDark(dark) {
    if (dark) { root.setAttribute('data-theme', 'dark'); }
    else { root.removeAttribute('data-theme'); }
    if (toggle) { toggle.setAttribute('aria-pressed', dark ? 'true' : 'false'); }
  }
  setDark(root.getAttribute('data-theme') === 'dark');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') !== 'dark';
      setDark(dark);
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
    });
  }

  // Abstracts: each "abstract" button opens and closes the text below it.
  var buttons = document.querySelectorAll('.abstract-toggle');
  for (var i = 0; i < buttons.length; i++) {
    (function (button) {
      var panel = document.getElementById(button.getAttribute('aria-controls'));
      if (!panel) { return; }
      button.addEventListener('click', function () {
        var open = button.getAttribute('aria-expanded') !== 'true';
        button.setAttribute('aria-expanded', open ? 'true' : 'false');
        panel.classList.toggle('is-open', open);
      });
    })(buttons[i]);
  }
})();
