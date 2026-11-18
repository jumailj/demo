/* =====================================================================
   LEAD College — Shared layout (Review 1)

   ONE source of truth for the site navigation. The desktop mega menu,
   the mobile menu, the footer and every page's breadcrumb are rendered
   from the NAV data below, so the navigation is identical on all pages.

   To add or link a page: edit NAV. A link without an href is shown as
   "Soon" (non-interactive) so reviewers can see which pages are pending.

   Loaded synchronously right after <div id="site-header"> so the header
   is in place before the page content paints.
   ===================================================================== */
(function () {
  "use strict";

  var APPLY_MBA = "https://admission.lead.ac.in/lead-college-of-management-mba-application";
  var APPLY_MCA = "https://admission.lead.ac.in/lead-college-of-management-mca-application";

  var CONTACT = {
    phone: "+91 94977 13693",
    phoneHref: "tel:+919497713693",
    email: "info@lead.ac.in",
    campus: "Dhoni Foothills Campus, Palakkad",
    address: ["LEAD College of Management (Autonomous)", "Dhoni P.O., Palakkad", "Kerala – 678 009, India"]
  };

  var SOCIAL = [
    { label: "Instagram", href: "https://www.instagram.com/lead_college_official/", icon: "instagram" },
    { label: "Facebook", href: "https://www.facebook.com/leadcollegeofficial/", icon: "facebook" },
    { label: "LinkedIn", href: "https://in.linkedin.com/school/lead-college-autonomous/", icon: "linkedin" },
    { label: "YouTube", href: "https://www.youtube.com/@leadcollegeofficial", icon: "youtube" }
  ];

  /* ---------- Navigation (order and grouping match the approved menu) ---------- */
  var NAV = [
    {
      label: "About Us",
      intro: "Our story, purpose, leadership and the bodies that govern LEAD College.",
      groups: [
        { title: "About the College", links: [
          { label: "The LEAD Story", href: "lead-story.html" },
          { label: "Vision & Mission", href: "vision-mission.html" },
          { label: "Founder", href: "founder.html" }
        ]},
        { title: "Accreditations & Awards", links: [
          { label: "HLACT–UK", href: "iqac.html#hlact" }, { label: "NAAC", href: "iqac.html#naac" },
          { label: "NBA", href: "iqac.html#nba" }, { label: "NIRF", href: "iqac.html#nirf" },
          { label: "AICTE", href: "iqac.html#aicte-approvals" }, { label: "IQAC: QLEAD", href: "iqac.html#overview" },
          { label: "Faculty Initiative", href: "iqac.html#faculty-initiatives" }, { label: "Statutory Information", href: "iqac.html#disclosures" }
        ]},
        { title: "Administration", links: [
          { label: "Prompt Charitable Trust", href: "prompt-charitable-trust.html" },
          { label: "Statutory Bodies", href: "statutory-bodies.html" },
          { label: "Administrative Office" },
          { label: "Compendium of Policies", href: "policies.html" },
          { label: "RTI", href: "rti.html" },
          { label: "Financial Statements", href: "financial-statements.html" }
        ]},
        { title: "Administrative Wings", links: [
          { label: "Director", href: "director.html" },
          { label: "Deputy Director", href: "deputy-director.html" },
          { label: "Registrar", href: "registrar.html" },
          { label: "Statutory Cell" },
          { label: "Committees" }
        ]}
      ]
    },
    {
      label: "Academics",
      intro: "Programmes, examinations and the academic framework behind them.",
      feature: { kicker: "Admissions 2026", title: "MBA & MCA applications are open", href: "admissions.html", cta: "See how to apply", img: "assets/img/programmes/mba-classroom.jpg" },
      groups: [
        { title: "Programmes", links: [
          { label: "MBA Programme", href: "mba.html" },
          { label: "MCA Programme", href: "mca.html" },
          { label: "Entrepreneurship MBA", href: "entrepreneurship-mba.html" }
        ]},
        { title: "Examination", links: [
          { label: "Controller of Examination" }, { label: "Examination Website" },
          { label: "Examination Manual" }, { label: "Examination Calendar" }
        ]},
        { title: "Outcome Based Education (OBE)", links: [
          { label: "OBE" }, { label: "Graduate Attributes" }, { label: "Programme Outcomes", href: "vision-mission.html#outcomes" },
          { label: "PSO & COs" }, { label: "Attainment Report" }, { label: "OBE Manual" }
        ]},
        { title: "Academic Collaborations", links: [
          { label: "MoUs" }, { label: "Internships" }, { label: "NPTEL" }, { label: "Exchange Programmes" }
        ]},
        { title: "Faculty Directory", links: [
          { label: "MBA & MCA Faculty Directory", href: "faculty.html" }
        ]},
        { title: "Downloads", links: [
          { label: "Syllabus" }, { label: "Academic Calendar" }, { label: "Handbook" }, { label: "Regulations" }
        ]}
      ]
    },
    {
      label: "Admissions",
      intro: "Everything you need to explore, prepare and apply.",
      feature: { kicker: "Apply online", title: "Start your application on the official LEAD portal", href: "admissions.html#apply", cta: "Choose a programme", img: "assets/img/campus/campus-entrance.jpg" },
      groups: [
        { title: "Overview", links: [{ label: "Admissions Overview", href: "admissions.html" }] },
        { title: "Brochure", links: [{ label: "Download the Brochure" }] },
        { title: "Apply Online", links: [
          { label: "Apply for MBA", href: APPLY_MBA, external: true },
          { label: "Apply for MCA", href: APPLY_MCA, external: true }
        ]}
      ]
    },
    {
      label: "Entrepreneurship",
      intro: "Ideas, enterprise and student innovation, supported on campus.",
      feature: { kicker: "MBA pathway", title: "Entrepreneurship MBA: learn by building", href: "entrepreneurship-mba.html", cta: "Explore the pathway", img: "assets/img/campus/entrepreneurship.jpg" },
      groups: [
        { title: "Entrepreneurship at LEAD", links: [
          { label: "LEAD BI", href: "lead-bi.html" },
          { label: "LEAD IEDC", href: "iedc.html" }
        ]}
      ]
    },
    {
      label: "Research",
      intro: "Research, scholarship and publication at LEAD.",
      groups: [
        { title: "Publications", links: [{ label: "Publications" }, { label: "LEADER Journal" }] },
        { title: "Research Guidance", links: [{ label: "PhD Guide" }, { label: "Research Policies" }, { label: "Research Committees" }] },
        { title: "Research Support", links: [{ label: "Research Facilities" }, { label: "Consultancy Service" }] }
      ]
    },
    {
      label: "Life at LEAD",
      intro: "Campus, community and the experiences that shape students.",
      feature: { kicker: "Flagship programme", title: "Thomman’s Turning Point: seven days to choose what comes next", href: "turning-point.html", cta: "Discover Turning Point", img: "assets/img/campus/turning-point.jpg" },
      groups: [
        { title: "People & Learning", links: [
          { label: "LEAD Operating Teams", href: "lead-operating-teams.html" },
          { label: "Outbound Training (OBT)", href: "outbound-training.html" },
          { label: "Mentoring", href: "mentoring.html" },
          { label: "Curio", href: "curio.html" }
        ]},
        { title: "Campus & Nature", links: [
          { label: "Hostel" }, { label: "Farm and Nature" }, { label: "Pets and Campus Life" }, { label: "Canteen" }
        ]},
        { title: "Culture & Events", links: [
          { label: "Turning Point", href: "turning-point.html" },
          { label: "Sports and Recreation" }, { label: "Social Media" }, { label: "Gallery" }
        ]}
      ]
    },
    {
      label: "IQAC",
      intro: "Internal quality assurance at LEAD.",
      groups: [
        { title: "IQAC & Governance", links: [{ label: "Quality & Accreditation", href: "iqac.html" }, { label: "Coordinator — IQAC", href: "iqac.html#leadership" }, { label: "Functions and Objectives" }, { label: "IQAC Core Committee" }] },
        { title: "Quality Processes", links: [{ label: "Curriculum Feedback" }, { label: "Reports" }, { label: "Quality Policy" }] },
        { title: "Institutional Practice", links: [{ label: "Institutional Values" }, { label: "Distinctiveness" }, { label: "Best Practices" }] }
      ]
    }
  ];

  /* Pages that live outside the main menu, for breadcrumbs */
  var EXTRA_PAGES = {
    "news-events.html": ["News & Events"],
    "alumni.html": ["Alumni"]
  };

  /* Quick links on the right of the top bar. An item with no href shows as
     muted, non-clickable text until its page or URL is added. */
  var UTILITY_LINKS = [
    { label: "LEAD Group of Institutions", icon: "building" },
    { label: "News & Events", href: "news-events.html", icon: "calendar" },
    { label: "Alumni", href: "alumni.html", icon: "users" }
  ];

  /* Notices shown in the bar under the main nav on the homepage only (rotates when there is more than one) */
  var NOTICES = [
    { title: "Admissions 2026:", text: "MBA and MCA admissions are officially open · Scholarships for merit and entrance exam high scorers.", link: { label: "Eligibility details", href: "admissions.html#eligibility" } },
    { title: "iLEAD 2026:", text: "The leadership fest was held on 1–3 October 2026.", link: { label: "See events", href: "news-events.html" } },
    { title: "How to apply:", text: "Explore programmes, eligibility and the application process.", link: { label: "Admissions", href: "admissions.html" } }
  ];

  /* ---------- Icons (inline sprite; use <svg class="i"><use href="#i-name"/></svg>) ---------- */
  var SPRITE =
    '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">' +
    '<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
    '<symbol id="i-right" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
    '<symbol id="i-down" viewBox="0 0 24 24"><path d="M12 5v14M6 13l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
    '<symbol id="i-chevron" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
    '<symbol id="i-sun" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g></symbol>' +
    '<symbol id="i-moon" viewBox="0 0 24 24"><path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8a8.5 8.5 0 1 0 11.3 11.3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></symbol>' +
    '<symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>' +
    '<symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>' +
    '<symbol id="i-search" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></g></symbol>' +
    '<symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></symbol>' +
    '<symbol id="i-mail" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></g></symbol>' +
    '<symbol id="i-pin" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></g></symbol>' +
    '<symbol id="i-file" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></g></symbol>' +
    '<symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
    '<symbol id="i-up" viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
    '<symbol id="i-instagram" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/></g><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/></symbol>' +
    '<symbol id="i-facebook" viewBox="0 0 24 24"><path fill="currentColor" d="M13.4 21v-8.1h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.4a22 22 0 0 0-2.4-.1c-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5v3.2h2.7V21Z"/></symbol>' +
    '<symbol id="i-linkedin" viewBox="0 0 24 24"><path fill="currentColor" d="M5.2 8.5H2.1V21h3.1Zm-1.6-5.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM21.9 13.8c0-3.8-2-5.5-4.7-5.5a4 4 0 0 0-3.6 2V8.5h-3.1V21h3.1v-6.2c0-1.6.3-3.2 2.3-3.2s2 1.9 2 3.3V21h3.1Z"/></symbol>' +
    '<symbol id="i-youtube" viewBox="0 0 24 24"><path fill="currentColor" d="M22 7.1a2.8 2.8 0 0 0-2-2C18.3 4.7 12 4.7 12 4.7s-6.3 0-8 .4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.5 12 29 29 0 0 0 2 16.9a2.8 2.8 0 0 0 2 2c1.7.4 8 .4 8 .4s6.3 0 8-.4a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.9 29 29 0 0 0-.5-4.9ZM9.8 15.5v-7l5.5 3.5Z"/></symbol>' +
    '<symbol id="i-calendar" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4m8-4v4"/></g></symbol>' +
    '<symbol id="i-users" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M18.5 14.6A6.5 6.5 0 0 1 21.5 20"/></g></symbol>' +
    '<symbol id="i-user" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/></g></symbol>' +
    '<symbol id="i-megaphone" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a1 1 0 0 0 1 1h3l6 4V5L7 9H4a1 1 0 0 0-1 1Z"/><path d="M7 15l1.5 5M17 9a3.5 3.5 0 0 1 0 6M19.5 6.5a7 7 0 0 1 0 11"/></g></symbol>' +
    '<symbol id="i-building" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 10h4a1 1 0 0 1 1 1v10M2.5 21h19"/><path d="M8 8h3M8 12h3M8 16h3"/></g></symbol>' +
    '<symbol id="i-image" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="m21 16-5-5-8 8.5"/></g></symbol>' +
    "</svg>";

  function icon(name, cls) {
    return '<svg class="i' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  var currentFile = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (currentFile === "") currentFile = "index.html";

  function isCurrent(href) {
    return href && href.split("#")[0].toLowerCase() === currentFile && href.indexOf("#") === -1;
  }

  function menuContainsCurrent(menu) {
    return menu.groups.some(function (g) {
      return g.links.some(function (l) { return isCurrent(l.href); });
    });
  }

  function linkHTML(l, cls) {
    if (!l.href) {
      return '<span class="' + cls + ' is-pending" aria-disabled="true" title="Page coming in a later revision">' +
        (l.icon && /utility-link|m-quick-link/.test(cls) ? icon(l.icon) : "") + esc(l.label) + '<span class="soon-tag">Soon</span></span>';
    }
    var ext = l.external ? ' target="_blank" rel="noopener"' : "";
    var cur = isCurrent(l.href) ? ' aria-current="page"' : "";
    return '<a class="' + cls + '" href="' + esc(l.href) + '"' + ext + cur + ">" + (l.icon && /utility-link|m-quick-link/.test(cls) ? icon(l.icon) : "") + esc(l.label) +
      (l.external ? icon("arrow", "i-ext") : "") + "</a>";
  }

  /* ---------- Header ---------- */
  function renderHeader() {
    var desk = NAV.map(function (menu, i) {
      var groups = menu.groups.map(function (g) {
        return '<div class="mega-group"><h3 class="mega-group-title">' + esc(g.title) + "</h3><ul>" +
          g.links.map(function (l) { return "<li>" + linkHTML(l, "mega-link") + "</li>"; }).join("") +
          "</ul></div>";
      }).join("");
      var feature = menu.feature
        ? '<a class="mega-feature" href="' + esc(menu.feature.href) + '">' +
          '<span class="mega-feature-img"><img src="' + esc(menu.feature.img) + '" alt="" loading="lazy"></span>' +
          '<span class="mega-feature-body"><span class="mega-feature-kicker">' + esc(menu.feature.kicker) + "</span>" +
          '<span class="mega-feature-title">' + esc(menu.feature.title) + "</span>" +
          '<span class="mega-feature-cta">' + esc(menu.feature.cta) + icon("right") + "</span></span></a>"
        : "";
      var cols = Math.min(menu.groups.length, menu.feature ? 3 : 4);
      return '<li class="nav-item">' +
        '<button class="nav-btn' + (menuContainsCurrent(menu) ? " is-current" : "") + '" type="button" aria-expanded="false" aria-controls="mega-' + i + '">' +
        esc(menu.label) + icon("chevron", "nav-chevron") + "</button>" +
        '<div class="mega" id="mega-' + i + '" hidden><div class="container mega-inner' + (menu.feature ? " has-feature" : "") + '">' +
        '<div class="mega-intro"><p class="mega-title">' + esc(menu.label) + "</p><p>" + esc(menu.intro) + "</p></div>" +
        '<div class="mega-groups" style="--cols:' + cols + '">' + groups + "</div>" + feature +
        "</div></div></li>";
    }).join("");

    var notices = NOTICES.map(function (n) {
      return '<li><strong>' + esc(n.title) + "</strong> " + esc(n.text) +
        (n.link ? ' <a href="' + esc(n.link.href) + '">' + esc(n.link.label) + icon("right") + "</a>" : "") + "</li>";
    }).join("");

    return SPRITE +
      '<a class="skip-link" href="#main">Skip to main content</a>' +
      '<div class="site-top" data-site-top>' +
      '<div class="utility-bar"><div class="container utility-inner">' +
      '<div class="utility-contact-row" role="group" aria-label="Campus contact details">' +
      '<span class="utility-contact-item utility-campus">' + icon("pin") + esc(CONTACT.campus) + "</span>" +
      '<span class="utility-divider" aria-hidden="true">|</span>' +
      '<a class="utility-contact-item utility-phone" href="' + CONTACT.phoneHref + '">' + icon("phone") + esc(CONTACT.phone) + "</a>" +
      '<span class="utility-divider" aria-hidden="true">|</span>' +
      '<a class="utility-contact-item utility-email" href="mailto:' + esc(CONTACT.email) + '">' + icon("mail") + esc(CONTACT.email) + "</a></div>" +
      '<nav class="utility-nav" aria-label="Quick links">' +
      UTILITY_LINKS.map(function (l) { return linkHTML(l, "utility-link"); }).join("") + "</nav>" +
      "</div></div>" +
      '<header class="site-header" id="top">' +
      '<div class="container header-inner">' +
      '<a class="brand" href="index.html" aria-label="LEAD College — home"><img src="assets/brand/lead-logo.png" alt="LEAD College Autonomous" width="828" height="492"></a>' +
      '<nav class="desk-nav" aria-label="Main"><ul class="nav-list">' + desk + "</ul></nav>" +
      '<div class="header-actions">' +
      '<button class="icon-btn theme-toggle" type="button" aria-label="Switch to dark theme" data-theme-toggle>' + icon("moon", "i-moon") + icon("sun", "i-sun") + "</button>" +
      '<a class="btn btn--sm header-apply" href="admissions.html">Apply 2026' + icon("arrow") + "</a>" +
      '<button class="icon-btn menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">' + icon("menu") + "</button>" +
      "</div></div></header>" +
      /* Notices appear on the homepage only */
      (currentFile === "index.html" && notices ?
        '<aside class="notice-bar" aria-label="Notices"><div class="container notice-inner">' +
        '<span class="notice-label">' + icon("megaphone") + "Notice</span>" +
        '<ul class="notice-list" data-rotator>' + notices + "</ul>" +
        "</div></aside>" : "") +
      "</div>" +
      renderMobileMenu();
  }

  /* ---------- Mobile menu (same NAV data → same hierarchy) ---------- */
  function renderMobileMenu() {
    var groups = NAV.map(function (menu) {
      var open = menuContainsCurrent(menu) ? " open" : "";
      return '<details class="m-group"' + open + "><summary>" + esc(menu.label) + icon("chevron", "m-chevron") + "</summary>" +
        '<div class="m-group-body">' +
        menu.groups.map(function (g) {
          return '<div class="m-sub"><p class="m-sub-title">' + esc(g.title) + "</p>" +
            g.links.map(function (l) { return linkHTML(l, "m-link"); }).join("") + "</div>";
        }).join("") + "</div></details>";
    }).join("");

    return '<div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu" hidden>' +
      '<div class="mobile-menu-head container">' +
      '<a class="brand" href="index.html" aria-label="LEAD College — home"><img src="assets/brand/lead-logo.png" alt="LEAD College Autonomous" width="828" height="492"></a>' +
      '<button class="icon-btn" type="button" data-menu-close aria-label="Close menu">' + icon("close") + "</button></div>" +
      '<div class="mobile-menu-body container">' +
      '<label class="m-search">' + icon("search") + '<input type="search" placeholder="Search pages" aria-label="Search menu" data-menu-search autocomplete="off"></label>' +
      '<p class="m-empty" data-menu-empty hidden>No pages match that search.</p>' +
      '<nav aria-label="Main (mobile)">' + groups + "</nav>" +
      '<nav class="m-quick" aria-label="Quick links (mobile)">' +
      UTILITY_LINKS.map(function (l) { return linkHTML(l, "m-quick-link"); }).join("") + "</nav>" +
      '<div class="m-apply"><a class="btn" href="' + APPLY_MBA + '" target="_blank" rel="noopener">Apply for MBA' + icon("arrow") + '</a><a class="btn btn--outline" href="' + APPLY_MCA + '" target="_blank" rel="noopener">Apply for MCA' + icon("arrow") + "</a></div>" +
      '<p class="m-contact"><a href="' + CONTACT.phoneHref + '">' + CONTACT.phone + '</a> · <a href="mailto:' + CONTACT.email + '">' + CONTACT.email + "</a></p>" +
      "</div></div>";
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    var cols = [
      { title: "Programmes", links: [
        { label: "MBA", href: "mba.html" }, { label: "MCA", href: "mca.html" },
        { label: "Entrepreneurship MBA", href: "entrepreneurship-mba.html" }, { label: "Faculty directory", href: "faculty.html" }
      ]},
      { title: "Admissions", links: [
        { label: "Admissions overview", href: "admissions.html" },
        { label: "Apply for MBA", href: APPLY_MBA, external: true },
        { label: "Apply for MCA", href: APPLY_MCA, external: true },
        { label: "Admissions FAQs", href: "admissions.html#faqs" }
      ]},
      { title: "About LEAD", links: [
        { label: "The LEAD Story", href: "lead-story.html" }, { label: "Vision & Mission", href: "vision-mission.html" },
        { label: "Statutory Bodies", href: "statutory-bodies.html" }, { label: "RTI", href: "rti.html" },
        { label: "Financial Statements", href: "financial-statements.html" }
      ]},
      { title: "Campus Life", links: [
        { label: "Turning Point", href: "turning-point.html" }, { label: "Operating Teams", href: "lead-operating-teams.html" },
        { label: "Mentoring", href: "mentoring.html" }, { label: "News & Events", href: "news-events.html" },
        { label: "Alumni", href: "alumni.html" }
      ]}
    ];
    var colsHTML = cols.map(function (c) {
      return '<div class="footer-col"><h2 class="footer-title">' + c.title + "</h2><ul>" +
        c.links.map(function (l) { return "<li>" + linkHTML(l, "footer-link") + "</li>"; }).join("") + "</ul></div>";
    }).join("");
    var social = SOCIAL.map(function (s) {
      return '<a class="social-link" href="' + s.href + '" target="_blank" rel="noopener" aria-label="' + s.label + '">' + icon(s.icon) + "</a>";
    }).join("");

    return '<div class="footer-cta"><div class="container footer-cta-inner">' +
      '<div><p class="eyebrow">Admissions 2026</p><h2 class="footer-cta-title">Take the next step at LEAD.</h2></div>' +
      '<div class="btn-row"><a class="btn btn--light" href="admissions.html">Admissions overview</a>' +
      '<a class="btn btn--ghost-light" href="' + APPLY_MBA + '" target="_blank" rel="noopener">Apply for MBA' + icon("arrow") + "</a>" +
      '<a class="btn btn--ghost-light" href="' + APPLY_MCA + '" target="_blank" rel="noopener">Apply for MCA' + icon("arrow") + "</a></div>" +
      "</div></div>" +
      '<div class="container footer-main">' +
      '<div class="footer-brand">' +
      '<a class="footer-logo" href="index.html" aria-label="LEAD College — home"><img src="assets/brand/lead-logo.png" alt="LEAD College Autonomous" width="828" height="492"></a>' +
      "<p>LEAD College of Management (Autonomous), Palakkad — AICTE-approved MBA &amp; MCA in Kerala. Affiliated to the University of Calicut.</p>" +
      '<ul class="footer-contact">' +
      "<li>" + icon("pin") + "<span>" + CONTACT.address.join("<br>") + "</span></li>" +
      '<li>' + icon("phone") + '<a href="' + CONTACT.phoneHref + '">' + CONTACT.phone + "</a></li>" +
      '<li>' + icon("mail") + '<a href="mailto:' + CONTACT.email + '">' + CONTACT.email + "</a></li></ul>" +
      '<div class="footer-social">' + social + "</div></div>" +
      '<div class="footer-cols">' + colsHTML + "</div></div>" +
      '<div class="container footer-bottom"><p>© ' + new Date().getFullYear() + " LEAD College of Management (Autonomous). All rights reserved.</p>" +
      '<p class="footer-review-tag">Website Review 1 · design prototype</p>' +
      '<a class="back-to-top" href="#top">' + icon("up") + "Back to top</a></div>";
  }

  /* ---------- Breadcrumb (derived from NAV) ---------- */
  function trailFor(file) {
    if (EXTRA_PAGES[file]) return EXTRA_PAGES[file];
    for (var i = 0; i < NAV.length; i++) {
      for (var j = 0; j < NAV[i].groups.length; j++) {
        var g = NAV[i].groups[j];
        for (var k = 0; k < g.links.length; k++) {
          var l = g.links[k];
          if (isCurrent(l.href)) {
            // Skip the group name when it adds nothing (single-link groups or same label)
            return g.title === l.label || g.links.length === 1
              ? [NAV[i].label, l.label]
              : [NAV[i].label, g.title, l.label];
          }
        }
      }
    }
    return null;
  }

  function renderBreadcrumb(el) {
    var trail = trailFor(currentFile);
    if (!trail) { el.remove(); return; }
    var items = ['<li><a href="index.html">Home</a></li>'].concat(trail.map(function (t, i) {
      return i === trail.length - 1 ? '<li aria-current="page">' + esc(t) + "</li>" : "<li>" + esc(t) + "</li>";
    }));
    el.innerHTML = "<ol>" + items.join("") + "</ol>";
    el.setAttribute("aria-label", "Breadcrumb");
  }

  /* ---------- Mount ---------- */
  var headerSlot = document.getElementById("site-header");
  if (headerSlot) headerSlot.outerHTML = renderHeader();

  function mountRest() {
    var footerSlot = document.getElementById("site-footer");
    if (footerSlot) {
      footerSlot.classList.add("site-footer");
      footerSlot.innerHTML = renderFooter();
    }
    Array.prototype.forEach.call(document.querySelectorAll("[data-breadcrumb]"), renderBreadcrumb);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mountRest);
  else mountRest();

  window.LEAD = { NAV: NAV, APPLY_MBA: APPLY_MBA, APPLY_MCA: APPLY_MCA, icon: icon };
})();
