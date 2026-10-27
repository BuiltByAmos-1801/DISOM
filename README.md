# DISOM — Jharkhand Tribal Digital Museum

> **"Stories of the forest & people."**  
> An educational digital museum, cultural archive, and responsible fair-trade handicraft platform celebrating the living heritage, languages, and creative traditions of Jharkhand's Adivasi communities.

---

## 🌲 Architecture & Technical Principles

- **100% Static & Standalone**: Built purely with semantic **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**.
- **Zero Build Tools or Server Dependencies**: No Node.js, React, Vue, PHP, Python, WordPress, or compilation steps required to run or deploy.
- **Strict Relative Paths**: All links, styles, scripts, and media use relative paths (`assets/...`, `./...`), allowing the project to open directly from a local folder or any static hosting service.
- **Defensive JavaScript**: Scripts check for DOM elements before execution (`if (element)`), ensuring no console errors occur on any page.
- **Automated Graceful Fallback**: An automatic image error handler intercepts failed image loads and renders clean, culturally resonant SVG placeholders instead of broken image icons.

---

## 📂 Project Structure

```
DISOM/
│
├── index.html                  # Cinematic Hero, 12 narrative sections, Living History, Communities, Closing
├── explore.html                # Digital Museum, 8 Community profiles, Category/Tag filtering, Search, Sources
├── about.html                  # Project Genesis, The 5 Core Principles, Diversity Statement, Ethical Charters
├── marketplace.html            # Responsible Commerce, 29 Heritage Items, Multi-Filter, Modal, Cart, Artisan Onboarding
├── contact.html                # 7 Enquiry Purposes, Client-side Validation, Local Simulation, Institutional Cards
│
├── assets/
│   ├── css/
│   │   └── style.css           # Cohesive design system tokens, responsive grid layouts, cards, modals, drawers
│   │
│   ├── js/
│   │   ├── main.js             # Sticky header, mobile drawer, toasts, localStorage cart sync, image fallbacks
│   │   └── marketplace.js      # 29-product dataset, multi-facet filtering, sort, product details modal
│   │
│   ├── images/
│   │   ├── hero/               # Vector hero backgrounds & banners (hero-forest, museum-hero, etc.)
│   │   ├── communities/        # Visual identity motifs for Santhal, Munda, Oraon, Ho, Kharia, Birhor, Mahli, Bhumij
│   │   └── culture/            # Visual exhibits (Sohrai art, Dokra metallurgy, Mandar drum, Sal groves, etc.)
│   │
│   └── products/               # Vector craft illustrations for all 29 marketplace catalogue items
│
└── README.md                   # Complete documentation and deployment guide
```

---

## 🚀 How to Run Locally

You do **NOT** need Node.js, npm, or any server to run DISOM.

### Option 1: Direct File Launch (Easiest)
Simply double-click `index.html` (or right-click and choose **Open with > Chrome / Firefox / Safari / Edge**). The website runs immediately with full navigation and interactivity.

### Option 2: VS Code Live Server
1. Open the project folder in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. The site opens at `http://127.0.0.1:5500/index.html`.

### Option 3: Local Python or PowerShell Server
If you prefer a lightweight local server:
```bash
# Python 3
python -m http.server 8000

# PowerShell (Windows)
# Access via http://localhost:8000
```

---

## ☁️ How to Deploy to Static Hosting

Because DISOM is a pure static website, you can deploy the folder directly to any static host:

- **GitHub Pages**: Push this repository to GitHub, go to **Settings > Pages**, set Branch to `main`, and save.
- **Netlify**: Drag and drop the project folder directly into the Netlify dashboard.
- **Vercel**: Deploy with zero configuration by pointing Vercel to this folder.
- **Cloudflare Pages / AWS S3**: Upload the folder as a static site bucket.

---

## 🎨 Design System & Visual Identity

The visual language is grounded in the traditional tribal earth pigments of Jharkhand, best represented in the state's famous, GI-tagged **Sohrai and Khovar mural arts**:

- **The Four Sacred Earth Pigments**:
  - **Red Ochre (*Gerua* / Hematite / Lal Mitti)**: `--red: #A63A2A;` / `--earth: #842618;`  
    *Symbolizes the sacred soil and vitality of tribal life; featured in primary action buttons, accents, and borders.*
  - **Manganese Black / Charcoal (*Kali Mitti*)**: `--black: #121110;` / `--forest-dark: #121110;`  
    *Derived from manganese-rich clay and charcoal; defining bold outlines, dramatic night skies, and header surfaces.*
  - **Kaolin White (*Dhudhi Mitti*)**: `--white: #FFFFFF;` / `--paper: #FAF7F2;` / `--cream: #F5EFE8;`  
    *Natural soft white chalk; symbolizes purity, sacred blossoms, and clean background cards.*
  - **Yellow Ochre (*Pila Mitti*)**: `--yellow: #D89F3A;` / `--gold: #D89F3A;`  
    *Derived from natural yellow earth; symbolizes the sun, spring Mahua, and harvest prosperity; featured on primary CTAs and badges.*
- **Traditional Sohrai Pattern Dividers**:
  - Distinctive geometric border strips (`.sohrai-divider`) combining alternating chevrons of red, black, white, and yellow.
- **Typography**:
  - Headings: Serif display (`Cinzel`, `Playfair Display`, with robust system fallbacks: `Georgia, 'Times New Roman', serif`).
  - Body & UI: Modern sans-serif (`Plus Jakarta Sans`, `Inter`, with robust system fallbacks: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`).
  - High-readability fluid scaling with `clamp()`.

---

## 🛍️ Marketplace & Cart Details

### Where Product Data is Stored
The 29 prototype products are stored in `assets/js/marketplace.js` under the `PRODUCTS` array. Each entry includes:
- `id`, `name`, `price`, `category`, `community`
- `shortDesc`, `fullDesc`
- `material`, `dimensions`, `provenance`
- `verificationStatus` (*"Prototype listing — Details to be verified with maker/community."*)
- `image`

### How Filters & Sorting Work
- **Search**: Real-time matching against product name, description, material, and community.
- **Category Filter**: Filters across 8 cultural craft categories.
- **Community Filter**: Filters across 7 community traditions.
- **Price Range**: Interactive slider dynamically filtering up to ₹2,000.
- **Sort Dropdown**: Sort by default curated, price low-to-high, price high-to-low, or name A–Z.
- **Reset Button**: Restores all filters to default state in one click.

### How the Cart Works
- Operates client-side using `localStorage` under the key `'disom_cart_items'`.
- Cart state persists when refreshing the page or navigating between different HTML pages.
- Supports adding items, removing items, changing quantities (`+` and `-`), clearing the basket, and calculating subtotals.
- Accessible via the cart button in the header of **every single page**.

---

## 🖼️ Media & GitHub Image Repository

All high-resolution photographs, cultural exhibits, and product images are hosted on the dedicated GitHub repository:
**[BuiltByAmos-1801/DisomImages](https://github.com/BuiltByAmos-1801/DisomImages)**

- **Direct GitHub Raw Base**: `https://raw.githubusercontent.com/BuiltByAmos-1801/DisomImages/main/`
- **jsDelivr CDN Mirror**: `https://cdn.jsdelivr.net/gh/BuiltByAmos-1801/DisomImages@main/`
- **Fallback Resilience**: If an image is unavailable or temporarily blocked, DISOM's built-in `handleImageError` function retries via jsDelivr CDN and falls back gracefully to a vector cultural badge so visitors never see broken image icons.
- **Repository Visibility**: The repository must be set to **Public** in GitHub Settings to allow web browsers to stream image files.

---

## ⚖️ Frontend Prototype vs. Production Requirements

This codebase is an institutional prototype. Below is a clear overview of client-side vs. backend requirements:

| Feature | Current Frontend Prototype | What Needs a Backend for Production |
|---|---|---|
| **Shopping Basket** | `localStorage` state management, drawer UI, persistent badge count | Server-side cart validation, inventory locking, checkout session |
| **Payments** | Educational notice: *"Checkout will be connected to a secure payment system in production."* | Payment gateway integration (Razorpay, Stripe, UPI) |
| **Contact Form** | Client-side validation, friendly local submission confirmation | SMTP/Email service (SendGrid, Postmark) or API endpoint |
| **Artisan Onboarding** | Client-side form with local submission feedback | Admin approval dashboard, document/ID upload storage (S3/GCS) |
| **Museum Filtering** | In-browser client-side filtering over curated dataset | Headless CMS or Search Engine (Meilisearch, Algolia) for thousands of exhibits |

---

## 📜 Cultural Integrity & Verification Policy

DISOM enforces a strict documentation ethics rule: **Do not fabricate cultural facts.**
Where historical or sacred claims require further field verification, items are explicitly marked:
> *"Prototype listing — Details to be verified with maker/community."*  
> *"Documentation in progress."*

For additions, corrections, or artisan registrations, visit the [Contact Page](contact.html).

---

© 2026 DISOM — Jharkhand Tribal Digital Museum. All rights reserved.
"# DisomImages" 
"# DISOM" 
