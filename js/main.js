if (window.lucide) lucide.createIcons();

const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 20) header.classList.add('solid');
  else header.classList.remove('solid');
};
window.addEventListener('scroll', onScroll);
onScroll();

const burger = document.getElementById('burgerBtn');
const panel = document.getElementById('mobilePanel');
const closeBtn = document.getElementById('mobileClose');
burger.addEventListener('click', () => panel.classList.add('open'));
closeBtn.addEventListener('click', () => panel.classList.remove('open'));
panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => panel.classList.remove('open')));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
