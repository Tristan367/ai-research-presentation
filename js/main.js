
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const fadeEls = document.querySelectorAll('.fade-in');

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close sidebar on nav click (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // Active nav on scroll
  const observerNav = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -60% 0px', threshold: 0 });

  sections.forEach(s => observerNav.observe(s));

  // Fade-in on scroll: add .initial to hide, then .visible to animate in
  fadeEls.forEach(el => el.classList.add('initial'));

  const observerFade = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('initial');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeEls.forEach(el => observerFade.observe(el));
});
