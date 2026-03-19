(function () {
  const app = document.getElementById("app");
  const pageKey = document.body.dataset.page;
  const basePath = document.body.dataset.basePath || ".";
  const pages = window.OROYA_PAGES || {};
  const page = pages[pageKey];

  if (!app || !page) {
    return;
  }

  const navItems = [
    { key: "privacy-policy", label: "Privacy Policy", href: "/privacy-policy/" },
    { key: "terms-of-use", label: "Terms of Use", href: "/terms-of-use/" },
    { key: "community-guidelines", label: "Community Guidelines", href: "/community-guidelines/" },
    { key: "data-deletion", label: "Data Deletion", href: "/data-deletion/" },
    { key: "contact", label: "Contact", href: "/contact/" }
  ];

  function normalizePath(path) {
    if (window.location.protocol === "file:") {
      return basePath.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
    }

    return path;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderNavLinks(className) {
    return navItems
      .map(function (item) {
        const activeClass = item.key === pageKey ? " is-active" : "";
        return (
          '<a class="' +
          className +
          activeClass +
          '" href="' +
          escapeHtml(normalizePath(item.href)) +
          '">' +
          escapeHtml(item.label) +
          "</a>"
        );
      })
      .join("");
  }

  function renderSections() {
    return page.sections
      .map(function (section) {
        const paragraphs = (section.paragraphs || [])
          .map(function (paragraph) {
            return '<p class="section-copy">' + escapeHtml(paragraph) + "</p>";
          })
          .join("");

        const bullets = Array.isArray(section.bullets) && section.bullets.length
          ? '<ul class="section-list">' +
            section.bullets
              .map(function (bullet) {
                return "<li>" + escapeHtml(bullet) + "</li>";
              })
              .join("") +
            "</ul>"
          : "";

        const note = section.note
          ? '<div class="section-note"><div class="section-note-title">' +
            escapeHtml(section.note.title) +
            '</div><p class="section-note-copy">' +
            escapeHtml(section.note.copy) +
            "</p></div>"
          : "";

        return (
          '<section class="content-section" id="' +
          escapeHtml(section.id) +
          '">' +
          '<h2 class="section-title">' +
          escapeHtml(section.title) +
          "</h2>" +
          paragraphs +
          bullets +
          note +
          "</section>"
        );
      })
      .join("");
  }

  function renderTocLinks() {
    return page.sections
      .map(function (section) {
        return (
          '<a class="toc-link" href="#' +
          escapeHtml(section.id) +
          '">' +
          escapeHtml(section.title) +
          "</a>"
        );
      })
      .join("");
  }

  function renderHighlights() {
    return page.highlights
      .map(function (item) {
        return (
          '<li class="highlight-item"><span class="highlight-label">' +
          escapeHtml(item.label) +
          '</span><span class="highlight-value">' +
          escapeHtml(item.value) +
          "</span></li>"
        );
      })
      .join("");
  }

  app.innerHTML =
    '<div class="site-shell">' +
    '<header class="site-header">' +
    '<div class="topbar">' +
    '<a class="brand-lockup" href="' +
    escapeHtml(normalizePath("/privacy-policy/")) +
    '">' +
    '<span class="brand-name">OROYA</span>' +
    '<span class="brand-subtitle">Policy Center</span>' +
    "</a>" +
    '<div class="header-actions">' +
    '<nav class="desktop-nav" aria-label="Primary">' +
    renderNavLinks("nav-link") +
    "</nav>" +
    '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation">' +
    '<span class="menu-toggle-line"></span>' +
    '<span class="menu-toggle-line"></span>' +
    '<span class="menu-toggle-line"></span>' +
    "</button>" +
    "</div></div>" +
    '<nav class="mobile-menu" id="mobile-menu" aria-label="Mobile">' +
    renderNavLinks("nav-link") +
    "</nav>" +
    "</header>" +
    '<section class="page-intro">' +
    '<p class="kicker">' +
    escapeHtml(page.category) +
    "</p>" +
    '<h1 class="page-title">' +
    escapeHtml(page.title) +
    "</h1>" +
    '<p class="page-description">' +
    escapeHtml(page.description) +
    "</p>" +
    '<ul class="highlights-list">' +
    renderHighlights() +
    "</ul>" +
    "</section>" +
    '<main class="page-layout">' +
    '<article class="document-shell">' +
    '<div class="document-meta">' +
    '<span class="meta-item">Updated: ' +
    escapeHtml(page.updatedAt) +
    '</span><span class="meta-divider"></span><span class="meta-item">' +
    escapeHtml(page.documentType) +
    "</span></div>" +
    renderSections() +
    '<section class="support-block">' +
    '<h2 class="section-title">' +
    escapeHtml(page.support.title) +
    '</h2><p class="section-copy">' +
    escapeHtml(page.support.copy) +
    '</p><div class="support-links"><a class="text-link" href="' +
    escapeHtml(normalizePath(page.support.primaryHref)) +
    '">' +
    escapeHtml(page.support.primaryLabel) +
    '</a><a class="text-link" href="' +
    escapeHtml(normalizePath(page.support.secondaryHref)) +
    '">' +
    escapeHtml(page.support.secondaryLabel) +
    "</a></div></section>" +
    "</article>" +
    '<aside class="page-sidebar">' +
    '<section class="sidebar-group"><p class="sidebar-label">On This Page</p><div class="toc-links">' +
    renderTocLinks() +
    '</div></section><section class="sidebar-group"><p class="sidebar-label">All Pages</p><div class="sidebar-links">' +
    renderNavLinks("sidebar-link") +
    '</div></section><section class="sidebar-group"><p class="sidebar-label">Support</p><p class="sidebar-copy">' +
    escapeHtml(page.sidebarNote) +
    "</p></section></aside>" +
    "</main>" +
    '<footer class="site-footer">' +
    '<div class="footer-copy">OROYA legal and support pages for the mobile application.</div>' +
    '<div class="footer-links">' +
    renderNavLinks("footer-link") +
    "</div></footer></div>";

  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    mobileMenu.addEventListener("click", function (event) {
      const target = event.target;

      if (target instanceof HTMLElement && target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      }
    });
  }
})();
