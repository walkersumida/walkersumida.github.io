// ===================================
// Scroll Reveal Animation
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  // Add scroll-reveal class to elements
  const elementsToReveal = [
    '.card',
    '.profile-section',
    '.table',
    '.github-stats-area'
  ];

  elementsToReveal.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      if (!element.classList.contains('top-card')) {
        element.classList.add('scroll-reveal');
        element.style.animationDelay = `${index * 0.1}s`;
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observe all scroll-reveal elements
  document.querySelectorAll('.scroll-reveal').forEach(element => {
    observer.observe(element);
  });
});

// ===================================
// Smooth Parallax Effect for Background
// ===================================
let ticking = false;
function updateParallax() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax');

  parallaxElements.forEach(element => {
    const speed = element.dataset.speed || 0.5;
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });

  ticking = false;
}

function requestTick() {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener('scroll', requestTick);

// ===================================
// Dynamic Gradient Animation on Mouse Move
// ===================================
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const gradientOverlay = document.querySelector('body::before');
  if (gradientOverlay) {
    const root = document.documentElement;
    root.style.setProperty('--mouse-x', `${x * 100}%`);
    root.style.setProperty('--mouse-y', `${y * 100}%`);
  }
});

// ===================================
// Typing Effect for Main Title
// ===================================
const titleElement = document.querySelector('h1');
if (titleElement && titleElement.textContent.includes('�0 i')) {
  const originalText = titleElement.textContent;
  titleElement.style.minHeight = titleElement.offsetHeight + 'px';

  function typeWriter(text, element, delay = 50) {
    element.textContent = '';
    let index = 0;

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, delay);
      }
    }

    type();
  }

  // Start typing effect after page load
  setTimeout(() => {
    typeWriter(originalText, titleElement, 30);
  }, 500);
}

// ===================================
// Smooth Scroll for Internal Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===================================
// Loading Animation for Images
// ===================================
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('load', function() {
    this.style.animation = 'fadeIn 0.5s ease-out';
  });

  // Add loading class if image hasn't loaded yet
  if (!img.complete) {
    img.classList.add('loading');
    img.addEventListener('load', function() {
      this.classList.remove('loading');
    });
  }
});

// ===================================
// Add Ripple Effect to Buttons
// ===================================
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ===================================
// Console Easter Egg
// ===================================
console.log(
  '%c Welcome to Ayumu Sumida\'s Portfolio! ',
  'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 16px; padding: 10px 20px; border-radius: 8px; font-weight: bold;'
);
console.log(
  '%c =� Built with passion and modern web technologies ',
  'color: #667eea; font-size: 12px; padding: 5px;'
);