document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
});
});
window.addEventListener('scroll', () => {
document.querySelectorAll('.nav-menu a').forEach(link => {
const section = document.querySelector(link.getAttribute('href'));
if (section && section.getBoundingClientRect().top < 100) {
link.style.color = '#4a90e2';
} else {
link.style.color = '#333';
}
});
});