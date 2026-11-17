# LEAD College Website — Review 1

First-review build of the LEAD College website, rebuilt from scratch with a single design system and one shared navigation. Content comes from the existing pages in the parent folder. No build step is needed: open the HTML files directly or serve the folder.

```bash
cd review-1
python3 -m http.server 8000      # then open http://localhost:8000
```

## Folder structure

```
review-1/
├── index.html                 Homepage
├── *.html                     24 inner pages (flat, so relative links stay simple)
├── css/
│   ├── tokens.css             Colours, type scale, spacing, radius, shadow (light + dark)
│   ├── base.css               Reset, typography, layout primitives, buttons
│   ├── components.css         Header, mega menu, mobile menu, footer and all page components
│   └── home.css               Homepage-only sections
├── js/
│   ├── layout.js              Navigation data + renders header, mobile menu, footer, breadcrumbs
│   └── main.js                Interactions: theme, menus, tabs, scrollspy, rails, reveal
└── assets/
    ├── brand/                 Official LEAD logo (never recoloured)
    ├── img/                   Optimised photos (campus, people, programmes, faculty, alumni, life)
    └── video/                 Campus film
```

## Navigation: one source of truth

The header, mega menu, mobile menu, footer and every breadcrumb are generated from the `NAV` array at the top of `js/layout.js`, so the navigation is identical on every page.

- **Order and grouping** match the approved menu: About Us · Academics · Admissions · Entrepreneurship · Research · Life at LEAD · IQAC.
- **To link a new page:** add `href: "page.html"` to its item in `NAV`. Nothing else needs to change.
- **Pending pages:** an item with no `href` renders as a muted, non-clickable link with a **Soon** tag, so reviewers can see what is still missing (53 of 78 menu items right now).
- The current page is highlighted in the menu, and its breadcrumb is built automatically.

## Page template

Every inner page follows the same structure:

```html
<div id="site-header"></div><script src="js/layout.js"></script>
<main id="main">
  <section class="page-hero">… breadcrumb · eyebrow · h1 · lede · actions · media/facts</section>
  <nav class="page-nav">…optional sticky in-page links…</nav>
  <section class="section">…</section>
</main>
<footer id="site-footer"></footer>
```

Main components: `page-hero` (+ `--dark`, portrait variants), `section` (+ `--alt`, `--dark`), `section-head`, `split`, `side-head`, `card`, `num-list`, `steps`, `timeline`, `stats`, `message`, `data-table`, `acc` (accordion), `tabs`, `quote`, `chips`, `note`, `doc`, `person`, `team`, `rail`, `logo-wall`, `cta-band`.

## Pages in this review (25)

| Area | Pages |
| --- | --- |
| Home | `index.html` |
| About | `lead-story`, `vision-mission`, `founder`, `prompt-charitable-trust`, `statutory-bodies`, `rti`, `financial-statements`, `director`, `deputy-director`, `registrar` |
| Academics | `mba`, `mca`, `entrepreneurship-mba`, `faculty` |
| Admissions | `admissions` *(new: brings eligibility, steps, scholarships, FAQs and contacts together)* |
| Entrepreneurship | `lead-bi`, `iedc` |
| Life at LEAD | `lead-operating-teams`, `outbound-training`, `mentoring`, `curio`, `turning-point` |
| Other | `alumni`, `news-events` |

## Quality checks run

- All local links, in-page anchors and image paths resolve.
- All 25 pages tested at 360, 390, 768, 1024 and 1440 px: no horizontal overflow; header, footer and breadcrumb render; exactly one `<h1>` per page.
- Light and dark themes, the mega menu (mouse and keyboard: arrow keys, Esc) and the mobile menu (focus trap, search filter, scroll lock) were checked visually.
- Respects `prefers-reduced-motion`; content stays readable with JavaScript animations off.

## Open items for reviewers

**Content to confirm**
1. **Director title conflict.** The Director page names Dr. Sreekanth S. V. as Director. The old Founder page and the Statutory Bodies tables also call Dr. Thomas George K "Director". The Founder page here uses "Founder · Chairman, Prompt Charitable Trust"; the Statutory Bodies tables are left as supplied.
2. **Name spelling.** Turning Point used "Dr. Thomas K. George". It is normalised here to "Dr. Thomas George K".
3. **Leadership portraits.** The Director and Deputy Director photos come from `old-website/director` and `old-website/dupty-director`. Confirm they show the current officeholders.
4. **Recruiter numbers.** The site says both "500+ recruiters" and "200+ companies" (Why LEAD). Pick one.
5. **Recruiter logos.** The alt text in the previous homepage did not match the logo images (for example, "PepsiCo" was actually Airtel). The labels are corrected here. The logos and accreditation marks still load from lead.ac.in and should be stored locally before launch.
6. **Sample content.** Faculty profiles, alumni stories and their portraits are illustrative and are labelled on the page. Replace them with approved profiles.
7. **Missing information.** MCA eligibility, fees, deadlines and the brochure (flagged on the Admissions page).

**Before launch**
- Compress the campus film (35 MB) or host it on YouTube/Vimeo.
- Build the pages marked **Soon** in the menu (accreditations, examination, OBE, research, IQAC, hostel/canteen/sports, gallery).
- The iLEAD card on News & Events uses a stand-in campus photo. Replace it with an event photo.
