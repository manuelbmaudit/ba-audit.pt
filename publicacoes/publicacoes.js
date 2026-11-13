(function () {
  var MONTHS = {
    pt: ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'],
    en: ['January','February','March','April','May','June','July','August','September','October','November','December']
  };
  var UI = {
    pt: { note: '', deck: 'Conjunto de slides', pdf: 'Descarregar PDF', prev: 'Slide anterior', next: 'Slide seguinte', back: 'Publicações', slide: 'Slide' },
    en: { note: 'Published in Portuguese', deck: 'Slide deck', pdf: 'Download PDF', prev: 'Previous slide', next: 'Next slide', back: 'Insights', slide: 'Slide' }
  };

  function base() {
    return document.body.getAttribute('data-root') || '';
  }
  function lang() {
    return document.documentElement.lang === 'en' ? 'en' : 'pt';
  }
  function t(item) {
    return lang() === 'en' ? item.titleEn : item.title;
  }
  function formatDate(iso) {
    if (!iso) return '';
    var p = iso.split('-');
    var m = MONTHS[lang()][Number(p[1]) - 1];
    return lang() === 'en' ? (Number(p[2]) + ' ' + m + ' ' + p[0]) : (Number(p[2]) + ' de ' + m + ' de ' + p[0]);
  }
  function ordered(items) {
    return items.slice().sort(function (a, b) {
      if (a.pin && !b.pin) return -1;
      if (!a.pin && b.pin) return 1;
      if (a.date && b.date) return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
      if (a.date) return -1;
      if (b.date) return 1;
      return 0;
    });
  }
  function summary(item) {
    if (lang() === 'en') return '';
    return (item.summary || []).join(' ');
  }
  function cover(item, eager) {
    if (item.kind === 'newsletter') {
      var box = document.createElement('div');
      box.className = 'pub-mark';
      var kicker = document.createElement('p');
      kicker.className = 'pub-mark-kicker';
      kicker.textContent = 'Newsletter';
      var num = document.createElement('p');
      num.className = 'pub-mark-num';
      num.textContent = (item.mark && item.mark[lang()]) || '';
      box.appendChild(kicker);
      box.appendChild(num);
      return box;
    }
    var id = item.id;
    var root = base() + 'publicacoes/img/' + id + '/';
    var pic = document.createElement('picture');
    var source = document.createElement('source');
    source.type = 'image/webp';
    source.srcset = root + '1-540.webp 540w, ' + root + '1-1080.webp 1080w';
    source.sizes = '(max-width: 700px) 92vw, 360px';
    var img = document.createElement('img');
    img.src = root + '1-1080.jpg';
    img.srcset = root + '1-540.jpg 540w, ' + root + '1-1080.jpg 1080w';
    img.sizes = source.sizes;
    img.width = 1080;
    img.height = 1350;
    img.alt = t(item);
    img.decoding = 'async';
    if (!eager) img.loading = 'lazy';
    pic.appendChild(source);
    pic.appendChild(img);
    return pic;
  }
  function card(item, href, eager) {
    var a = document.createElement('a');
    a.className = 'pub-card reveal';
    a.href = href;
    a.appendChild(cover(item, eager));
    var date = formatDate(item.date);
    if (date) {
      var d = document.createElement('p');
      d.className = 'pub-date';
      d.textContent = date;
      a.appendChild(d);
    }
    var h = document.createElement(document.body.getAttribute('data-pub-page') === 'home' ? 'h3' : 'h2');
    h.textContent = t(item);
    a.appendChild(h);
    var note = UI[lang()].note;
    if (note) {
      var n = document.createElement('p');
      n.className = 'pub-note';
      n.textContent = note;
      a.appendChild(n);
    }
    var text = summary(item);
    if (text) {
      var p = document.createElement('p');
      p.className = 'pub-summary';
      p.textContent = text;
      a.appendChild(p);
    }
    return a;
  }
  function hrefFor(item) {
    if (item.href) return item.href;
    var id = item.id;
    var page = document.body.getAttribute('data-pub-page');
    if (lang() === 'en') {
      return (page === 'home' ? 'en/insights/deck/' : (page === 'deck' ? './' : 'deck/')) + '?id=' + encodeURIComponent(id);
    }
    return (page === 'home' ? 'publicacoes/conjunto/' : (page === 'deck' ? './' : 'conjunto/')) + '?id=' + encodeURIComponent(id);
  }
  function reveal(nodes) {
    if (!document.documentElement.classList.contains('anim') || !('IntersectionObserver' in window)) {
      nodes.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var limit = window.innerHeight || 0;
    var pending = [];
    nodes.forEach(function (el) {
      if (el.getBoundingClientRect().top < limit) el.classList.add('in');
      else pending.push(el);
    });
    if (!pending.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    pending.forEach(function (el) { io.observe(el); });
  }
  function renderList(items, mount, limit) {
    mount.textContent = '';
    var slice = typeof limit === 'number' ? items.slice(0, limit) : items;
    slice.forEach(function (item, i) {
      mount.appendChild(card(item, hrefFor(item), i < 3));
    });
    reveal(Array.prototype.slice.call(mount.children));
  }
  function slideSrc(id, n) {
    var root = base() + 'publicacoes/img/' + id + '/' + n;
    return {
      webp: root + '-540.webp 540w, ' + root + '-1080.webp 1080w',
      jpg: root + '-1080.jpg',
      jpgset: root + '-540.jpg 540w, ' + root + '-1080.jpg 1080w'
    };
  }
  function mountDeck(items) {
    var root = document.querySelector('[data-pub-deck]');
    if (!root) return;
    var id = new URLSearchParams(location.search).get('id');
    var item = items.filter(function (x) { return x.id === id; })[0];
    var ui = UI[lang()];
    if (!item) {
      root.innerHTML = '<p><a class="back" href="' + (lang() === 'en' ? '../' : '../') + '">' + ui.back + '</a></p>';
      return;
    }
    document.title = t(item) + ' — BA AUDIT';
    var index = 0;
    var total = item.slides || 6;
    root.innerHTML = '';
    var back = document.createElement('a');
    back.className = 'back';
    back.href = '../';
    back.textContent = ui.back;
    var layout = document.createElement('div');
    layout.className = 'deck';
    var viewer = document.createElement('div');
    viewer.className = 'viewer';
    var pic = document.createElement('picture');
    var source = document.createElement('source');
    source.type = 'image/webp';
    var img = document.createElement('img');
    img.width = 1080;
    img.height = 1350;
    img.decoding = 'async';
    pic.appendChild(source);
    pic.appendChild(img);
    viewer.appendChild(pic);
    var bar = document.createElement('div');
    bar.className = 'viewer-bar';
    var prev = document.createElement('button');
    prev.type = 'button';
    prev.setAttribute('aria-label', ui.prev);
    prev.textContent = '←';
    var count = document.createElement('p');
    count.setAttribute('aria-live', 'polite');
    var next = document.createElement('button');
    next.type = 'button';
    next.setAttribute('aria-label', ui.next);
    next.textContent = '→';
    bar.appendChild(prev); bar.appendChild(count); bar.appendChild(next);
    var side = document.createElement('div');
    side.className = 'deck-side';
    var kicker = document.createElement('p');
    kicker.className = 'kicker';
    kicker.textContent = ui.deck;
    var h = document.createElement('h1');
    h.textContent = t(item);
    side.appendChild(kicker);
    var date = formatDate(item.date);
    if (date) {
      var dp = document.createElement('p');
      dp.className = 'pub-date';
      dp.textContent = date;
      side.appendChild(dp);
    }
    if (ui.note) {
      var note = document.createElement('p');
      note.className = 'pub-note';
      note.textContent = ui.note;
      side.appendChild(note);
    }
    side.appendChild(h);
    var sum = summary(item);
    if (sum) {
      var sp = document.createElement('p');
      sp.className = 'pub-summary';
      sp.textContent = sum;
      side.appendChild(sp);
    }
    var pdf = document.createElement('a');
    pdf.className = 'pdf';
    pdf.href = base() + item.pdf;
    pdf.textContent = ui.pdf;
    side.appendChild(pdf);
    layout.appendChild(viewer);
    var col = document.createElement('div');
    col.appendChild(bar);
    col.appendChild(side);
    layout.appendChild(col);
    root.appendChild(back);
    root.appendChild(layout);

    function show(n) {
      index = (n + total) % total;
      var s = slideSrc(item.id, index + 1);
      source.srcset = s.webp;
      source.sizes = '(max-width: 700px) 92vw, 520px';
      img.src = s.jpg;
      img.srcset = s.jpgset;
      img.sizes = source.sizes;
      img.alt = ui.slide + ' ' + (index + 1) + ' / ' + total + '. ' + t(item);
      count.textContent = (index + 1) + ' / ' + total;
    }
    prev.addEventListener('click', function () { show(index - 1); });
    next.addEventListener('click', function () { show(index + 1); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { show(index - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { show(index + 1); e.preventDefault(); }
    });
    var startX = null;
    viewer.addEventListener('touchstart', function (e) { startX = e.changedTouches[0].clientX; }, { passive: true });
    viewer.addEventListener('touchend', function (e) {
      if (startX == null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });
    show(0);
  }

  var cache = null;
  var drawnLang = null;
  function draw(items) {
    var list = document.querySelector('[data-pub-list]');
    var teaser = document.querySelector('[data-pub-teaser]');
    var deck = document.querySelector('[data-pub-deck]');
    var current = lang();
    if (drawnLang !== current) {
      drawnLang = current;
      if (list) renderList(items, list);
      if (teaser) renderList(items, teaser, 3);
    }
    if (deck && !deck.dataset.ready) { deck.dataset.ready = '1'; mountDeck(items); }
  }
  function boot() {
    var list = document.querySelector('[data-pub-list]');
    var teaser = document.querySelector('[data-pub-teaser]');
    var deck = document.querySelector('[data-pub-deck]');
    if (!list && !teaser && !deck) return;
    if (cache) { draw(cache); return; }
    if (window.__BA_PUBS) { cache = ordered(window.__BA_PUBS); draw(cache); return; }
    fetch(base() + 'publicacoes/publicacoes.json')
      .then(function (r) { return r.json(); })
      .then(function (items) { cache = ordered(items); draw(cache); });
  }
  document.addEventListener('ba-lang', boot);
  boot();
})();
