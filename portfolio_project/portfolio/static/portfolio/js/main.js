// Hamburger toggle
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
if (ham && nav) {
  ham.addEventListener('click', () => nav.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !nav.contains(e.target)) nav.classList.remove('open');
  });
}

// Active nav link highlight
const path = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path || (href !== '/' && path.startsWith(href))) a.classList.add('active');
  else if (href === '/' && path === '/') a.classList.add('active');
});

// Scroll fade-in
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (i * 0.06) + 's';
      e.target.classList.add('in');
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fu').forEach(el => obs.observe(el));

// Skill bar animation
const barObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(b => {
        b.style.width = b.dataset.pct + '%';
      });
      barObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });
document.querySelectorAll('.skills-grid').forEach(el => barObs.observe(el));
