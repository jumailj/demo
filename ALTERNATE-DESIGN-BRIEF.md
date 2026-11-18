# LEAD College — Alternate Website Design Brief

## Purpose

Create a second, clearly different visual direction for the LEAD College website using the content, assets, and working structure in `review-1` as the reference. This brief is for a future design pass. Keep the current `review-1` website intact and build the alternative in a separate folder, such as `review-2`, so both directions can be compared.

The new direction should feel right for a respected, contemporary college: welcoming, clear, credible, locally grounded, and easy to navigate. It should feel distinct from the current high-contrast, navy-led, image-and-card-heavy presentation without losing LEAD’s identity.

## Design concept: LEAD Campus Journal

Treat the site like a modern college prospectus brought to life: editorial, calm, human, and confident. Let campus photography, strong typography, clean page structure, and useful information do the work. Avoid an old institutional portal look and avoid generic startup landing-page patterns.

The visual change should be immediately apparent in the homepage opening, section rhythm, navigation presentation, and content layouts—not just a palette swap.

## What is already part of LEAD’s identity

- LEAD College of Management, Dhoni, Palakkad, Kerala.
- MBA and MCA are the core postgraduate programmes. The entrepreneurship MBA pathway belongs with the MBA programme; LEAD BI and LEAD IEDC have their own pages under Entrepreneurship.
- The existing brand is based on LEAD’s official logo and a blue/navy palette. Keep blue as the only strong accent family.
- Inter is the established typeface. Continue with Inter rather than introducing several competing font families.
- The website includes academic, admissions, entrepreneurship, research, quality, campus-life, alumni, and news information. It must feel like a complete college website, not only an admissions campaign.
- There are substantial formal and regulatory sections. They need a clear, dignified reading experience, not a decorative layout that makes official information difficult to scan.

## Visual system

### Colour

Use the existing brand tokens as the source of truth. The current system includes:

- Navy: `#102947`
- Deep navy: `#0A1D35`
- Brand blue: `#2952C8`
- Blue hover: `#1F43AD`
- Sky blue: `#8DB7FF`
- Light page surface: white and soft neutral greys

For this alternative, make white and a subtle warm paper neutral the main page surfaces, with navy for headings and blue for links, active states, and selected actions. A suitable paper starting point is `#F7F6F2`; confirm it against the actual logo and photos. Use the existing design tokens where practical. Do not introduce teal or green accents, neon colours, or a second unrelated palette. Do not recolour the official LEAD or accreditation logos.

### Typography and readability

- Use Inter throughout, with a clear difference between display headings, section headings, body text, and metadata through size and weight.
- Keep body copy comfortable to read: generally 16–18px on desktop, with sufficient line height. Avoid tiny captions; metadata should remain comfortably readable and should not carry essential information by itself.
- Use strong, consistent heading hierarchy and keep paragraph measures moderate so long copy is easy to follow.
- Make mobile text and controls genuinely readable; do not shrink the interface to fit more content.
- Use sentence case for most labels. Reserve all-caps, letter-spaced eyebrow text for short section labels only.

### Layout and components

- Build on a consistent 12-column desktop grid, with a readable maximum content width and predictable gutters.
- Use flat surfaces, fine rules, columns, editorial image crops, and restrained borders to create structure.
- Reduce the number of rounded cards. Use a card only when it helps people compare items or recognise an action. Avoid making every link, statistic, paragraph, and profile into its own box.
- Avoid oversized empty areas, repeated card grids, decorative gradients, glass effects, strong shadows, and pill-shaped controls everywhere.
- Use modest corner rounding for photos and controls; keep it consistent.
- Use authentic images from `review-1/assets/img` where suitable. Prefer campus, classroom, student activity, and real institutional imagery. Do not create synthetic faculty or alumni portraits. Images marked as illustrative must remain clearly labelled as illustrative until replaced with approved real profiles.

## Navigation and shared site structure

Preserve the current information architecture and order from `review-1/js/layout.js`. Do not redesign the alternate concept by deleting or rearranging approved destinations.

### Main navigation order

1. About Us
2. Academics
3. Admissions
4. Entrepreneurship
5. Research
6. Life at LEAD
7. IQAC

The utility row contains LEAD Group of Institutions, News & Events, and Alumni. Keep the current campus/contact information where the existing layout provides it. Gallery remains within the Life at LEAD area rather than returning as a top utility link. If a destination has no confirmed URL, show its existing pending state rather than inventing a destination.

Use a clear, restrained header with the official logo, readable link labels, obvious focus and active states, and a compact but comfortable height. Desktop mega menus should use clean typographic groups and subtle dividers, not a field of oversized tiles. On mobile, the menu must use the full available viewport, remain scrollable, and never be cropped by the page or browser. Keep categories and spacing clear enough to scan; do not compress links until they are hard to read.

Keep the shared footer consistent across all pages. It should include the approved logo treatment, key navigation, contact details, and social media icons already available in the project.

## Homepage structure and content

Keep this sequence unless an actual content or technical dependency requires a small adjustment. The page should guide visitors from understanding LEAD, to exploring programmes, to outcomes and campus life.

### 1. Hero and academic credentials

- Lead with the approved message: “Transform your career at LEAD.”
- Include a concise description, a primary “Explore programmes” action, and a secondary “Apply now” action.
- Keep the academic credentials and recognition marks together as a single, carefully aligned credibility strip associated with the hero. Do not repeat the same credential section later on the homepage.
- Do not use a large dark image background as the only visual idea. Explore a light editorial split: readable copy on one side and an authentic campus or learning photograph on the other.
- Keep the hero’s top edge square as requested. Do not add excess blank height below the buttons or credentials.

### 2. Welcome / The LEAD story

Introduce the college briefly with an authentic campus image and a concise overview. Link to the full LEAD Story page instead of placing the entire institutional history on the homepage.

### 3. Programmes

Show MBA and MCA as the two core programmes. Include the entrepreneurship MBA pathway within the MBA presentation; do not make it look like a third unrelated core programme. Link to the full programme pages and preserve the current programme details from the source files.

### 4. Why Choose LEAD College?

Retain all eight approved themes: Expert Faculty, Modern Curriculum, Industry Partnerships, Research Opportunities, Global Exposure, Career Support, Fully Residential, and Flexible Timing. Present them as a readable editorial list or grouped highlights, not eight identical cards.

### 5. Faculty and business leaders

Retain the faculty/business-leader area. Use authentic, approved profiles when available. Any sample profiles and generated or illustrative imagery must be visibly identified as illustrative and must not be presented as actual LEAD faculty or business leaders.

### 6. Placement outcomes

Keep “Good work finds its way” as the placement section’s headline and use the approved current placement figures from the homepage source. Make the figures easy to scan and explain their labels clearly.

### 7. Recruiter network

Show approved company logos in a clean, quiet logo area. Avoid decorative frames that compete with the logos and avoid claiming a specific relationship beyond what the source content supports.

### 8. Alumni

Keep alumni after placement outcomes, as requested. Use approved alumni profiles or clearly labelled illustrative samples. Make the path to the Alumni page easy to find.

### 9. Campus life

Use a considered photo-led introduction to campus life, linking to the existing pages such as Curio, LEAD Operating Teams, Outbound Training, Mentoring, and Turning Point. Keep this section visually distinct from the programme and placement areas.

### 10. News & Events

Keep the homepage preview brief and chronological. Show useful dates and titles, then link to the dedicated News & Events page. Do not turn it into a dense feed or a looping marquee.

### 11. FAQ and shared footer

Keep the existing FAQ content readable and concise, followed by the shared site footer.

## Inner-page design pattern

Give every inner page the same dependable foundation while allowing its content to determine the layout:

1. Shared header and navigation.
2. Breadcrumbs and one clear page title.
3. A short introduction or relevant authentic image where it helps orientation.
4. A page-specific content layout: long-form editorial text, timeline, leadership profile, document list, data table, FAQ, or programme details as appropriate.
5. Related links where they genuinely help visitors continue.
6. Shared footer.

Avoid forcing every page into the same hero plus three-card template. Vary the content module based on what the page needs, while keeping typography, spacing, navigation, and footer consistent.

For statutory and governance pages, make it easy to find the relevant body and read its purpose, term, meeting frequency, functions, and membership. Use accessible tables on wider screens and a readable stacked or horizontally scrollable treatment on narrow screens. Preserve all supplied names, roles, dates, qualifications, and descriptions exactly; do not silently rewrite or omit official details.

For financial statements and other downloads, show each year clearly and link directly to its confirmed PDF. Do not create fake document links.

## Content and data rules

- Treat the HTML pages, navigation data, and existing design files in `review-1` as the working source of truth.
- Reuse existing approved content and image assets rather than inventing new facts, people, awards, accreditations, deadlines, placements, or facilities.
- There are conflicting numbers in older conversation material and some source content. Use the current `review-1` page content as the initial reference, and flag any material conflict for confirmation instead of blending values. In particular, do not silently swap between recruiter totals, partner totals, placement rates, or salary figures.
- Keep “Soon” or equivalent pending states for pages and destinations that are not yet available. Do not make a pending item appear to be a working link.
- Do not label generated or sample people as real staff, faculty, founders, or alumni.
- Preserve the original meaning of official and regulatory copy. Improve layout and readability without inventing legal or institutional commitments.

## Interaction, accessibility, and motion

- Make navigation, buttons, tabs, accordions, and carousels work with keyboard and touch input.
- Use semantic headings, meaningful image text alternatives, visible keyboard focus, and adequate colour contrast.
- Keep touch targets comfortable, approximately 44px or larger.
- Respect reduced-motion preferences. Avoid autoplaying carousels, marquee text, and animation that distracts from reading.
- Use motion only to clarify state changes, such as opening a menu or selecting a tab.
- Ensure the layout works at desktop, tablet, and narrow phone widths without horizontal page overflow or cropped navigation.

## Direction checklist

Before considering the alternate design ready for review, confirm that:

- It looks meaningfully different from the existing review-1 site while still clearly belonging to LEAD.
- The official logo, brand blue, and core programme structure remain intact.
- The approved navigation hierarchy and utility links remain present and usable.
- The homepage follows the content sequence in this brief and does not duplicate the accreditation section.
- The page uses readable type, controlled spacing, and a restrained number of cards.
- Authentic and illustrative imagery are clearly distinguished.
- Official content, statistics, and document links have not been invented or silently altered.
- Desktop and mobile layouts both feel intentional, especially the mobile navigation and long governance pages.

## Instruction for the next design pass

Use this brief and the existing `review-1` project to create a separate alternate design. Keep `review-1` unchanged. Reuse its approved content and assets, keep unresolved facts visibly unresolved, and make the new direction feel editorial, welcoming, and suitable for a college website—not like a recoloured copy of the current design.
