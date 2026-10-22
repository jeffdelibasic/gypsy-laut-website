(() => {
  const button = document.querySelector(".gypsy-menu-button");
  const menu = document.querySelector("#gypsy-main-nav");
  if (!button || !menu) return;

  const setOpen = (open) => {
    button.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  };

  button.addEventListener("click", () => {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  // Section IDs are resolved on each update, so later homepage sections can
  // use the existing menu links without changing this navigation script.
  const sectionLinks = Array.from(menu.querySelectorAll('a[href^="#"]'));
  let updateQueued = false;

  const updateCurrentSection = () => {
    updateQueued = false;
    const activationLine = window.innerHeight * 0.32;
    let currentLink = null;
    let nearestTop = -Infinity;

    for (const link of sectionLinks) {
      const section = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (!section || !section.getClientRects().length) continue;
      const top = section.getBoundingClientRect().top;
      if (top <= activationLine && top > nearestTop) {
        nearestTop = top;
        currentLink = link;
      }
    }

    for (const link of sectionLinks) {
      if (link === currentLink) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  };

  const queueCurrentSectionUpdate = () => {
    if (updateQueued) return;
    updateQueued = true;
    window.requestAnimationFrame(updateCurrentSection);
  };

  window.addEventListener("scroll", queueCurrentSectionUpdate, { passive: true });
  window.addEventListener("resize", queueCurrentSectionUpdate);
  window.addEventListener("hashchange", queueCurrentSectionUpdate);
  queueCurrentSectionUpdate();
})();
