# Mubarak Mohammed Ali | Leo — Personal Portfolio

Personal portfolio of **Mubarak Mohammed Ali**, known as **Leo** — a Web Developer and Level 400
Information Technology Education student at USTED-Kumasi.

**Learn. Build. Create.**

> This is a refocused version of the original portfolio: renamed, repositioned around web
> development, trimmed to three real projects, and with the teaching/catch-up-classes content
> removed. See "What changed" below for the full list.

---

## Tech stack

React 19 + Vite 8, TypeScript (strict), Tailwind CSS v4, Framer Motion, Lucide React, React Router
v7. No backend — the contact form posts to a provider you configure via `.env`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # type-check, generate sitemap, build to dist/
npm run preview     # serve the production build
npm run check        # content and link audit
```

Copy `.env.example` to `.env` when connecting the contact form or setting `VITE_SITE_URL`.

## Updating content

Everything lives in `src/data/`:

| To change                         | File                       |
| ---------------------------------- | -------------------------- |
| Name, hero copy, email, SEO title  | `site.ts`                  |
| Social profile URLs                | `socialLinks.ts`           |
| Nav items                          | `navigation.ts`            |
| About paragraphs and interests     | `about.ts`                 |
| Degree / academic level            | `education.ts`             |
| Timeline milestones                | `journey.ts`               |
| Skills and levels                  | `skills.ts`                |
| Projects and case studies          | `projects.ts`              |

Statistics (`stats.ts`) are counted automatically from the other files — never edited by hand.

## What changed from the previous version

- **Name**: displayed throughout as "Mubarak Mohammed Ali | Leo" (navbar wordmark stays the short
  "Leo" for space; hero, About, and footer show the full name). Browser title is
  **"Mubarak Mohammed Ali"**.

  > One note on this: the brief gave two different browser titles in two different sections —
  > "Mubarak Mohammed Ali | Leo Portfolio" in the naming section, and plain "Mubarak Mohammed Ali"
  > in the SEO section. I went with the SEO section's version since it's the more specific,
  > deliberately-stated instruction. Change `seo.title` in `site.ts` in one line if you want the
  > other.

- **Profile picture**: the hero now uses the existing studio photo (`leo-portrait-alt.jpeg`) as the
  main profile picture, reused rather than replaced with anything new. The About section uses the
  same file. The old cut-out photo (`leo-portrait.png`) is no longer referenced anywhere but is
  still in `public/images/` if you want it back.

- **Academic level**: Level 300 → Level 400, everywhere (`education.ts`, `journey.ts`, the hero's
  floating card).

- **Projects**: trimmed to exactly three — CampusStay, Chichi's Kitchen, and this portfolio itself.
  The other four projects from the previous version are gone, along with their case studies. No
  GitHub or demo links were invented: CampusStay's demo and this portfolio's GitHub/demo links are
  real; Chichi's Kitchen has neither yet, so no link buttons render for it.

- **Removed entirely**: Teaching section ("Technology is better when it is shared"), catch-up
  classes, the Notes/Tutorials/Resources content hub, the `/blog` page, and the Services section
  (which included "Programming Support"). Their data files, components, and nav/route entries were
  deleted, not hidden with CSS.

- **Skills**: trimmed to technologies actually used in the current projects — HTML, CSS,
  JavaScript, React, PHP, MySQL, Git/GitHub, Tailwind CSS, VS Code, Vercel, UI/UX, responsive
  design. React Native/Expo, Java, Java Swing, and PostgreSQL were dropped since they belonged to
  the removed projects and aren't part of the new web-development focus.

- **Contact**: email is now `leomubarak11@gmail.com` everywhere (site config, mailto links,
  contact card).

- **Navigation**: trimmed to Home, About, Journey, Skills, Projects, Contact — matching the
  requested list exactly. Education is still a real section on the page (it's part of the academic
  background), just without its own nav pill, since it wasn't in the requested list.

- **Design system, animations, accessibility work, and SEO infrastructure** (contrast-checked
  colour tokens, structured data, sitemap generation) are unchanged from the previous build — only
  content and section composition changed, per the instruction to work with the existing codebase
  rather than rebuild it.

## Deployment (Vercel)

Same as before: push to GitHub, import into Vercel (framework preset Vite, build command
`npm run build`, output `dist` — already set in `vercel.json`), add `VITE_SITE_URL` as an
environment variable, deploy.

© 2026 Mubarak Mohammed Ali.
