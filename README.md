# Ashish Kumar — Portfolio (Next.js + Tailwind + Framer Motion)

Same layout, content, colors and typography as the original design — this
version adds premium motion using Framer Motion and lightweight CSS
animations, and respects `prefers-reduced-motion` everywhere.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Edit content

All text, links, skills, projects and certificate metadata live in
`lib/data.ts` — change it there and every section updates automatically.

Certificate and profile images are in `public/certificates/` and
`public/profile.jpg`.

## Where each animation lives

| # | Animation | File |
|---|-----------|------|
| 1 | Page load animation | `components/Preloader.tsx` |
| 2 | Scroll fade/slide-up per section | `components/ui/Reveal.tsx` |
| 3 | Staggered heading/paragraph/card/list animations | `components/ui/Stagger.tsx` |
| 4 | Button hover animations | `components/ui/Button.tsx` |
| 5 | Project card hover lift + shadow | `components/Projects.tsx` |
| 6 | Animated glow border on primary buttons | `app/globals.css` (`.glow-border`) |
| 7 | Sliding underline on nav links | `components/Tabbar.tsx`, `components/Sidebar.tsx` (Framer `layoutId`) |
| 8 | Floating profile image | `components/Hero.tsx` (`animate-floaty`) |
| 9 | Typing animation for hero title | `hooks/useTypewriter.ts` |
| 10 | Scroll progress indicator | `components/ScrollProgress.tsx` |
| 11 | Animated skill progress bars | `components/ui/SkillBar.tsx` |
| 12 | Animated stat counters | `components/ui/AnimatedCounter.tsx` |
| 13 | Mouse-following gradient glow | `components/CursorGlow.tsx` |
| 14 | Floating background blobs | `components/BackgroundBlobs.tsx` |
| 15 | Ripple effect on button click | `components/ui/Button.tsx` + `.ripple-span` in `app/globals.css` |
| 16 | Glassmorphism | `.glass` utility in `app/globals.css` (back-to-top button) |
| 17 | Animated gradient text | `.gradient-text` in `app/globals.css` |
| 18 | Certificate image zoom on hover | `components/Certificates.tsx` |
| 19 | Back-to-top button | `components/BackToTop.tsx` |
| 20 | Parallax on hero terminal/avatar | `components/Hero.tsx` (`useScroll` + `useTransform`) |
| 21 | Navbar entrance animation | `components/Sidebar.tsx`, `components/MobileTopbar.tsx` |
| 22 | Footer reveal | `components/Footer.tsx` |
| 23 | Reduced-motion support | `hooks/usePrefersReducedMotion.ts` (read by every animated component) |

## Notes

- All animations use Framer Motion's `whileInView` (triggers once, GPU-friendly
  `transform`/`opacity` only) or plain CSS keyframes — nothing animates
  layout-triggering properties, so everything stays smooth on mobile.
- Every component that animates checks `usePrefersReducedMotion()` and skips
  or shortens its animation accordingly.
