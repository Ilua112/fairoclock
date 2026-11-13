// Live photos, free licence (Unsplash License / Pexels License). Credits: ../../CREDITS.md
// Stock imagery — replace with the client's own shoots when available.
(function () {
  function u(id, w) { return 'https://images.unsplash.com/' + id + '?w=' + (w || 2000) + '&q=80&fm=jpg&auto=format'; }
  function x(id, w) { return 'https://images.pexels.com/photos/' + id + '/pexels-photo-' + id + '.jpeg?auto=compress&cs=tinysrgb&w=' + (w || 2000); }
  window.FOC_PHOTOS = {
    hero:     { src: 'assets/img/1772793384358-2400.jpg', alt: 'Rolex Daytona on a display stand', pos: '72% 50%' },
    sourcing: { src: 'assets/img/1730757679771-1200.jpg', alt: 'Rolex Submariner on a stand', pos: '50% 45%' },
    sell:     { src: 'assets/img/1760541791863-1200.jpg', alt: 'Rolex in its green presentation box', pos: '50% 60%' },
    tradein:  { src: 'assets/img/1620625515032-1200.jpg', alt: 'Rolex Datejust', pos: '50% 50%' },
    verify:   { src: 'assets/img/1663564307102-1200.jpg', alt: 'Patek Philippe engraved caseback', pos: '50% 50%' },
    passport: { src: 'assets/img/1663564306837-1800.jpg', alt: 'Patek Philippe perpetual calendar, front', pos: '45% 45%' },
    enquiry:  { src: 'assets/img/1690220108517-1800.jpg', alt: 'Rolex watches in presentation boxes' },
    showroom: { src: 'assets/img/1759683733144-2000.jpg', alt: 'Rolex on a display stand', pos: '50% 50%' },
    g1: { src: 'assets/img/1587925358603-1600.jpg', model: 'Rolex Daytona', alt: 'Gold Rolex Daytona', pos: '50% 45%' },
    g2: { src: 'assets/img/1611243705491-1000.jpg', model: 'Rolex Oyster Perpetual Date', alt: 'Rolex Oyster Perpetual Date, blue dial', pos: '45% 50%' },
    g3: { src: 'assets/img/1598624725582-1200.jpg', model: 'Rolex Datejust', alt: 'Rolex Datejust in its box', pos: '52% 45%' },
    g4: { src: 'assets/img/1663564306120-1200.jpg', model: 'Patek Philippe Perpetual Calendar', alt: 'Patek Philippe perpetual calendar', pos: '50% 30%' },
    g5: { src: 'assets/img/1790699807407-1000.jpg', model: 'Rolex Day-Date', alt: 'Rolex Day-Date' },
    // Instagram
    ig2: { src: 'assets/img/1772793384358-1800.jpg', pos: '76% 50%' },
    ig3: { src: 'assets/img/1730757679771-1600.jpg', pos: '50% 50%' },
    ig5: { src: 'assets/img/1663564306837-2000.jpg', model: 'Patek Philippe · Perpetual Calendar', pos: '44% 50%' },
    ig6: { src: 'assets/img/1760541791863-1600.jpg', pos: '50% 55%' },
    ig8: { src: 'assets/img/1620625515032-1600.jpg', pos: '50% 50%' },
    ig9: { src: 'assets/img/1690220108517-1600.jpg' }
  };
})();
