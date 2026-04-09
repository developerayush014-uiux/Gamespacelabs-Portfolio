# 🛩️ GameSpace Lab — Website

A production-ready, multi-page Next.js 14 website for **GameSpace Lab** — an Android & web development consultancy built by engineers from Netflix and Google.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## 📁 Project Structure

```
gamespace-lab/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, Navbar, Footer
│   ├── globals.css             # Design tokens, glassmorphism, glow utilities
│   ├── page.tsx                # Home — Hero, Stats, Services, Globe, CTA
│   ├── services/
│   │   └── page.tsx            # 4 service cards + process steps
│   ├── about/
│   │   └── page.tsx            # Story, founders, niches, regions
│   ├── contact/
│   │   └── page.tsx            # 3-step animated form with Zod validation
│   ├── partners/
│   │   └── page.tsx            # Partner grid with category + region filters
│   ├── social/
│   │   ├── page.tsx            # Follow page (server metadata)
│   │   └── social-client.tsx   # Social cards + newsletter CTA
│   ├── faq/
│   │   ├── page.tsx            # FAQ (server metadata)
│   │   └── faq-client.tsx      # Animated accordion FAQ
│   ├── help/
│   │   ├── page.tsx            # Help (server metadata)
│   │   └── help-client.tsx     # Phone CTA + quick links
│   ├── privacy/page.tsx        # Privacy Policy
│   ├── terms/page.tsx          # Terms of Service
│   └── not-found.tsx           # Custom 404 page
│
├── components/
│   ├── Navbar.tsx              # Glassmorphism sticky nav + mobile drawer
│   ├── Footer.tsx              # Links, socials, India expansion badge
│   ├── AnimatedBackground.tsx  # Canvas particle network animation
│   ├── ContactForm.tsx         # Full 3-step form (standalone)
│   ├── sections/
│   │   ├── ServiceCard.tsx     # Service card with hover glow
│   │   ├── ContactForm.tsx     # Section-level form wrapper
│   │   └── StatCounter.tsx     # Stat display component
│   └── ui/
│       ├── SectionReveal.tsx   # Framer Motion scroll reveal wrapper
│       └── CounterStat.tsx     # Animated count-up number stat
│
├── data/
│   ├── content.ts              # ⭐ ALL site content — edit here to update anything
│   └── form-schema.ts          # Zod schema + JSON form config
│
├── lib/
│   └── utils.ts                # cn() utility
│
├── public/
│   └── images/                 # Place logo.png, og-image.png here
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `navy-950` | `#020817` | Page background |
| `navy-900` | `#0a0f1e` | Card backgrounds |
| `cyan-glow` | `#00d4ff` | Primary accent, CTAs, highlights |
| `green-neon` | `#00ff88` | Secondary accent, success states |
| `purple` | `#a855f7` | Tertiary accent |
| `orange` | `#f97316` | Service 4 accent |

### Typography

| Role | Font | Class |
|---|---|---|
| Headings | Space Grotesk | `font-display` |
| Body | Inter | `font-sans` |
| Code/Mono | JetBrains Mono | `font-mono` |

### Key CSS Utilities

```css
.glass-card          /* Glassmorphism card */
.gradient-text-cyan  /* Cyan gradient text */
.gradient-text-green /* Green gradient text */
.gradient-text-multi /* Multi-color gradient text */
.btn-primary         /* Cyan glow button */
.btn-ghost           /* Transparent bordered button */
.glow-cyan           /* Box shadow cyan glow */
.bg-grid             /* Circuit grid background */
.hero-gradient        /* Radial hero ambient glow */
.border-neon-cyan    /* Cyan neon border */
.border-neon-green   /* Green neon border */
.section-padding     /* Consistent section spacing */
.card-hover          /* Hover lift transition */
```

---

## 📄 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, stats, services preview, global reach, CTA |
| `/services` | Services | 4 detailed service cards + process timeline |
| `/about` | About | Company story, founders, niches, regions |
| `/contact` | Contact | 3-step form + sidebar info |
| `/partners` | Partners | Partner grid with category filters |
| `/social` | Follow | Social cards + newsletter signup |
| `/faq` | FAQ | Animated accordion FAQ |
| `/help` | Help | Phone CTA + quick links |
| `/privacy` | Privacy Policy | Legal page |
| `/terms` | Terms of Service | Legal page |

---

## 🧩 Data Layer

All site content lives in **`data/content.ts`**. It's structured like a lightweight CMS:

```typescript
// Update site info
siteConfig.email = "newemail@gamespacelab.com";

// Add a service
services.push({ id: "new-service", title: "...", ... });

// Add a partner
partners.push({ id: "p-7", name: "...", ... });

// Add an FAQ
faqs.push({ question: "...", answer: "..." });
```

---

## 📋 Form Schema

The contact form schema is defined in `data/form-schema.ts` in two places:

1. **`formSchema`** — JSON config (CMS-friendly, can be pushed to an API)
2. **`contactFormSchema`** — Zod schema for runtime validation

The form has **3 steps**:
- Step 1: Name, Email, Phone, Company
- Step 2: Services (multi-select), Project Description, Timeline
- Step 3: Budget (card select), Referral source, File upload, Consent

---

## 🔧 Customization

### Add Your Logo

1. Place `logo.png` in `/public/images/`
2. Update `Navbar.tsx` — replace the `<Zap>` icon block with `<Image src="/images/logo.png" .../>`

### Update Founder Bios

In `data/content.ts`, update the `founders` array:
```typescript
founders[0].name = "Your Name";
founders[0].bio = "Your bio here...";
founders[0].avatar = "/images/founder-1.jpg"; // Add photo to /public/images/
```

### Connect Form to Backend

In `components/ContactForm.tsx`, replace the simulated API call:
```typescript
const onSubmit = async (data: ContactFormData) => {
  // Replace this with your API call:
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
```

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `next` 14 | React framework (App Router) |
| `framer-motion` | Page/scroll/hover animations |
| `react-hook-form` | Form state management |
| `zod` | Schema validation |
| `@hookform/resolvers` | Zod ↔ react-hook-form bridge |
| `react-countup` | Animated stat counters |
| `react-hot-toast` | Toast notifications |
| `lucide-react` | Icon library |
| `tailwindcss` | Utility-first CSS |
| `clsx` + `tailwind-merge` | Conditional class utilities |
| `react-intersection-observer` | Scroll-triggered animations |

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel deploy
```

### Manual Build

```bash
npm run build
npm start
```

---

## 🎯 Next Steps

1. **Add real founder photos** — replace avatar placeholders in `/about`
2. **Connect form to backend** — Formspree, Resend, or custom API route
3. **Add analytics** — Vercel Analytics or PostHog
4. **Add real partner logos** — update `partners` in `content.ts` with logo URLs
5. **Set up OG image** — add `/public/og-image.png` (1200×630px)
6. **Add blog** — create `/app/blog/[slug]/page.tsx` with MDX

---

Built with ❤️ by Claude for GameSpace Lab.
