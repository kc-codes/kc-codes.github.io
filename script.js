// =========================================
// TYPING EFFECT FOR HERO SECTION
// =========================================
const textArray = [
    "Cyber Security Engineer",
    "Senior Analyst @ EY",
    "3x Hackathon Winner 🏆",
    "Google Certified CyberSec Professional",
    "Open Source Contributor 🚀",
    "CTF Player & Security Analyst",
    "Software Developer",
    "AI Enthusiast",
    "Network Security Engineer",
    "Problem Solver"
];
let textIndex = 0;
let charIndex = 0;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
const typedTextSpan = document.querySelector(".typing-text");

// Shuffle function to randomize the typing order on page load
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Randomize the typing array so it is different every time the page loads
    shuffleArray(textArray);
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// =========================================
// NAVBAR SCROLL EFFECT & MOBILE MENU
// =========================================
const navbar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains("active")) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// =========================================
// SCROLL REVEAL ANIMATION
// =========================================
const revealElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-bottom');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));

// =========================================
// THEME TOGGLE LOGIC
// =========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check local storage for theme
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('portfolio-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        localStorage.setItem('portfolio-theme', 'dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// =========================================
// GITHUB API FETCH LOGIC
// =========================================
async function fetchGitHubProjects() {
    const grid = document.getElementById('github-projects-grid');
    if (!grid) return;
    
    const fallbackRepos = [
        {
            name: "Next-Generation-SIEM-Stack",
            description: "🚀 Next Generation SIEM Stack is an advanced Security Information and Event Management (SIEM) solution designed for real-time threat detection and log analysis built using ELK Stack & Security Onion.",
            language: "Jupyter Notebook",
            stargazers_count: 5,
            forks_count: 2,
            html_url: "https://github.com/kc-codes/Next-Generation-SIEM-Stack"
        },
        {
            name: "Farmitra",
            description: "🌾 An ML-based smart recommendation system for farmers, designed to suggest optimal crops, fertilizers, and predict plant diseases to maximize agricultural yields.",
            language: "Python",
            stargazers_count: 3,
            forks_count: 1,
            html_url: "https://github.com/kc-codes"
        },
        {
            name: "MsgLock",
            description: "🔐 A secure Python-based application for Message Encryption and Decryption using advanced cryptographic algorithms, ensuring secure communications.",
            language: "Python",
            stargazers_count: 2,
            forks_count: 0,
            html_url: "https://github.com/kc-codes"
        },
        {
            name: "Scrape-Up",
            description: "🕷️ A highly flexible Python package built for seamless web scraping, developed as part of contributions during the GirlScript Summer of Code (GSSoC'23).",
            language: "Python",
            stargazers_count: 8,
            forks_count: 4,
            html_url: "https://github.com/kc-codes"
        },
        {
            name: "AakaAR",
            description: "📱 An innovative, immersive Augmented Reality (AR) powered E-commerce mobile application allowing users to visualize products in real-time space.",
            language: "Java",
            stargazers_count: 4,
            forks_count: 1,
            html_url: "https://github.com/kc-codes"
        },
        {
            name: "Linux101-Resources",
            description: "🐧 Practical and curated security-oriented resources, bash scripts, and command cheat sheets created for the TCM Security Linux 101 course.",
            language: "Shell",
            stargazers_count: 2,
            forks_count: 0,
            html_url: "https://github.com/kc-codes/Linux101-Resources"
        }
    ];

    let repos = [];
    
    try {
        const response = await fetch('https://api.github.com/users/kc-codes/repos?sort=stargazers_count&direction=desc&per_page=12');
        if (!response.ok) throw new Error('API Rate Limited or Network Error');
        
        const fetchedRepos = await response.json();
        if (!Array.isArray(fetchedRepos)) throw new Error('Invalid API response');
        
        // Filter out portfolios
        repos = fetchedRepos.filter(repo => repo.name !== "kc-codes.github.io" && repo.name !== "Portfolio_Website").slice(0, 6);
        
        if (repos.length === 0) repos = fallbackRepos;
    } catch (error) {
        console.warn('GitHub API failed, using fallback projects:', error);
        repos = fallbackRepos;
    }
    
    grid.innerHTML = '';
    
    repos.forEach((repo, index) => {
        const delayClass = `delay-${index}`;
        const html = `
            <div class="project-card glass-card fade-in ${delayClass}">
                <div class="project-header">
                    <i class="fas fa-folder-open project-icon"></i>
                    <div class="project-links">
                        <a href="${repo.html_url}" target="_blank" aria-label="GitHub Link"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <h3>${repo.name.replace(/-/g, ' ')}</h3>
                <p>${repo.description || 'No description provided.'}</p>
                <div class="tech-stack" style="margin-top:auto; padding-top: 1rem;">
                    ${repo.language ? `<span>${repo.language}</span>` : ''}
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', html);
    });
    
    // Re-observe new elements for animation
    const newElements = grid.querySelectorAll('.fade-in');
    newElements.forEach(el => revealObserver.observe(el));
}

// Initialize fetch
document.addEventListener("DOMContentLoaded", fetchGitHubProjects);

// =========================================
// CONTACT FORM LOGIC (WEB3FORMS)
// =========================================
const contactForm = document.getElementById('contactForm');
const formResult = document.getElementById('formResult');
const submitButton = document.getElementById('submitButton');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        // Update button state
        const originalBtnText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        formResult.style.display = 'none';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });
            
            const result = await response.json();
            
            if (response.status === 200) {
                formResult.innerHTML = '<span style="color: #10B981;"><i class="fas fa-check-circle"></i> Message sent successfully! I will get back to you soon.</span>';
                formResult.style.display = 'block';
                contactForm.reset();
            } else {
                console.log(response);
                formResult.innerHTML = `<span style="color: #EF4444;"><i class="fas fa-exclamation-circle"></i> ${result.message || 'Something went wrong!'}</span>`;
                formResult.style.display = 'block';
            }
        } catch (error) {
            console.log(error);
            formResult.innerHTML = '<span style="color: #EF4444;"><i class="fas fa-exclamation-circle"></i> Something went wrong! Please try again later.</span>';
            formResult.style.display = 'block';
        } finally {
            // Restore button state
            submitButton.innerHTML = originalBtnText;
            submitButton.disabled = false;
            
            // Hide result message after 5 seconds
            setTimeout(() => {
                formResult.style.display = 'none';
            }, 5000);
        }
    });
}
