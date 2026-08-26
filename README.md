# Leo — Personal Portfolio

Personal portfolio of **Leo**, an Information Technology Education student (Level 300, USTED-Kumasi),
developer and educator.

**Learn. Build. Teach. Create.**

> Build status: **complete — all 12 phases.** The site is feature-complete and the production build
> passes. See [LAUNCH.md](./LAUNCH.md) for the content you still need to supply and the
> step-by-step deploy. The remaining sections are stubbed with live anchors so navigation
> already works. Visit `/styleguide` to see every UI primitive in both themes.

---

## Tech stack

| Area      | Choice                                                |
| --------- | ----------------------------------------------------- |
| Framework | React 19 + Vite 8                                     |
| Language  | TypeScript (strict)                                   |
| Styling   | Tailwind CSS v4 (CSS-first config, no JS config file) |
| Animation | Framer Motion                                         |
| Icons     | Lucide React                                          |
| Routing   | React Router v7                                       |
| Hosting   | Vercel (static build, SPA rewrites included)          |

> **Note on `lucide-react`:** pinned to `^0.544.0`. Version 1.x removed the brand icons
> (GitHub, LinkedIn, YouTube, Facebook) that the social links need. Upgrade only after replacing
> those with your own SVGs.

No backend. The contact form (Phase 9) posts to a third-party endpoint you configure in `.env`.

---

## Getting started

Requires **Node.js 20.19+ or 22.12+**.

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check and build to dist/
npm run preview    # serve the production build locally
npm run typecheck  # types only, no build
npm run format     # Prettier across the project
npm run check      # content and link audit — run before every deploy
```

Copy `.env.example` to `.env` when you are ready to wire up the contact form:

```bash
cp .env.example .env
```

---

## Folder structure

```
leo-portfolio/
├── public/
│   ├── favicon.svg
│   ├── images/              # portrait photos
│   └── projects/            # screenshots, one folder per project
│       ├── campus-stay/
│       ├── debby-phones/
│       ├── department-management/
│       ├── hostel-finder/
│       └── cgpa-calculator/
├── src/
│   ├── components/
│   │   ├── brand/
│   │   │   ├── Logo.tsx
│   │   │   └── SocialIcon.tsx   # platform -> icon mapping
│   │   ├── layout/
│   │   │   ├── BackToTop.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx       # sticky bar + mobile menu + scroll spy
│   │   │   ├── PageTransition.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   ├── SkipLink.tsx
│   │   │   └── SocialLinks.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Hero.tsx
│   │   ├── BlogCard.tsx
│   │   ├── Contact.tsx
│   │   ├── Seo.tsx              # per-page title, meta, OG, JSON-LD
│   │   ├── Content.tsx
│   │   ├── Journey.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   ├── Stats.tsx
│   │   ├── Teaching.tsx
│   │   ├── ui/                  # the design system
│   │   │   ├── Button.tsx       # primary · secondary · ghost · link
│   │   │   ├── Card.tsx         # raised · outline · sunken · dashed
│   │   │   ├── Container.tsx
│   │   │   ├── Field.tsx        # labelled input/textarea + honeypot
│   │   │   ├── Reveal.tsx       # scroll reveal, reduced-motion aware
│   │   │   ├── Section.tsx      # page band: id, rhythm, tint
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Tag.tsx          # tech chips and skill levels
│   │   │   └── index.ts         # barrel export
│   │   └── ThemeToggle.tsx
│   ├── context/
│   │   ├── theme-context.ts     # context object only (keeps fast refresh working)
│   │   └── ThemeProvider.tsx
│   ├── data/                    # all editable content lives here
│   │   ├── about.ts             # About copy, interests, CTA
│   │   ├── articles.ts          # knowledge hub + blog entries
│   │   ├── education.ts         # degree, status, focus areas
│   │   ├── journey.ts           # the timeline milestones
│   │   ├── skills.ts            # categories, skills, level definitions
│   │   ├── teaching.ts          # offerings, catch-up classes, schedule
│   │   ├── navigation.ts        # nav items and section order
│   │   ├── projects.ts          # projects + full case studies
│   │   ├── services.ts          # offerings + scope
│   │   ├── site.ts              # name, hero copy, SEO, images
│   │   ├── stats.ts             # figures counted from the other data files
│   │   └── socialLinks.ts       # your profile URLs
│   ├── hooks/
│   │   ├── useHasScrolled.ts    # navbar background on scroll
│   │   ├── useLockBodyScroll.ts # freezes the page behind the mobile menu
│   │   ├── useContactForm.ts    # form state, validation, submission
│   │   ├── useScrollSpy.ts      # highlights the section in view
│   │   ├── useTheme.ts
│   │   └── usePrefersReducedMotion.ts
│   ├── lib/
│   │   ├── cn.ts                # class name joiner
│   │   ├── seo.ts               # URL + title helpers
│   │   ├── structuredData.ts    # schema.org objects
│   │   ├── validation.ts        # contact form rules
│   │   ├── icons.ts             # icon-name -> component map for data files
│   │   ├── motion.ts            # shared easings, durations, variants
│   │   └── theme.ts             # localStorage + system theme helpers
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Blog.tsx             # /blog
│   │   ├── NotFound.tsx
│   │   ├── ProjectDetail.tsx    # /projects/:slug
│   │   └── StyleGuide.tsx       # /styleguide — internal reference, delete before launch
│   ├── styles/index.css         # design tokens + base styles
│   ├── types/index.ts
│   ├── App.tsx                  # route table
│   └── main.tsx
├── scripts/
│   ├── check-content.mjs        # pre-deploy audit (npm run check)
│   └── generate-sitemap.mjs     # runs before every build
├── .env.example
├── LAUNCH.md                    # launch checklist and deploy walkthrough
├── vercel.json
└── vite.config.ts
```

`projects.ts`, `skills.ts`, `journey.ts`, `education.ts`, `services.ts` and `articles.ts` join
`src/data/` in the phases that build those sections.

---

## Updating your portfolio

Content is separated from UI on purpose — you should rarely need to open a component.

| What you want to change            | File to edit                 |
| ---------------------------------- | ---------------------------- |
| Name, hero headline, bio, tagline  | `src/data/site.ts`           |
| Email, WhatsApp number, CV link    | `src/data/site.ts`           |
| Page title and meta description    | `src/data/site.ts` (`seo`)   |
| GitHub / LinkedIn / YouTube URLs   | `src/data/socialLinks.ts`    |
| Menu items and section order       | `src/data/navigation.ts`     |
| About copy and interests           | `src/data/about.ts`          |
| Timeline milestones                | `src/data/journey.ts`        |
| Degree, level, focus areas         | `src/data/education.ts`      |
| Skill categories and levels        | `src/data/skills.ts`         |
| Projects and case studies          | `src/data/projects.ts`       |
| Teaching copy and catch-up classes | `src/data/teaching.ts`       |
| Services and what you take on      | `src/data/services.ts`       |
| Blog and knowledge-hub articles    | `src/data/articles.ts`       |
| Colours, fonts, spacing, radii     | `src/styles/index.css`       |
| Project screenshots                | `public/projects/<project>/` |

**Social links:** leave `href` as an empty string until you have the real URL. Empty links are
filtered out and never rendered, so the site never shows a button that goes nowhere.

**Your CV:** drop the PDF at `public/leo-cv.pdf`, then set `hero.resumeUrl` to `/leo-cv.pdf`. The
Download CV button only appears once that value is set.

**Your photo:** the hero uses `public/images/leo-portrait.png`. Replace the file (keep a transparent
background for the cut-out look) or point `images.portrait` in `src/data/site.ts` somewhere else.
Update the `alt` text in `src/components/Hero.tsx` if the new photo shows something different.

**Menu items:** `src/data/navigation.ts` controls the navbar. Blog is set to `enabled: false` until
Phase 7 builds that route — flip it to remove the hide. `primaryNavItems` is the shorter desktop
list; the mobile menu shows everything.

---

## Design system

Colours are defined twice: a raw palette (`--color-moss-*`, `--color-ink-*`) and a semantic layer
(`--surface`, `--content`, `--accent`, `--line`…). **Components only use the semantic names**, e.g.
`bg-surface-raised`, `text-content-muted`, `border-line`, `text-accent`. Both themes then stay
consistent because there is one place to change each meaning.

- Display type: Bricolage Grotesque · Body: Geist · Mono: JetBrains Mono (loaded from Google Fonts)
- Green is the accent only — headings and body text stay charcoal or off-white
- Utilities: `container-page` (page width + gutters), `section-y` (vertical rhythm), `eyebrow`
  (small mono section label), `focus-ring`

### Type scale

Display sizes are fluid — `text-display-xl`, `-lg`, `-md`, `-sm` each `clamp()` between a mobile and
a desktop size, so a heading needs one class instead of three responsive variants. Body copy uses
Tailwind's normal `text-sm`/`text-base`/`text-lg`.

### Primitives

| Component        | Use it for                                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| `Button`         | Every control. Renders `<button>`, `<a>` (`href`) or a router `<Link>` (`to`) from the same props. |
| `Card`           | Any panel. `interactive` adds the hover lift used by project cards.                                |
| `Tag`            | Technology chips, categories, skill levels (`dot` adds a non-colour marker).                       |
| `Section`        | A page band: anchor id, vertical rhythm, optional tinted background.                               |
| `SectionHeading` | Eyebrow + heading + description + optional action, wired to `aria-labelledby`.                     |
| `Reveal`         | Scroll-triggered fade-up. Renders plain content under reduced motion.                              |
| `Container`      | Page width and gutters.                                                                            |

Import from the barrel: `import { Button, Card, Section } from '@/components/ui';`

Motion values (easings, durations, stagger) live in `src/lib/motion.ts` — change timing there, not
in individual components.

### Theme switching

- First visit follows the operating system setting.
- Once the toggle is used, the choice is stored under `leo-portfolio-theme` in `localStorage` and
  wins over the OS from then on.
- A small inline script in `index.html` applies the saved theme **before** React renders, so a dark
  mode reload never flashes white. If you change the storage key in `src/lib/theme.ts`, change it in
  `index.html` too.

---

## Content notes for Phases 3–4

- **Icons in data files.** Data stays free of JSX: `about.ts` names an icon (`'database'`) and
  `src/lib/icons.ts` maps it to a component. To add one, extend `IconKey` in `src/types` and add the
  entry to `iconMap`.
- **"More about me"** currently scrolls to the Journey timeline (`about.cta.href`). Point it at a
  dedicated `/about` route later if you want a longer page.
- **Journey has no dates.** Milestones are ordered but undated, because no dates were confirmed.
  Add `period: '2023'` to any milestone in `journey.ts` and it will appear.
- **Education lists one entry.** A commented-out template for earlier schooling sits in
  `education.ts` — fill it in or leave it out.

## SEO

Per-page metadata is handled by `src/components/Seo.tsx`. React 19 hoists `<title>`, `<meta>` and
`<link>` into the head from anywhere in the tree, so no helmet library is needed. Each page sets its
own title, description, canonical, Open Graph and Twitter tags, and 404 and `/styleguide` are marked
`noindex`.

**Set `VITE_SITE_URL` before launch.** Until it is set, canonical and `og:url` tags are omitted
rather than guessed — a wrong canonical does more damage than a missing one — and the sitemap is
skipped. Add it to `.env` locally and to Vercel's environment variables.

**Sitemap and robots** are generated by `scripts/generate-sitemap.mjs`, which runs automatically
before every build. It reads project slugs straight out of `src/data/projects.ts`, so a new project
appears in the sitemap with no extra step. Both files are gitignored because they are build output.

**Structured data** (`src/lib/structuredData.ts`) emits Person, WebSite and per-project CreativeWork
JSON-LD, built only from facts already on the page. No ratings, awards or employment — invented
markup gets sites penalised, and it would contradict everything else here.

**One limitation to know about.** This is a client-rendered app, so meta tags are written by
JavaScript. Google runs JavaScript and will see them; some social-preview scrapers do not, which is
why `index.html` carries static fallback tags and a `<noscript>` message. If link previews matter to
you, add prerendering (`vite-plugin-prerender` or `vite-react-ssg`) — the `Seo` component works
unchanged under both.

**Before launch:** add an Open Graph image at `public/og-image.png` (1200×630). The path is already
referenced in `site.ts`.

## Accessibility

The pass in Phase 11 measured every colour token pair rather than eyeballing them, and turned up one
real failure: `content-subtle` was **3.04:1** on the page background — below the 4.5:1 minimum, and
it is used for small text (eyebrow labels, dates, meta). It is now `ink-500`, which measures 4.79:1
against the tightest background. Form control borders were also below the 3:1 required for UI
boundaries (WCAG 1.4.11), so they use a dedicated `field-border` token measured for both themes.

Also in place: a skip link, one visible focus ring everywhere, semantic landmarks with each section
tied to its heading through `aria-labelledby`, `aria-current` on the active nav item, ARIA tabs with
arrow-key support on Skills, live regions for filter results and form status, errors bound to inputs
with `aria-describedby`, decorative images marked `alt=""`, and no information carried by colour
alone — skill levels, nav state and form errors each have a second signal.

## Statistics

`src/data/stats.ts` counts everything from the other data files — projects from `projects.ts`,
unique technologies from those projects, skill areas from `skills.ts`, catch-up topics from
`teaching.ts`. No figure is typed in by hand, so none can drift from what the site actually shows,
and none can be inflated by accident. If a number cannot be counted from real data, it does not
belong in that file.

## Motion

Every animation has an off switch through `prefers-reduced-motion`, and the off switch removes the
movement rather than shortening it:

| Effect                     | Where                                   |
| -------------------------- | --------------------------------------- |
| Staggered hero entrance    | `Hero.tsx`                              |
| Scroll reveal (once, 20px) | `Reveal` — used by every section        |
| Card hover lift            | `Card interactive` — projects, articles |
| Count-up on the stats band | `useCountUp` — jumps to the final value |
| Route cross-fade, 200ms    | `PageTransition`                        |
| Floating hero card         | `Hero.tsx` — 6s loop, stops entirely    |
| Back-to-top button         | appears after 800px                     |

Timing lives in `src/lib/motion.ts`. Change it there, not in components.

## Connecting the contact form

The form validates and submits already; it just needs somewhere to send to. Set one environment
variable and it starts working:

```bash
# .env
VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

It POSTs JSON — `{ name, email, subject, message }` — with `Accept: application/json`, which is what
**Formspree**, **Web3Forms**, **Getform** and most form services expect, as well as your own API
route or a small **Resend** function later. Add the same variable in Vercel under
**Settings → Environment Variables** and redeploy.

For **EmailJS**, which uses its SDK rather than a plain POST, swap the `fetch` call inside
`src/hooks/useContactForm.ts` for `emailjs.send(...)` — the three `VITE_EMAILJS_*` variables are
already stubbed in `.env.example`. Nothing else in the form has to change.

**Until an endpoint is set:** submitting shows a clear message that the form is not connected and
points the visitor at the direct contact options, rather than pretending the message was delivered.
In development you also get a dashed reminder under the button.

**Other behaviour worth knowing:**

- Validation runs on blur, then live while you correct a field — nobody is told their email is
  invalid halfway through typing it.
- On a failed submit, focus moves to the first field with a problem.
- Errors are tied to their input with `aria-describedby` and carry an icon, so they are not red text
  alone. Success and failure messages are announced through a polite live region.
- A hidden honeypot field catches basic bots; those submissions report success and go nowhere.
- Email and WhatsApp entries appear only once `email` and `whatsappNumber` are filled in
  `src/data/site.ts`. Both are still empty.

## Services

Five offerings, each with three concrete inclusions so the offer is not left vague. There are no
prices — add a `price` field to `Service` only if you are certain you can hold to it.

`serviceScope` in `services.ts` carries a "good fit" list and a "not me, at least not yet" list.
Naming the second one is deliberate: it sets expectations before someone writes, and it keeps the
section reading like a student developer rather than an agency.

## Teaching and the blog

**Catch-up class scheduling is configurable.** `teaching.catchUp.sessions` is an empty array, so the
panel shows `scheduleNote` — "sessions are arranged around the semester timetable" — instead of
dates. Add `{ topic, when, where }` entries when a session is confirmed and the list replaces the
note automatically. Empty it again afterwards.

**Every article is a draft.** The six pieces in `articles.ts` are planned, not written, so each card
carries a Draft label, is not clickable, and says "Not published yet". To publish one: set
`status: 'published'`, add a `date` and `readingMinutes`, and point `href` at the post. The card
becomes a link the moment those are set.

There is no `/blog/:slug` route yet — publishing today means linking out. When you want posts hosted
here, the `Article` type is the seam: add a `body` (Markdown) field, a route, and a renderer, and
nothing else in the UI has to change.

**Article covers** are generated placeholders in `public/blog/covers/`, one per category. Replace
them or point `cover` at a per-article image.

## Projects

Each project lives at `/projects/<slug>` as its own page rather than in a modal, so a case study can
be linked to directly, opened in a new tab, and given its own meta tags in Phase 11.

**Adding screenshots.** Drop images into `public/projects/<slug>/` and list them in that project's
`screenshots` array with real `alt` text. The Screenshots section only renders once the array has
entries; while it is empty you get a reminder in development and visitors see nothing.

**Cover images** are generated placeholders at `public/projects/<slug>/cover.svg`. Replace each file
(16:10 works best) or point `cover` somewhere else.

**Links.** `github` and `demo` are empty strings for every project except the Campus Stay demo. The
buttons appear as soon as a URL is filled in; until then the detail page says plainly that links
will follow.

**Before publishing, read the case studies.** Technologies, features and purpose came from your
notes, but the problem/challenges/lessons wording is a draft written on your behalf. Correct
anything that is not how it actually went — it is your account of your own work.

## Skill levels

Four labels only — `Learning`, `Familiar`, `Developing`, `Intermediate` — and their meanings are
printed on the page in the legend under the section, so a visitor never has to guess what a level
implies. There is no "Advanced" or "Expert" step by design; if you want one, add it to `SkillLevel`
in `src/types`, to `skillLevelMeta` in `skills.ts`, and raise `MAX_SKILL_STEPS`.

The category tabs follow the ARIA tabs pattern: arrow keys move between them, Home and End jump to
the ends, and only the selected tab is in the tab order.

## Navigation behaviour

- The bar is fixed and transparent over the hero, then picks up a blurred background once the page
  scrolls past 12px.
- The section currently in view is marked with an underline **and** `aria-current`, so the state is
  not carried by colour alone. Tracking uses `IntersectionObserver`, not scroll maths.
- Below `lg`, the links collapse into a hamburger menu that locks page scroll, closes on Escape or
  on picking a link, and returns focus to the button that opened it.
- A "Skip to content" link is the first item in the tab order.

## Accessibility and motion

Baked in from the start rather than added at the end: semantic landmarks, a single visible focus
ring on every interactive element, and `prefers-reduced-motion` respected both in CSS and via the
`usePrefersReducedMotion` hook, which skips Framer Motion entrance animations instead of just
speeding them up.

---

## Before deploying

```bash
npm run check   # lists anything missing or broken
npm run build   # must pass
npm run preview # test the production build, not the dev server
```

`npm run check` verifies that every referenced image exists, project and article slugs are unique,
every nav anchor has a matching section, links are well formed, and contact details are valid. It
exits non-zero on errors, so it can gate a deploy. Warnings are things still waiting on you and are
safe to launch with.

[LAUNCH.md](./LAUNCH.md) has the full checklist: what to fill in, a breakpoint-by-breakpoint test
pass, keyboard and reduced-motion checks, and post-deploy verification.

## Deployment (Vercel)

1. Push the repository to GitHub.
2. In Vercel, **Add New → Project**, then import the repository.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` — `vercel.json`
   already sets these, plus the SPA rewrite that keeps deep links like `/blog` working on refresh.
4. Add any `VITE_*` environment variables under **Settings → Environment Variables**.
5. Deploy. Every push to `main` redeploys automatically.

---

## Build roadmap

| Phase | Scope                                   | Status |
| ----- | --------------------------------------- | ------ |
| 1     | Setup, tokens, theme, routing           | Done   |
| 2     | Design system: buttons, cards, sections | Done   |
| 3     | Navbar + hero                           | Done   |
| 4     | About, education, journey               | Done   |
| 5     | Skills                                  | Done   |
| 6     | Projects + case studies                 | Done   |
| 7     | Teaching, content hub, blog             | Done   |
| 8     | Services                                | Done   |
| 9     | Contact form                            | Done   |
| 10    | Animation pass                          | Done   |
| 11    | SEO, sitemap, accessibility audit       | Done   |
| 12    | Testing and deployment                  | Done   |

---

## Content policy

Nothing on this site is invented. No fabricated jobs, clients, testimonials, awards, certifications
or user numbers. Where information is missing it is left as a clearly marked placeholder until Leo
provides the real thing.

© 2026 Leo.
