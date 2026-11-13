// Fair O'Clock monogram: dial ring + italic F. Fills every <svg data-mark>.
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  function el(n, a, p) { var e = document.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; }
  var uid = 0;
  document.querySelectorAll('svg[data-mark]').forEach(function (svg) {
    var id = 'ms' + (uid++), C = 100, ink = svg.dataset.ink || 'metal';
    svg.setAttribute('viewBox', '0 0 200 200');
    var d = el('defs', {}, svg);
    var g = el('linearGradient', { id: id, gradientUnits: 'userSpaceOnUse', x1: '0', y1: '0', x2: '200', y2: '200' }, d);
    [['0', '#7C4F2A'], ['.38', '#C9A56C'], ['.52', '#F1DBAA'], ['.7', '#B88A52'], ['1', '#6E4524']].forEach(function (s) { el('stop', { offset: s[0], 'stop-color': s[1] }, g); });
    var paint = ink === 'metal' ? 'url(#' + id + ')' : ink;
    el('circle', { cx: C, cy: C, r: 96, fill: 'none', stroke: paint, 'stroke-width': 1.6 }, svg);
    el('circle', { cx: C, cy: C, r: 89, fill: 'none', stroke: paint, 'stroke-width': .6, opacity: .7 }, svg);
    for (var i = 0; i < 60; i++) {
      var a = i * 6 * Math.PI / 180, major = i % 15 === 0, r1 = 89, r2 = major ? 76 : (i % 5 === 0 ? 82 : 86);
      if (major && i === 0) {
        [-2.6, 2.6].forEach(function (o) { el('line', { x1: C + o, y1: C - r1, x2: C + o, y2: C - 74, stroke: paint, 'stroke-width': 2.2 }, svg); });
        continue;
      }
      el('line', { x1: C + r1 * Math.sin(a), y1: C - r1 * Math.cos(a), x2: C + r2 * Math.sin(a), y2: C - r2 * Math.cos(a), stroke: paint, 'stroke-width': major ? 2.6 : (i % 5 === 0 ? 1.1 : .6), opacity: major || i % 5 === 0 ? 1 : .6 }, svg);
    }
    var t = el('text', { x: C + 2, y: C + 34, 'text-anchor': 'middle', fill: paint, 'font-family': "'Cormorant Garamond', Georgia, serif", 'font-size': 104, 'font-style': 'italic', 'font-weight': 400 }, svg);
    t.textContent = 'F';
  });
})();
