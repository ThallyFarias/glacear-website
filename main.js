// --- HEADER SCROLL EFFECT ---
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// --- SMOOTH SCROLL FOR ANCHOR LINKS ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// --- INTERSECTION OBSERVER FOR FADE-INS ---
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Optional: stop observing once animated
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// --- PARALLAX EFFECT FOR HERO IMAGE ---
const parallaxImg = document.querySelector('.parallax-img');

window.addEventListener('scroll', () => {
  if (parallaxImg) {
    let scrolled = window.pageYOffset;
    // Simple parallax effect
    parallaxImg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// --- MOBILE MENU TOGGLE (Basic setup) ---
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

mobileMenuBtn.addEventListener('click', () => {
  // A proper implementation would toggle a class to show a full-screen menu
  // Here we just toggle alert for demo purposes, but in a real scenario
  // we would toggle CSS classes on .nav-links and .nav-actions
  console.log('Mobile menu toggled');
  // For example: document.body.classList.toggle('menu-open');
});
