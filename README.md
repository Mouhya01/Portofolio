# 🌐 Mouhya01 — Personal Portfolio Website

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3.7-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)

**Full-Stack Developer Portfolio · Djibouti 🇩🇯**

[🌍 Live Demo](https://mouhya01.github.io/portfolio) · [📬 Contact](mouhyadine.zakaria.djama@gmail.com) · [🐙 GitHub](https://github.com/Mouhya01)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [API Integration](#-api-integration)
- [Chatbot](#-chatbot)
- [Design System](#-design-system)
- [How to Run Locally](#-how-to-run-locally)
- [Deployment](#-deployment-github-pages)
- [Roadmap](#-roadmap)
- [Author](#-author)

---

## 🔭 Overview

This repository contains the complete source code of my personal developer portfolio — a multi-page static website built from scratch using HTML5, CSS3 and vanilla JavaScript, with Bootstrap 5.3.7 as the responsive framework.

The portfolio was designed and developed as part of a **Computer Engineering TP (practical assignment)** at the University of Djibouti, and simultaneously serves as a professional tool for launching my Freelance career on Upwork and Fiverr in May 2026.

**Design philosophy:** Glassmorphism dark theme — frosted glass cards, CSS custom properties for the design system, IntersectionObserver-driven animations, and zero external JavaScript libraries beyond Bootstrap.

**Key constraint:** Phase 1 is entirely front-end. No back-end, no database, no server-side rendering. All interactivity runs in the browser.

---

## ✨ Features

### Core Pages
- **Home** (`index.html`) — Hero with animated photo placeholder, skills teaser, portfolio teaser, about teaser, CTA
- **About** (`about.html`) — Academic timeline, detailed skill grid with proficiency levels, counter animations, CV download
- **Projects** (`portfolio-details.html`) — 3 case studies with filter bar and Bootstrap modals (Overview / Challenge / Solution / Outcome)
- **Contact** (`contact.html`) — Static form with HTML5 validation, FAQ accordion, timezone info

### Technical Features
| Feature | Implementation |
|---|---|
| Responsive design | Bootstrap 5.3.7 grid (12 columns) |
| Scroll animations | `IntersectionObserver` API |
| Navbar glass effect | CSS `backdrop-filter` + JS scroll listener |
| Skill bar animations | `IntersectionObserver` + CSS transition |
| Counter animation | `requestAnimationFrame` + easing function |
| FAQ accordion | Pure JS `max-height` toggle |
| Form validation | HTML5 native + Bootstrap `was-validated` |
| Success toast | CSS transform + JS class toggle |
| Custom chatbot | Vanilla JS, keyword scoring engine |
| Live quotes | `fetch()` → Quotable public API |
| Project filter | `data-category` attribute + DOM toggle |
| Project modals | Bootstrap 5 modal component |
| Developer easter egg | `console.log` branding |

---

## 🛠 Tech Stack

### Frontend
- **HTML5** — Semantic markup, ARIA attributes for accessibility
- **CSS3** — Custom Properties (design tokens), Flexbox, CSS Grid, animations
- **Bootstrap 5.3.7** — Grid system, modal component, form validation utilities
- **Vanilla JavaScript (ES2020)** — No jQuery, no framework

### Typography
- **Syne** (Google Fonts) — Display headings, brand elements
- **DM Mono** (Google Fonts) — Body text, code snippets, UI labels

### Icons
- **Bootstrap Icons 1.11.3** — SVG icon library

### External API
- **Quotable** (`api.quotable.io`) — Free, open-source quotes API  
  Source: [`public-apis/public-apis`](https://github.com/public-apis/public-apis) on GitHub  
  No authentication required · 180 requests/minute rate limit

### Hosting
- **GitHub Pages** — Free static site hosting via `github.io`

---

## 📁 Project Structure

```
Mouhya01-Portfolio/
│
├── index.html                    # Home page (entry point)
├── about.html                    # About / Resume page
├── portfolio-details.html        # Projects / Case Studies page
├── contact.html                  # Contact form + FAQ page
│
├── assets/
│   ├── css/
│   │   └── main.css              # Shared design system (all pages)
│   │
│   ├── js/
│   │   ├── main.js               # Shared JS (navbar, reveal, counters)
│   │   ├── chatbot.js            # Custom portfolio chatbot widget
│   │   └── quotes.js             # Quotable API integration
│   │
│   └── img/
│       ├── profile.jpg           # Profile photo (add manually)
│       ├── certs-folder          #Folders that countains the certifications    
│
├── wireframes-folder               # Wireframe folders
└── README.md                    
└── mouhyadine-cv.pdf  # CV download 
```

> **Convention note:** `index.html` IS the home page. Web servers (Apache, Nginx, GitHub Pages) automatically serve `index.html` as the default document in a directory. There is no separate `home.html`.

---

## 📄 Pages

### 🏠 `index.html` — Home

**Purpose:** First impression. Converts visitors into profile readers or project viewers.

**Sections:**
1. **Navbar** — Fixed position, becomes glass-blurred on scroll (JS), hamburger on mobile
2. **Hero** — Animated availability badge, main headline, CTA buttons, circular photo container with rotating gradient ring, floating code block, stat pills
3. **Skills** — 6 glass cards with animated progress bars (IntersectionObserver)
4. **Portfolio Teaser** — 3 project preview cards with gradient thumbnails
5. **About Teaser** — Quote card + 3 info pills
6. **CTA Banner** — Gradient border card with contact call-to-action
7. **Footer** — Brand, copyright, social links

**Responsive behaviour:**
- `col-lg-6` hero splits into two columns on ≥992px, stacks on mobile
- Navbar collapses to hamburger on <768px

---

### 👤 `about.html` — About

**Purpose:** Build trust. Showcase academic background, technical depth, and personality.

**Sections:**
1. **Page Header** — Large title with orb background decoration
2. **Profile Intro** — Photo (220px circle with ring), name, bio, info pills, CV download
3. **Stats Row** — 4 counters animated with `requestAnimationFrame` (5+ technologies, 3 projects, 1st cohort, 24h response)
4. **Education Timeline** — 3 entries with CSS vertical line and dot markers
5. **Technical Stack** — 9 skill cards with colour-coded level badges (Advanced / Intermediate / Familiar) and progress bars
6. **Soft Skills** — 6 cards (Problem Solver, Continuous Learner, Clear Communicator, Deadline Driven, Cross-Cultural, Detail Oriented)
7. **Quote Widget** — Live quote from Quotable API with refresh button
8. **CV Download** — CTA card with PDF download button

---

### 💼 `portfolio-details.html` — Projects

**Purpose:** Demonstrate engineering capability through structured case studies.

**Structure:**
1. **Filter Bar** — 4 filters: All / Web / Python / Engineering (pure JS DOM toggle)
2. **Project Grid** — 3 cards with `data-category` attributes
3. **Bootstrap Modals** — Each card opens a detailed modal

**Case Study Format (OCS):**
Each modal follows the Overview / Challenge / Solution / Outcome structure:

| Section | Content |
|---|---|
| **Overview** | What the project is and why it was built |
| **Challenge** | The specific technical difficulty addressed |
| **Solution** | The engineering approach and tools used |
| **Outcome** | Measurable results (%, timing, test counts) |

**Projects:**

| # | Title | Stack | Category |
|---|---|---|---|
| 01 | Full-Stack Dashboard | React 18, Node.js, Express, JWT | Web |
| 02 | Numerical Simulation | Python, NumPy, Matplotlib, MATLAB | Python |
| 03 | Sequential Logic Design | Boolean Algebra, Karnaugh, VHDL | Engineering |

---

### ✉️ `contact.html` — Contact

**Purpose:** Convert visitors to clients. Provide all contact channels and build availability confidence.

**Sections:**
1. **Page Header** — Hero-style title
2. **Contact Form** (7/12 width) — Name, Email, Subject dropdown, Budget dropdown, Message textarea (with live character counter), Submit button
3. **Info Sidebar** (5/12 width) — Availability card, 4 direct contact methods (Email, GitHub, LinkedIn, Upwork), timezone card
4. **FAQ Accordion** — 5 questions, pure JS `max-height` animation

**Form behaviour (Phase 1 — static):**
- HTML5 native validation (`required`, `type="email"`)
- Bootstrap `was-validated` class for visual error feedback
- On submit: shows success toast → resets form
- **Phase 2:** Replace toast with `fetch('/api/contact', {...})` → Node.js/Nodemailer

---

## 🌐 API Integration

### Quotable API

**Source:** Listed in [public-apis/public-apis](https://github.com/public-apis/public-apis) under the "Science & Math" / "Programming" categories.

**Documentation:** `https://github.com/lukePeavey/quotable`

**Endpoint used:**
```
GET https://api.quotable.io/quotes/random?tags=technology|science|mathematics&maxLength=120
```

**Response format:**
```json
[{
  "_id":     "xyzABC",
  "content": "Any sufficiently advanced technology is indistinguishable from magic.",
  "author":  "Arthur C. Clarke",
  "tags":    ["technology", "science"],
  "length":  69
}]
```

**Integration in `quotes.js`:**
```javascript
async function fetchQuote() {
  const url = 'https://api.quotable.io/quotes/random?tags=technology|science&maxLength=120';
  try {
    const response = await fetch(url);
    const data     = await response.json();
    displayQuote(data[0].content, data[0].author);
  } catch (error) {
    displayFallbackQuote(); // graceful degradation
  }
}
```

**How to add to `about.html`:**

1. Add this `div` inside the about page, after the skill grid section:
```html
<!-- Quotable API Quote Widget -->
<div id="quote-api-section" class="mt-4"></div>
```

2. Add the script tag before `</body>`:
```html
<script src="assets/js/quotes.js"></script>
```

**Features:**
- ✅ Live random quote on page load
- ✅ "↺ New" refresh button fetches a new quote
- ✅ Graceful fallback to 5 local quotes if API is unreachable
- ✅ Fade-in animation on load
- ✅ Attribution links to Quotable and public-apis

---

## 🤖 Chatbot

The portfolio includes a custom-built chatbot widget — **M-Bot** — written entirely in vanilla JavaScript with no external dependencies.

**File:** `assets/js/chatbot.js`

### Architecture

```
KB (Knowledge Base)        ← Array of {keywords[], response} objects
      ↓
findBestMatch(input)       ← Scoring engine (keyword frequency analysis)
      ↓
botReply(response)         ← Typing animation + DOM rendering
      ↓
buildWidget()              ← Dynamic HTML injection into <body>
      ↓
init()                     ← Event listeners + welcome message
```

### Matching Algorithm

The bot normalises user input (lowercase, strip punctuation) and scores each Knowledge Base entry by counting keyword occurrences. The entry with the highest score wins. Exact word matches score `+2`, substring matches score `+1`. If all scores equal 0, a fallback response is shown.

### Topics covered
`hello` · `skills` · `react` · `nodejs` · `python` · `matlab` · `projects` · `contact` · `availability` · `pricing` · `location` · `languages` · `education` · `github` · `upwork/fiverr` · `thanks` · `goodbye`

### How to add to all pages

Add this single line before `</body>` in each HTML file:
```html
<script src="assets/js/chatbot.js"></script>
```

The chatbot injects its own HTML and CSS dynamically — no additional markup required.

---

## 🎨 Design System

All design tokens are defined as CSS Custom Properties in `assets/css/main.css` under `:root`.

### Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--clr-bg-deep` | `#07080f` | Page background |
| `--clr-accent-cyan` | `#63b3ed` | Primary accent, links |
| `--clr-accent-violet` | `#9f7aea` | Secondary accent, gradients |
| `--clr-accent-teal` | `#4fd1c5` | Success states, location |
| `--clr-text-primary` | `#f0f4ff` | Main text |
| `--clr-text-muted` | `rgba(240,244,255,0.5)` | Secondary text |

### Glassmorphism Recipe

```css
.glass-card {
  background:      rgba(13, 16, 33, 0.55);   /* Semi-transparent */
  backdrop-filter: blur(18px);                /* Frosted glass blur */
  border:          1px solid rgba(255,255,255,0.08); /* Subtle border */
  border-radius:   16px;
}
```

### Typography Scale

| Font | Role | Weights |
|---|---|---|
| Syne | Headings, brand, numbers | 400, 600, 700, 800 |
| DM Mono | Body text, labels, code | 300, 400, 500 |

### Key Animations

| Name | Trigger | Effect |
|---|---|---|
| `fadeUp` | Page load | Opacity + translateY, staggered |
| `pulse-dot` | Always | Pulsing green availability dot |
| `float` | Always | Gentle vertical float on code block |
| `spin-ring` | Always | Rotating gradient ring on photo |
| Reveal | IntersectionObserver | Elements slide up when scrolled into view |
| Skill bars | IntersectionObserver | Progress bars animate width on entry |
| Counters | IntersectionObserver | Numbers count up with ease-out cubic |

---

## 🚀 How to Run Locally

No build step required. This is a static site — open directly in your browser.

### Option 1 — Direct file open
```bash
# Clone the repository
git clone https://github.com/Mouhya01/portfolio.git
cd portfolio

# Open in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

> ⚠️ **Note:** The Quotable API fetch may fail with a CORS error when opening files directly via `file://` protocol. Use a local server (Option 2) to test the API integration.

### Option 2 — Live Server (recommended)

**With VS Code:**
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → "Open with Live Server"
3. Navigate to `http://localhost:5500`

**With Python:**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**With Node.js:**
```bash
npx serve .
# Visit http://localhost:3000
```

---

## 🌍 Deployment (GitHub Pages)

### Step-by-step

```bash
# 1. Initialise Git repository
git init
git add .
git commit -m "Initial commit: Mouhya01 portfolio v1.0"

# 2. Create repository on GitHub: github.com/new
#    Name it: portfolio (or mouhya01.github.io for root domain)

# 3. Connect and push
git remote add origin https://github.com/Mouhya01/portfolio.git
git branch -M main
git push -u origin main
```

### Activate GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**: select **Deploy from a branch**
4. Branch: **main** · Folder: **/ (root)**
5. Click **Save**

Your site will be live at:
```
https://mouhya01.github.io/portfolio
```

> ⏱️ First deployment takes 1–2 minutes. Subsequent pushes update the site automatically.



## 🗺️ Roadmap

### Phase 1 — Frontend (✅ Complete)
- [x] Multi-page portfolio (Home, About, Projects, Contact)
- [x] Glassmorphism design system with CSS custom properties
- [x] Responsive layout (mobile + desktop)
- [x] Scroll-triggered animations (IntersectionObserver)
- [x] Custom chatbot (vanilla JS, no API)
- [x] Quotable API integration (random dev quotes)
- [x] Project case studies with Bootstrap modals
- [x] FAQ accordion
- [x] Wireframe documentation
- [x] GitHub Pages deployment



---

## 👤 Author

**Mouhyadine** — Computer Engineering Student & Full-Stack Developer

| | |
|---|---|
| 📍 Location | Djibouti City, Djibouti 🇩🇯 |
| 🕐 Time Zone | EAT (UTC+3) |
| 💬 Languages | English · French · Arabic |
| 📧 Email | mouhyadine.zakaria.djama@gmail.com |
| 🐙 GitHub | [@Mouhya01](https://github.com/Mouhya01) |
| 💼 LinkedIn | [linkedin.com/in/mouhyadine-zakaria](https://www.linkedin.com/in/mouhyadine-zakaria-b2b571366/) |

---

## 📄 License

This project is open source under the [MIT License](LICENSE).  
You are free to use this code as a reference or starting point for your own portfolio,  
with attribution appreciated.

---

<div align="center">

**Built with rigour from Djibouti 🇩🇯 — Phase 1 of 3**

*"Engineering is the art of turning constraints into opportunities."*

</div>
