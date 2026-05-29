# 🔐 Kunal Chaudhari - Cyber Security Portfolio Website

Welcome to the official source code of my personal portfolio website. This responsive, single-page application is custom-built to highlight my expertise in **Cybersecurity**, **Network Defenses**, **Automation/GenAI**, and **Software Engineering**. 

🚀 **Live Link:** [https://kc-codes.github.io/](https://kc-codes.github.io/)

---

## 🌟 Key Features

* **🎭 Dynamic Dark / Light Themes:** A modern glassmorphism design featuring user-toggleable theme preferences that persist locally via `localStorage`.
* **🔒 Web3Forms Integration:** A fully asynchronous AJAX-driven contact form with secure, client-side email routing, spam-filtering (honeypot `botcheck`), and live loading states.
* **📂 Automated GitHub Project Showcase:** Dynamic client-side API fetches that display popular public repositories sorted by stars. If the GitHub API limit is reached, it falls back seamlessly to customized mock cards of my authentic projects (*SIEM Stack, Farmitra, MsgLock, Scrape-up*).
* **🌀 Randomized Hero Titles:** On page load, a Fisher-Yates shuffle algorithm scrambles my key roles (e.g. *Cyber Security Engineer, Senior Analyst @ EY, 3x Hackathon Winner, Open Source Contributor*) to dynamically output a randomized typing sequence.
* **🛡️ Cybersecurity Focused UI:** Aesthetic orbit visuals representing Network, Shield, and Cloud infrastructure surrounding my synced profile photo.
* **🎖️ Verified Certifications Grid:** Displaying recognized industry achievements including *CCNA, Google Cybersecurity, Azure Fundamentals (AZ-900), Azure AI Fundamentals (AI-900), ISC2 Candidate, Junior Cyber Security Analyst (Cisco)*, and *Data Analysis with Python (IBM)*.

---

## 🛠️ Built With

* **Markup:** HTML5 (Semantic Structure & Accessible Elements)
* **Styling:** Custom CSS3 (Flexbox/Grid, Custom Variable Systems, Glassmorphic Textures, keyframe animations)
* **Logic:** Vanilla ES6+ Javascript (Asynchronous APIs, Shufflers, Mutation Observers, storage interfaces)
* **Icons & Fonts:** Font Awesome Icons, Google Fonts (Outfit & Inter)

---

## 📂 Project Architecture

```
├── assets/                  # Verified Badges & Local Images
├── index.html               # Main Page Structure
├── styles.css               # Design System, Themes & Custom Animations
├── script.js               # Typing effects, GitHub API integration, Web3Forms Handler
├── DOCUMENTATION.md         # Comprehensive Feature & Style Guide
└── README.md                # General Project Overview
```

---

## 🚀 Local Setup & Testing

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/kc-codes/Portfolio_Website.git
   cd Portfolio_Website
   ```

2. **Open index.html:**
   Double click the `index.html` file or open it using a development server (e.g., Live Server on VS Code).

3. **Configure Contact Form:**
   Register a free email endpoint at [Web3Forms](https://web3forms.com/) and replace the access token in `index.html` on line 358:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```

---

## 📄 License & Attribution
Designed & developed with absolute passion and strict digital safety protocols by **Kunal Chaudhari**. Feel free to use the structure or inspiration for your own static portfolios!