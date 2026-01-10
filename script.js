// Modern Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle mobile menu function
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Add smooth animation for hamburger
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        bar.style.transition = `transform 0.3s ease ${index * 0.1}s`;
    });
    
    // Update aria-expanded attribute
    const isExpanded = navMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

hamburger.addEventListener('click', toggleMobileMenu);

// Add keyboard support for hamburger menu
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMobileMenu();
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
}));

// Enhanced smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Modern Navbar background change on scroll with parallax effect
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Parallax effect for navbar
    if (currentScrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.webkitBackdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.webkitBackdropFilter = 'blur(20px)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
    
    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
});

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            
            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll('.skill-tag, .tech-tag, .timeline-item, .education-item, .project-card');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('fade-in-up');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .education-item, .contact-item, .publication-item, .skill-tags, .projects-grid');
    animatedElements.forEach(el => observer.observe(el));
    
    // Add initial animation to hero section
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.classList.add('slide-in-left');
    }
    if (heroImage) {
        heroImage.classList.add('slide-in-right');
    }
    
    // Initialize hamburger accessibility attributes
    if (hamburger) {
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Enhanced hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        
        // Add subtle glow effect
        card.style.borderColor = 'rgba(102, 126, 234, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    });
});

// Enhanced skill tag and tech tag interactions
document.querySelectorAll('.skill-tag, .tech-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-2px) scale(1.05)';
        tag.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0) scale(1)';
        tag.style.boxShadow = 'none';
    });
});

// Form validation (if you add a contact form later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Enhanced copy email to clipboard functionality
document.addEventListener('DOMContentLoaded', () => {
    const emailElements = document.querySelectorAll('.contact-item p');
    const emailElement = Array.from(emailElements).find(el => el.textContent.includes('@'));
    if (emailElement) {
        emailElement.style.cursor = 'pointer';
        emailElement.style.transition = 'all 0.3s ease';
        
        emailElement.addEventListener('click', () => {
            const email = emailElement.textContent;
            navigator.clipboard.writeText(email).then(() => {
                // Show a modern notification
                const originalText = emailElement.textContent;
                const originalColor = emailElement.style.color;
                
                emailElement.textContent = 'Email copied! ✓';
                emailElement.style.color = '#10b981';
                emailElement.style.fontWeight = '600';
                
                setTimeout(() => {
                    emailElement.textContent = originalText;
                    emailElement.style.color = originalColor;
                    emailElement.style.fontWeight = '500';
                }, 2000);
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                emailElement.textContent = 'Email copied! ✓';
                emailElement.style.color = '#10b981';
                setTimeout(() => {
                    emailElement.textContent = originalText;
                    emailElement.style.color = '#60A5FA';
                }, 2000);
            });
        });
    }
});
