(function () {
  // MOCK: replace with the client's real WhatsApp number before launch
  var WHATSAPP = '971500000000';
  var root = document.documentElement;

  // photos
  var P = window.FOC_PHOTOS || {};
  document.querySelectorAll('img[data-ph]').forEach(function (img) {
    var p = P[img.dataset.ph]; if (!p) return;
    img.src = p.src; img.alt = p.alt || ''; img.loading = img.closest('.hero') ? 'eager' : 'lazy';
    if (p.pos) img.style.objectPosition = p.pos;
  });
  function caps(lang) {
    document.querySelectorAll('figcaption[data-cap]').forEach(function (c) {
      var p = P[c.dataset.cap]; if (!p) return;
      c.innerHTML = p.model + '<small>' + (lang === 'ru' ? 'Найдём по запросу' : 'Sourced on request') + '</small>';
    });
  }

  // language
  function setLang(l) {
    root.dataset.lang = l; root.lang = l;
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.set === l); });
    document.querySelectorAll('option[data-ru]').forEach(function (o) {
      if (!o.dataset.en) o.dataset.en = o.textContent;
      o.textContent = l === 'ru' ? o.dataset.ru : o.dataset.en;
    });
    caps(l);
    try { localStorage.setItem('foc-lang', l); } catch (e) {}
  }
  var saved = null; try { saved = localStorage.getItem('foc-lang'); } catch (e) {}
  setLang(saved || ((navigator.language || '').slice(0, 2) === 'ru' ? 'ru' : 'en'));
  document.querySelectorAll('.lang button').forEach(function (b) { b.onclick = function () { setLang(b.dataset.set); }; });

  // nav
  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // reveal
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('seen'); io.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll('.rv').forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(el); });

  // tabs
  var current = 'find';
  function tab(t) {
    current = t;
    document.querySelectorAll('.tabs button').forEach(function (b) { b.classList.toggle('on', b.dataset.t === t); });
    document.querySelectorAll('[data-pane]').forEach(function (p) { p.hidden = p.dataset.pane !== t; });
  }
  document.querySelectorAll('.tabs button').forEach(function (b) { b.onclick = function () { tab(b.dataset.t); }; });
  document.querySelectorAll('[data-tab]').forEach(function (a) { a.addEventListener('click', function () { tab(a.dataset.tab); }); });

  // submit → WhatsApp
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, lines = [], labels = { find: 'Find a watch', sell: 'Sell / trade', visit: 'Visit' };
    lines.push('Fair O’Clock — ' + labels[current]);
    f.querySelectorAll('[data-pane="' + current + '"] [name], :scope > .row [name]').forEach(function (i) {
      if (i.value) lines.push((i.closest('label').querySelector('.en') || {}).textContent + ': ' + i.value);
    });
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  });
})();
