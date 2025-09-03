// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.documentElement.toggleAttribute('data-theme', 'light');
});

// Modal open/close
const modalBg = document.getElementById('modalBg');
document.getElementById('openAbout').addEventListener('click', () => {
  modalBg.classList.add('active');
  setTimeout(() => modalBg.querySelector('.modal').classList.add('active'), 20);
});
document.getElementById('closeModal').addEventListener('click', () => {
  modalBg.querySelector('.modal').classList.remove('active');
  setTimeout(() => modalBg.classList.remove('active'), 300);
});

// Skill bar animation
window.addEventListener('load', () => {
  document.querySelectorAll('.skill-bar-inner').forEach(el => {
    const level = el.getAttribute('data-level');
    el.style.width = level;
  });
});

// Project slider
const projWrapper = document.getElementById('projectWrapper');
document.getElementById('prevProj').addEventListener('click', () => {
  projWrapper.scrollBy({ left: -300, behavior: 'smooth' });
});
document.getElementById('nextProj').addEventListener('click', () => {
  projWrapper.scrollBy({ left: 300, behavior: 'smooth' });
});

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
let testIndex = 0;
setInterval(() => {
  testimonials[testIndex].classList.remove('active');
  testIndex = (testIndex + 1) % testimonials.length;
  testimonials[testIndex].classList.add('active');
}, 5000);

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks, ' + document.getElementById('name').value + '! Message sent.');
  e.target.reset();
});

// Back to top button
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});
backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
