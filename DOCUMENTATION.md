# Kunal Chaudhari - Portfolio Website Documentation

This document explains the architecture and functionality of the Portfolio Website.

## 📁 Project Structure

The project is built entirely on **Vanilla HTML, CSS, and JavaScript**. There is no build step required (no Node.js/Vite needed), making it incredibly fast and easy to deploy.

- `index.html`: The core structure of the website.
- `styles.css`: All styling, including Dark/Light mode variables and glassmorphism UI.
- `script.js`: Handles interactivity (scroll animations, theme toggle, and GitHub API).
- `assets/`: Contains all images, including the profile picture and certification badges.

## 🎨 Styling (Glassmorphism & Theming)

The website uses a modern design trend called **Glassmorphism**, which relies on CSS `backdrop-filter: blur()`, semi-transparent backgrounds, and subtle borders to create a "frosted glass" look.

### 🌗 Dark / Light Mode Toggle
The theme system uses CSS variables defined in `styles.css` under the `:root` and `body.light-mode` selectors.
When the toggle button in the navbar is clicked:
1. `script.js` toggles the `.light-mode` class on the `<body>` tag.
2. It saves your preference in the browser's `localStorage` so it remembers your choice for your next visit.
3. The CSS instantly swaps all `--bg-primary`, `--text-primary`, and `--glass-bg` variables.

## 🔄 GitHub API Integration

In the "Projects" section, your top repositories are fetched dynamically from GitHub.
- **Script (`script.js`):** The `fetchGitHubProjects()` function makes a request to `https://api.github.com/users/kc-codes/repos?sort=stargazers_count&direction=desc&per_page=6`.
- **Rate Limits:** GitHub's public API limits requests. If you exceed the rate limit (or if your network blocks it), the `try...catch` block gracefully catches the error and injects a **hardcoded fallback array** of your best repositories (`Next-Generation-SIEM-Stack`, `Salary_Prediction_Tool_ML`, etc.) so the website *never* breaks.
- **GitHub Stars:** Note that GitHub's API currently returns `0` stars for your top personal repositories, which is correctly reflected in the UI.

## 🛠️ How to Update Content

- **Adding a new Certification:** Drop the image into the `assets/` folder, then add a new `<div class="cert-card glass-card fade-in delay-X">` block inside the `#certifications` section in `index.html`.
- **Changing Profile Picture:** Replace `Kunal_Formal_Studio_Pic.jpg` in the `assets/` folder, or change the `src` attribute of the `<img class="profile-pic">` tag in `index.html`.
- **Updating Skills:** Simply add or edit the `<span>` tags inside the `.skill-tags` divs in the `#skills` section.

## 🚀 Deployment

Since this is a static site, you can deploy it anywhere for free. The easiest method is **GitHub Pages**:
1. Push these files (`index.html`, `styles.css`, `script.js`, `assets/`) to your `kc-codes.github.io` repository.
2. Go to the repository settings, navigate to "Pages", and ensure it is deploying from the `main` branch.
3. Your site will be live within minutes!
