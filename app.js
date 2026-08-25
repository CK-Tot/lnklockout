
  document.getElementById('year').textContent = new Date().getFullYear();

  const navButtons = document.querySelectorAll('.nav-links button');
  const pages = document.querySelectorAll('.page');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.page;
      pages.forEach(p => p.classList.toggle('active', p.id === 'page-' + target));
      navButtons.forEach(b => b.classList.toggle('active', b === btn));
      navLinks.classList.remove('open');
      window.scrollTo({top:0, behavior:'smooth'});
    });
  });

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
