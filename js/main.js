// ===== INITIALIZE WHEN DOM LOADS =====
document.addEventListener('DOMContentLoaded', function() {
    initHearts();
    initNavigation();
    initCountdown();
    initTypewriter();
    initParticles();
    initEnvelopes();
    initStars();
    initWaves();
    initScrollAnimations();
    initDuaCounter();
});

// ===== FLOATING HEARTS ANIMATION =====
function initHearts() {
    const container = document.getElementById('hearts');
    if (!container) return;
    
    const heartSymbols = ['❤️', '💖', '💕', '💗', '💓', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}

// ===== NAVIGATION =====
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== FRIENDSHIP COUNTDOWN TIMER =====
function initCountdown() {
    // Set your friendship start date here (format: YYYY-MM-DD)
    const friendshipStartDate = new Date('2020-01-01').getTime(); // Change this to your actual date
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = now - friendshipStartDate;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// ===== TYPEWRITER EFFECT FOR LETTERS PAGE =====
function initTypewriter() {
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;
    
    const messages = [
        "Fariiii, tum meri zindagi ka sabse khoobsurat hissa ho...",
        "Motiii, tumhari muskurahat meri subah ki roshni hai...",
        "Jahil Larki, tumhari masoomiyat pe main fida hoon...",
        "Feroza Chaudhary, tumhara naam meri duaon mein shamil hai...",
        "Usman hamesha tumhara hai, aaj aur hamesha..."
    ];
    
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentMessage = messages[messageIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriter.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentMessage.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
            typingSpeed = 500; // Pause before new message
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// ===== PARTICLES FOR DUAS PAGE =====
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 107, 157, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float-up ${Math.random() * 10 + 5}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

// ===== FLOATING ENVELOPES FOR LETTERS PAGE =====
function initEnvelopes() {
    const container = document.getElementById('envelopes');
    if (!container) return;
    
    setInterval(() => {
        const envelope = document.createElement('div');
        envelope.className = 'envelope';
        envelope.textContent = '💌';
        envelope.style.left = Math.random() * 100 + '%';
        envelope.style.animationDuration = (Math.random() * 5 + 8) + 's';
        
        container.appendChild(envelope);
        
        setTimeout(() => {
            envelope.remove();
        }, 13000);
    }, 2000);
}

// ===== STARS BACKGROUND FOR REASONS PAGE =====
function initStars() {
    const container = document.getElementById('stars');
    if (!container) return;
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}

// ===== MUSIC WAVES FOR PLAYLIST PAGE =====
function initWaves() {
    const container = document.getElementById('waves');
    if (!container) return;
    
    for (let i = 0; i < 5; i++) {
        const wave = document.createElement('div');
        wave.className = 'wave';
        wave.style.left = (i * 20) + '%';
        wave.style.animationDelay = (i * 0.2) + 's';
        wave.style.opacity = 0.1 - (i * 0.01);
        container.appendChild(wave);
    }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.dua-card, .letter-card, .memory-card, .reason-card, .feature-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ===== DUA COUNTER ANIMATION =====
function initDuaCounter() {
    const counter = document.getElementById('dua-count');
    if (!counter) return;
    
    let count = 1247;
    
    setInterval(() => {
        count++;
        counter.textContent = count.toLocaleString();
        
        // Add a little animation
        counter.style.transform = 'scale(1.2)';
        setTimeout(() => {
            counter.style.transform = 'scale(1)';
        }, 200);
    }, 3600000); // Increment every hour (simulating prayers)
}

// ===== NICKNAME TAG INTERACTION =====
document.querySelectorAll('.nickname-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        const messages = {
            'Fariiii': 'Tum meri jaan ho! 💕',
            'Motiii': 'Tum bahut precious ho! 💎',
            'Jahil Larki': 'Masoomiyat ki misaal! 😄'
        };
        
        const text = this.getAttribute('data-text');
        
        // Create floating message
        const msg = document.createElement('div');
        msg.textContent = messages[text];
        msg.style.position = 'fixed';
        msg.style.top = '50%';
        msg.style.left = '50%';
        msg.style.transform = 'translate(-50%, -50%)';
        msg.style.background = 'linear-gradient(135deg, #ff6b9d, #f8b500)';
        msg.style.color = 'white';
        msg.style.padding = '1rem 2rem';
        msg.style.borderRadius = '50px';
        msg.style.fontSize = '1.5rem';
        msg.style.fontWeight = 'bold';
        msg.style.zIndex = '9999';
        msg.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
        msg.style.animation = 'fadeIn 0.5s ease';
        
        document.body.appendChild(msg);
        
        setTimeout(() => {
            msg.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => msg.remove(), 500);
        }, 2000);
    });
});

// ===== SONG PLAY INTERACTION =====
document.querySelectorAll('.song-play').forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        const isPlaying = icon.classList.contains('fa-pause');
        
        // Reset all buttons
        document.querySelectorAll('.song-play i').forEach(i => {
            i.classList.remove('fa-pause');
            i.classList.add('fa-play');
        });
        
        if (!isPlaying) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            
            // Show notification
            showNotification('Playing: ' + this.closest('.song-item').querySelector('h4').textContent);
        }
    });
});

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d, #f8b500);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notif.textContent = message;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// Add keyframes for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== MOUSE MOVE EFFECT FOR CARDS =====
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.dua-card, .letter-card, .memory-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            const rotateX = (0.5 - yPercent) * 10;
            const rotateY = (xPercent - 0.5) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        } else {
            card.style.transform = '';
        }
    });
});

console.log('💖 Feroza ke liye Usman ka pyaar - Always and Forever 💖');
