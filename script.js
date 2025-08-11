(function () {
    emailjs.init("DQtdHgnKMZXpirdVZ");
})();

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
        particlesContainer.appendChild(particle);
    }
}

function initCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorTrail = document.querySelector('.cursor-trail');
    const cursorGlow = document.querySelector('.cursor-glow');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    let trailX = 0, trailY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        const speed = 0.15;
        const dotSpeed = 0.25;
        const trailSpeed = 0.1;
        const glowSpeed = 0.05;

        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        dotX += (mouseX - dotX) * dotSpeed;
        dotY += (mouseY - dotY) * dotSpeed;
        
        trailX += (mouseX - trailX) * trailSpeed;
        trailY += (mouseY - trailY) * trailSpeed;
        
        glowX += (mouseX - glowX) * glowSpeed;
        glowY += (mouseY - glowY) * glowSpeed;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
        
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Updated hover elements to include certificate cards
    const hoverElements = document.querySelectorAll('a, button, .skill-circle, .project-box, .social-icon, .certificate-card, .certificate-btn, .theme-toggle, .tech-bubble');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorTrail.style.opacity = '0.8';
            cursorGlow.style.opacity = '0.6';
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorTrail.style.opacity = '0.5';
            cursorGlow.style.opacity = '0.3';
        });
    });

    const textElements = document.querySelectorAll('input, textarea');
    textElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('text');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('text');
        });
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
}

window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'visible';
        initializeAnimations();
        createParticles();
        if (window.innerWidth > 1024) {
            initCursor();
        }
    }, 1000);
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const slider = document.querySelector('.theme-toggle-slider');

const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = slider.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbarLinks = document.querySelector('.navbar-links');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navbarLinks.classList.toggle('active');
});

document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navbarLinks.classList.remove('active');
    });
});

const typewriterText = [
    "Full Stack Developer",
    "Data Analyst", 
    "Problem Solver",
    "UI Designer",
    "Mr Coder"
];

let currentText = 0;
let currentChar = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');

function typewriter() {
    const text = typewriterText[currentText];
    
    if (isDeleting) {
        typewriterElement.textContent = text.substring(0, currentChar - 1);
        currentChar--;
    } else {
        typewriterElement.textContent = text.substring(0, currentChar + 1);
        currentChar++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentChar === text.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentText = (currentText + 1) % typewriterText.length;
        typeSpeed = 500;
    }

    setTimeout(typewriter, typeSpeed);
}

setTimeout(typewriter, 1000);

function toggleResume() {
    const resumeOptions = document.getElementById('resume-options');
    const button = document.getElementById('resume-toggle-button');
    
    if (resumeOptions.classList.contains('show')) {
        resumeOptions.classList.remove('show');
        button.innerHTML = '<i class="fas fa-eye"></i> Show Resume Options';
    } else {
        resumeOptions.classList.add('show');
        button.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Resume Options';
    }
}

// Updated certificate toggle function for card layout
function toggleCertificates() {
    const certificateList = document.getElementById('certificate-list');
    const icon = document.getElementById('certificate-icon');
    const text = document.getElementById('certificate-text');

    if (certificateList.classList.contains('show')) {
        certificateList.classList.remove('show');
        icon.className = 'fas fa-eye';
        text.textContent = 'Show Certificates';
        
        // Add staggered animation for hiding cards
        const cards = certificateList.querySelectorAll('.certificate-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(30px) scale(0.95)';
                card.style.opacity = '0';
            }, index * 50);
        });
    } else {
        certificateList.classList.add('show');
        icon.className = 'fas fa-eye-slash';
        text.textContent = 'Hide Certificates';
        
        // Add staggered animation for showing cards
        const cards = certificateList.querySelectorAll('.certificate-card');
        cards.forEach((card, index) => {
            card.style.transform = 'translateY(30px) scale(0.95)';
            card.style.opacity = '0';
            
            setTimeout(() => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.opacity = '1';
            }, 200 + (index * 100));
        });
    }
}

// Add certificate card hover effects
function initCertificateCardEffects() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    certificateCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add subtle tilt effect
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            card.addEventListener('mousemove', (e) => {
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;
                
                const rotateX = (mouseY / rect.height) * 10;
                const rotateY = -(mouseX / rect.width) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
        
        // Add click animation
        card.addEventListener('mousedown', () => {
            card.style.transform += ' scale(0.98)';
        });
        
        card.addEventListener('mouseup', () => {
            card.style.transform = card.style.transform.replace(' scale(0.98)', '');
        });
    });
}

// Initialize certificate card effects after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initCertificateCardEffects();
    }, 1000);
});

function handleSubmit(event) {
    event.preventDefault();
    
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalHTML = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    emailjs.sendForm('service_2y1zfys', 'template_q931smm', event.target)
        .then(() => {
            submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            event.target.reset();
            
            setTimeout(() => {
                submitButton.innerHTML = originalHTML;
                submitButton.disabled = false;
            }, 3000);
        })
        .catch((error) => {
            submitButton.innerHTML = '<i class="fas fa-times"></i> Failed to Send';
            showNotification('Failed to send message. Please try again.', 'error');
            console.error('EmailJS error:', error);
            
            setTimeout(() => {
                submitButton.innerHTML = originalHTML;
                submitButton.disabled = false;
            }, 3000);
        });
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            ${message}
        </div>
    `;
    
    const bgColor = type === 'success' 
        ? 'linear-gradient(135deg, #10b981, #059669)' 
        : 'linear-gradient(135deg, #ef4444, #dc2626)';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 10001;
        transform: translateX(400px);
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        background: ${bgColor};
        backdrop-filter: blur(10px);
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-in-left, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    lastScrollY = currentScrollY;
});

document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileMenuToggle.classList.remove('active');
        navbarLinks.classList.remove('active');
    }
});

window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio loaded successfully with Certificate Cards!');
});
