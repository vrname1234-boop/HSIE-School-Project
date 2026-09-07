// Nav toggle, scroll progress, reveal-on-scroll and meter animations.
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var progress = document.getElementById('progress');
  if (progress) {
    var updateProgress = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progress.style.width = pct + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }

  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        var meter = entry.target.querySelector('.meter i');
        if (meter) meter.style.width = meter.dataset.value + '%';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealables.forEach(function (el) { observer.observe(el); });
  } else {
    revealables.forEach(function (el) {
      el.classList.add('is-visible');
      var meter = el.querySelector('.meter i');
      if (meter) meter.style.width = meter.dataset.value + '%';
    });
  }
})();
