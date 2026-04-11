/* ============================================================
   ESC102 Engineering Portfolio — script.js
   Sidebar active section tracking (project pages only)
   ============================================================ */

(function () {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const sections = document.querySelectorAll('.content-section[id]');

  if (!sidebarLinks.length || !sections.length) return;

  // Map id → sidebar link
  const linkMap = {};
  sidebarLinks.forEach(a => {
    const id = a.getAttribute('href').replace('#', '');
    linkMap[id] = a;
  });

  function setActive(id) {
    sidebarLinks.forEach(a => a.classList.remove('active'));
    if (linkMap[id]) linkMap[id].classList.add('active');
  }

  // Activate first link on load
  if (sections[0]) setActive(sections[0].id);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-15% 0px -65% 0px', threshold: 0 }
  );

  sections.forEach(s => observer.observe(s));
})();
