# Launch checklist

Work down this file once. Anything marked **blocking** should be done before you share the link
widely; the rest can follow.

---

## 1. Fill in what only you can supply

Run `npm run check` at any point — it lists exactly what is still missing.

- [ ] **blocking** — Social profile URLs in `src/data/socialLinks.ts`. Empty links are hidden, so
      the hero, footer and contact rows are currently bare.
- [ ] **blocking** — `email` and `whatsappNumber` in `src/data/site.ts`. WhatsApp is digits only,
      international format, no `+` (e.g. `233200000000`).
- [ ] **blocking** — Read every case study in `src/data/projects.ts`. The technologies and features
      are yours; the problem, challenges and lessons are drafts written from your notes. Correct
      anything that is not how it actually went.
- [ ] Read the three About paragraphs in `src/data/about.ts` and make them sound like you.
- [ ] Check the skill levels in `src/data/skills.ts`. Nothing goes above Intermediate by design.
- [ ] `VITE_SITE_URL` in `.env` (and in Vercel) once you know the address. Without it, canonical
      tags and the sitemap are skipped.
- [ ] Real GitHub and demo URLs on projects as repositories go public.
- [ ] Project screenshots into `public/projects/<slug>/`, then list them in each project's
      `screenshots` array. Replace the placeholder `cover.svg` files too.
- [ ] Replace `public/og-image.png` (1200×630) with your own if you want something different.
- [ ] Your CV at `public/leo-cv.pdf`, then set `hero.resumeUrl` to `/leo-cv.pdf`.
- [ ] Delete `src/pages/StyleGuide.tsx` and its route in `App.tsx` if you do not want it public.
      It is already `noindex` and blocked in robots.txt.

---

## 2. Test locally

```bash
npm run check      # content and link audit
npm run build      # must finish with no errors
npm run preview    # serves the production build, not the dev server
```

Test against the **preview** build, not `npm run dev` — they behave differently.

### Breakpoints

Open DevTools → device toolbar and step through each width.

| Width   | What to look at                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 320px   | Nothing overflows sideways. Hero heading does not break awkwardly. Filter rows scroll horizontally rather than wrapping into a mess. |
| 375px   | Hero portrait and the floating card sit inside the screen. Buttons are comfortably tappable.                                         |
| 768px   | Two-column grids appear. The hamburger menu is still in use. Timeline markers line up with their cards.                              |
| 1024px  | Desktop nav replaces the hamburger. Skills tabs move to the vertical rail. About switches to two columns.                            |
| 1280px  | Content stays within the page container and does not stretch too wide.                                                               |
| 1440px+ | Generous margins, no oversized text, hero still balanced.                                                                            |

### Everything else

- [ ] Toggle light/dark on every page, then **reload** — the theme must persist with no white flash.
- [ ] Tab through the whole home page: skip link first, visible focus ring on every stop, nothing
      reachable that should not be, focus returns to the hamburger button after closing the menu.
- [ ] Skills tabs: arrow keys, Home and End.
- [ ] Turn on reduced motion (macOS: Accessibility → Display → Reduce motion; Windows: Settings →
      Accessibility → Visual effects → Animation effects off) and reload. Content should appear
      without movement — no fades, no counting numbers, no floating card.
- [ ] Contact form: submit empty (four errors, focus lands on Name), enter a bad email, then a valid
      submission. Without an endpoint configured you should see the "not connected" message.
- [ ] Click every project card, the previous/next links, all filters, the blog filters, and the
      footer links.
- [ ] Open a project page directly in a new tab, then refresh it — deep links must not 404.

---

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio: initial version"
git branch -M main
git remote add origin https://github.com/<your-username>/leo-portfolio.git
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `dist`, `.env` and the generated
`sitemap.xml`/`robots.txt`. Confirm `.env` is **not** in the push before you make the repo public.

---

## 4. Deploy to Vercel

1. Sign in at vercel.com with GitHub.
2. **Add New → Project**, import the repository.
3. Framework preset **Vite**; build command `npm run build`; output directory `dist`.
   `vercel.json` already sets these plus the SPA rewrite that keeps `/blog` and `/projects/...`
   working on refresh.
4. **Environment Variables** — add before the first deploy:
   - `VITE_SITE_URL` = your production URL (no trailing slash)
   - `VITE_CONTACT_ENDPOINT` = your form endpoint, once you have one
5. Deploy. Every later push to `main` redeploys automatically; pull requests get preview URLs.

### Custom domain

Vercel → Settings → Domains → add the domain and follow the DNS instructions. Afterwards update
`VITE_SITE_URL` to match and redeploy, so canonical tags and the sitemap point at the right host.

---

## 5. After the first deploy

- [ ] Visit `/sitemap.xml` and `/robots.txt` — the sitemap should list the home page, the blog and
      all six project pages. If it is missing, `VITE_SITE_URL` was not set at build time.
- [ ] Run Lighthouse in Chrome DevTools against the deployed URL, not localhost.
- [ ] Paste the URL into a WhatsApp message to yourself to check the link preview. If the card is
      bare, see the prerendering note in the README — client-rendered meta tags are not read by
      every scraper.
- [ ] Submit the site to [Google Search Console](https://search.google.com/search-console) and add
      the sitemap there.
- [ ] Send a real message through the contact form and confirm it arrives.

---

## 6. Keeping it current

Almost everything is edited in `src/data/`, never in components:

| To change                      | Edit          |
| ------------------------------ | ------------- |
| Hero wording, name, links, SEO | `site.ts`     |
| A new project or case study    | `projects.ts` |
| Skills and levels              | `skills.ts`   |
| Timeline milestones            | `journey.ts`  |
| Catch-up class sessions        | `teaching.ts` |
| Articles, publishing a draft   | `articles.ts` |
| Services and scope             | `services.ts` |

The statistics band counts itself from these files, so the numbers never need touching.

After any content change: `npm run check`, `npm run build`, then push. Vercel does the rest.
