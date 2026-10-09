# TheBizz360 Official Website

A clean, modern, SEO-friendly React + TypeScript website for **TheBizz360**, built from the ground up using authentic brand tokens from the platform's **Food Space** and **Work Space**.

> **Note:** The existing `foodie WEB` application was completely untouched. This project was developed in this dedicated folder (`thebizz360-website`).

---

## 🎨 Brand & Design System

The visual identity directly reflects the two core spaces in the existing application:

1. **Food Space**
   - **Primary Color:** `#d9480f` (Warm Foodie Orange)
   - **Accent / Tint:** `#ff7a1a`, `#ffe8d6`, `#fff5ec`
   - **Identity:** Campus dining, multi-diet menus, live queue tokens, stall ordering, and building delivery.

2. **Work Space**
   - **Primary Color:** `#2F4BD8` (Cobalt Blue)
   - **Accent / Tint:** `#1E2F8F`, `#EEF1FE`, `#F5F7FB`
   - **Identity:** Print & Xerox uploads, campus service vendors, student freelancers, and commercial directory.

3. **Typography**
   - **Headings & Display:** `Unbounded Variable`
   - **Body & UI Elements:** `Plus Jakarta Sans Variable`

---

## 🚀 Pages & Features

### 1. Home Page (`/`)
- **Hero Section:** Clear value proposition, call-to-actions, and dual-space interactive visual cards illustrating a live cafeteria order token and a print queue task.
- **What We Offer:** Space filter tab (All, Food Space, Work Space) showcasing authentic capabilities (Canteen Ordering, Live Queue Tokens, Print & Xerox Hub, Student Freelance Marketplace, etc.).
- **Why Choose TheBizz360:** Core benefit cards highlighting zero queue times, vetted vendors, and dual-space cohesion.
- **Campus Insights:** Quick preview of the latest research articles.
- **CTA Banner:** Encouraging campus partnerships and stall onboarding.

### 2. Blogs Page (`/blogs`) & Blog Detail (`/blogs/:slug`)
- **Featured Article:** Large highlighted publication card with core takeaways.
- **Search & Category Filtering:** Instant client-side search across titles, excerpts, and tags.
- **Empty State:** Friendly reset trigger if no articles match queries.
- **Individual Article Pages:** Readable typography, author metadata, key takeaways callout, article sharing, related articles, and JSON-LD `BlogPosting` schema.

### 3. Contact Page (`/contact`)
- **Liaison Desk Info:** Physical campus desk, email (`support@thebizz360.com`), and operating hours.
- **Interactive Form:** Full client-side validation (name, email, optional phone, category selector, subject, message).
- **Prototype Status:** Clear notice that form submissions are handled safely in local component state.
- **States:** Form validation errors, loading spinner, and success confirmation.

### 4. SEO & Standards
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Dynamic page title and meta description updater (`SEOHead.tsx`).
- Open Graph, Twitter Cards, Canonical links.
- `sitemap.xml` and `robots.txt` in `public/`.
- JSON-LD structured data (Organization, Blog, BlogPosting, ContactPage).

---

## 💻 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 + Custom Design Tokens
- **Icons:** `lucide-react`
- **Routing:** `react-router-dom`
- **Fonts:** `@fontsource-variable/unbounded` & `@fontsource-variable/plus-jakarta-sans`

---

## 🛠️ Development & Build Commands

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run TypeScript type check
npm run typecheck

# Build for production
npm run build

# Preview production build
npm run preview
```
