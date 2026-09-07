(function () {
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  var progress = document.getElementById('progress');
  if (progress) {
    var update = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // source tabs
  var tabs = document.querySelectorAll('.tab[data-panel]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      document.querySelectorAll('.panel').forEach(function (p) { p.classList.remove('show'); });
      var panel = document.getElementById(tab.dataset.panel);
      if (panel) panel.classList.add('show');
    });
  });

  // OPVL flip cards
  var flips = document.querySelectorAll('.flip');
  flips.forEach(function (card) {
    card.addEventListener('click', function () { card.classList.toggle('flipped'); });
  });

  var flipAll = document.getElementById('flipall');
  if (flipAll) {
    flipAll.addEventListener('click', function () {
      var on = flipAll.classList.toggle('active');
      flips.forEach(function (c) { c.classList.toggle('flipped', on); });
      flipAll.textContent = on ? 'HIDE ANSWERS' : 'SHOW ALL ANSWERS';
    });
  }

  // lightbox
  var lb = document.getElementById('lb');
  if (lb) {
    var lbImg = lb.querySelector('img');
    var lbCap = lb.querySelector('p');
    document.querySelectorAll('figure.plate img').forEach(function (img) {
      img.addEventListener('click', function () {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        var cap = img.parentElement.querySelector('figcaption b');
        lbCap.textContent = cap ? cap.textContent : img.alt;
        lb.classList.add('open');
      });
    });
    lb.addEventListener('click', function () { lb.classList.remove('open'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') lb.classList.remove('open');
    });
  }

  // reveal on scroll + meters
  var fill = function (el) {
    el.classList.add('is-visible');
    el.querySelectorAll('.meter i').forEach(function (m) { m.style.width = m.dataset.value + '%'; });
  };
  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        fill(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealables.forEach(function (el) { obs.observe(el); });
  } else {
    revealables.forEach(fill);
  }
})();
