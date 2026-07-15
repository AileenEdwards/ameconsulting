/* ============================================================
   AME CONSULTING — V10 · colour-theme preview switcher
   Temporary review widget: lets Aileen flip between palette
   variations. Remove this file (plus css/themes.css, the
   data-theme head snippet and these <script>/<link> tags)
   once a palette is chosen — or hard-code the winner in v10.css.
   ============================================================ */
(function () {
  'use strict';

  var KEY = 'v10-theme';
  var THEMES = [
    { id: 'midnight',  label: 'Midnight (current)', swatch: ['#1A1520', '#C8A951'] },
    { id: 'classic',   label: 'Brand Classic',      swatch: ['#554A5B', '#DCD1DF'] },
    { id: 'heather',   label: 'Heather',            swatch: ['#675470', '#DCD1DF'] },
    { id: 'porcelain', label: 'Porcelain',          swatch: ['#F2F2F2', '#8B2346'] },
    { id: 'lavender',  label: 'Lavender Mist',      swatch: ['#DCD1DF', '#8B2346'] },
    { id: 'dove',      label: 'Dove Grey',          swatch: ['#E8E8E8', '#675470'] },
    { id: 'pearl',     label: 'Pearl',              swatch: ['#FFFFFF', '#675470'] }
  ];

  function current() {
    try { return localStorage.getItem(KEY) || 'midnight'; } catch (e) { return 'midnight'; }
  }

  function apply(id) {
    if (id === 'midnight') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', id);
    }
    try { localStorage.setItem(KEY, id); } catch (e) {}
    document.querySelectorAll('.theme-switcher__option').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.themeChoice === id ? 'true' : 'false');
    });
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: id } }));
  }

  function build() {
    var active = current();
    var root = document.createElement('div');
    root.className = 'theme-switcher';

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'theme-switcher__toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Change colour theme');
    toggle.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M12 22a10 10 0 1 1 10-10c0 2.2-1.8 3-3.5 3H16a2.5 2.5 0 0 0-2 4c.5.7 0 3-2 3z"/>' +
      '<circle cx="7.5" cy="11.5" r="1"/><circle cx="11" cy="7.5" r="1"/><circle cx="16" cy="9" r="1"/>' +
      '</svg>';

    var panel = document.createElement('div');
    panel.className = 'theme-switcher__panel';
    panel.setAttribute('role', 'group');
    panel.setAttribute('aria-label', 'Colour themes');
    panel.hidden = true;

    var label = document.createElement('div');
    label.className = 'theme-switcher__label';
    label.textContent = 'Colour preview';
    panel.appendChild(label);

    THEMES.forEach(function (t) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'theme-switcher__option';
      btn.dataset.themeChoice = t.id;
      btn.setAttribute('aria-pressed', t.id === active ? 'true' : 'false');
      btn.innerHTML =
        '<span class="theme-switcher__swatch"><i style="background:' + t.swatch[0] + '"></i><i style="background:' + t.swatch[1] + '"></i></span>' +
        '<span>' + t.label + '</span>' +
        '<svg class="theme-switcher__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>';
      btn.addEventListener('click', function () { apply(t.id); });
      panel.appendChild(btn);
    });

    function setOpen(open) {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    toggle.addEventListener('click', function () { setOpen(panel.hidden); });
    document.addEventListener('click', function (e) {
      if (!panel.hidden && !root.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) { setOpen(false); toggle.focus(); }
    });

    root.appendChild(toggle);
    root.appendChild(panel);
    document.body.appendChild(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
