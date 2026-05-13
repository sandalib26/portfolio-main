document.addEventListener('DOMContentLoaded', () => {

  // 1. Navigation Scroll Effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    // scrollY 10ta wada wadi nam 'scrolled' class eka add wenawa
    nav?.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // 2. Active Page Link highlighting
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // 3. Mobile Menu (Hamburger) logic
  const menuBtn = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  const toggleMenu = () => {
    menuBtn?.classList.toggle('open');
    mobileNav?.classList.toggle('open');
  };

  menuBtn?.addEventListener('click', toggleMenu);
  
  // Mobile link ekak click kalama menu eka close wenna
  mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // 4. Reveal elements on scroll (Intersection Observer)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade').forEach(el => observer.observe(el));

  // 5. Contact Form Submission
  const contactForm = document.querySelector('#contact-form');
  
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type=submit]');
    
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    // Second 1kin success message eka pennanna
    setTimeout(() => {
      contactForm.querySelector('.form-fields').style.display = 'none';
      contactForm.querySelector('.fsuccess').classList.add('show');
    }, 1000);
  });

});