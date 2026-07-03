# Tamizharasi — Premium Senior Graphic Designer Portfolio

A premium, interactive, and high-performance creative director portfolio built for **Tamizharasi**. This project showcases B.Sc. Visual Communication academic foundations from Loyola College, 7+ years of professional graphic design experience across six roles, custom design expertise modules, and Employee of the Month honours recognition.

It utilizes cinematic interactions, a customized responsive video reel, an interactive canvas particle background, and a responsive custom floating social dock.

---

## 🚀 Key Features
- **Visual Identity**: Immersive dark theme with high-contrast Red Pink accent glows (`#FA2A55`) matching client assets.
- **Intelligent Hero Video Preloading**: Coordinates the loading states of the background video (`loadeddata`/`canplay` hooks) with the preloader and falls back to a poster image with a timeout (4.5s) if connection is slow to eliminate layout shift.
- **Interactive Cursor Particles**: High-performance HTML5 canvas particle trail with spring physics (lerping) and mouse tracking, themed in Red-Pink, fully responsive and optimized (disabled on touch devices and respects `prefers-reduced-motion`).
- **Creative Process Pipeline**: An interactive scroll-linked SVG dashed path tracking 5 steps (Discover & Understand -> Define Visual Direction -> Design & Explore -> Refine, Motion & Adapt -> Deliver & Evolve).
- **Glassmorphic Grid Sections**: Glowing, percentage-free skills badges, a dedicated education journey block, and a timeline of senior-level design experiences.
- **AI-Assisted Workflow Integration**: Showcases AI tools used to accelerate design iterations, video reel edits, and layout prototyping.
- **Honours & Awards Spotlight**: A dedicated spotlight panel highlighting her StuCred Employee of the Month award in July 2019.
- **EmailJS Contact Form**: Form validation, submit states, and clean fallback to native prefilled mailto client routing.
- **Collaborate Clipboard Flow**: Intercepts contact requests to copy a pre-drafted message to the clipboard, displays a premium self-dismissing toast notification, and redirects the user to Tamizharasi's LinkedIn profile. Fallback modal handles copy instructions if clipboard APIs are blocked.

---

## 🛠️ Tech Stack
- **Core**: React 19, Vite, ES6 Javascript
- **Styling**: Tailwind CSS v4, Custom CSS variables
- **Animations**: Framer Motion (for SVG path drawing), AOS (Animate on Scroll)
- **Email Delivery**: `@emailjs/browser` (with native mailto fallback)
- **Icons**: Custom design software SVGs (Ai, Ps, Figma) and external links

---

## 💻 Local Development Setup

To run this project locally, follow these steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies
In the root directory of the project, run:
```bash
npm install
```

### 3. Start Development Server
Launch Vite's hot-reload local server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
To build and optimize the bundle size for hosting:
```bash
npm run build
```
This generates a static production bundle inside the `dist/` directory.

---

## ☁️ Deploying on Vercel

Vercel is the recommended hosting platform for Vite-React projects due to its speed, global CDN, and automatic Git integration.

### Method 1: Deploying via Vercel Git Integration (Recommended)
1. Push this project to your GitHub repository (e.g., `https://github.com/tamizh9800/tamizharasi-portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New** > **Project**.
3. Import your repository.
4. Vercel will automatically detect **Vite** as the framework. Leave all default build configuration settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will build the project and provide a live URL in under a minute.
