# Vinayak Sajeendran — Developer Portfolio Website

A personal portfolio website created for **Vinayak Sajeendran**, Computer Science & Engineering student at Lovely Professional University. Designed with a dark, futuristic developer aesthetic featuring glassmorphism, telemetry indicators, interactive architecture diagrams, dynamic case study modals, and complete responsiveness.

---

## 🌟 Highlights & Features

- **Dark Futuristic Aesthetic:** Near-black/deep navy backgrounds, electric cyan and cyber blue glowing accents, glassmorphic cards (`backdrop-filter`), and subtle ambient lighting grids.
- **Centralized Data Store (`js/portfolio-data.js`):** All personal info, skills, projects, achievements, and educational timelines are managed in a single file for easy edits.
- **Featured Project Deep Dive:** Case study presentation for the *Post Accident Survivor Detection System* with an interactive SVG architecture flow (`Sensors ➔ Embedded System ➔ Data Processing ➔ Real-Time Monitoring ➔ Healthcare Centre`) and accessible modal.
- **Credible & Truthful Content:** Authentic academic metrics (7.4 CGPA at LPU, 30+ students trained in Cybersecurity under WNS Cares Foundation, 98% / 2nd position in National Mathematics Olympiad by DMTA).
- **Interactive System & Animations:** Viewport scroll reveal observer, smooth cubic stats counters, live developer terminal telemetry stream, copy-to-clipboard with floating toast notification, and scroll-to-top circular progress indicator.
- **Robust Contact Form:** Real-time client validation, loading state spinner, success feedback banner, and configurable endpoint support.
- **Full Accessibility & Motion Sensitivity:** Semantic HTML5 landmarks, ARIA labels, focus-trapping modal, and `@media (prefers-reduced-motion: reduce)` support.
- **SEO & Social Share Ready:** Open Graph tags, Twitter Cards, Schema.org `Person` JSON-LD metadata, `sitemap.xml`, `robots.txt`, and cybernetic SVG favicon.

---

## 📁 Project Structure

```
portfolio/
├── index.html                  # Main responsive HTML5 entry point
├── css/
│   └── styles.css              # Design tokens, glassmorphism, animations, reduced motion
├── js/
│   ├── portfolio-data.js       # Centralized data store (edit your details here!)
│   ├── animations.js           # Scroll reveals, number counters, telemetry stream
│   ├── modal.js                # Accessible case study modal & focus trap
│   └── main.js                 # Navigation, skill tabs, contact form, clipboard, back-to-top
├── assets/
│   ├── favicon.svg             # Cybernetic 'V' monogram favicon
│   └── og-image.svg            # Open Graph social preview image
├── sitemap.xml                 # Search engine sitemap
├── robots.txt                  # Search engine crawling rules
└── README.md                   # Project documentation
```

---

## 🛠️ How to Customize Your Information

All details are centralized in `js/portfolio-data.js`. To update your email, phone, skills, or add new projects, simply open `js/portfolio-data.js`:

```javascript
const PORTFOLIO_DATA = {
  personal: {
    name: "Vinayak Sajeendran",
    email: "vinayaksajeendran@gmail.com",
    phone: "+91-9778004080",
    university: "Lovely Professional University, Phagwara, Punjab",
    socials: {
      github: { username: "VINAYAK1317-rgb", url: "https://github.com/VINAYAK1317-rgb" },
      linkedin: { username: "vinayaksajeendran", url: "https://linkedin.com/in/vinayaksajeendran" }
    }
  },
  // ... update stats, skills, achievements, or timeline
};
```

---

## 🚀 How to Run & Preview Locally

You can open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari).

Alternatively, you can serve it with any local static server:

```bash
# Using VS Code Live Server extension:
# Right-click 'index.html' -> 'Open with Live Server'

# Or using Python 3:
python -m http.server 8000

# Or using npx:
npx serve .
```

---

## 🌐 How to Deploy for Free

### 1. GitHub Pages
1. Push this repository to GitHub: `https://github.com/VINAYAK1317-rgb/portfolio`
2. In your repository settings, navigate to **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://VINAYAK1317-rgb.github.io/portfolio`!

### 2. Vercel / Netlify
1. Connect your GitHub repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Leave build settings as default (static site).
3. Click **Deploy**.

---

## 🔒 Contact Form Backend Configuration

To connect the contact form to a live email inbox without writing backend code:
1. Register for free at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Add your endpoint URL to the `<form>` tag in `index.html`:
   ```html
   <form id="portfolio-contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. The JavaScript controller in `js/main.js` will automatically detect the HTTP endpoint, send the form data via AJAX `fetch`, and show the smooth confirmation banner.

---

© 2026 Vinayak Sajeendran. Built with curiosity and code.
