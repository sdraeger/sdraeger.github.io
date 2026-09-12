(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeColor = document.querySelector("[data-theme-color]");

  function setTheme(theme, persist = true) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    themeColor?.setAttribute("content", theme === "dark" ? "oklch(0.145 0 0)" : "oklch(1 0 0)");
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
      themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
    if (persist) {
      try { localStorage.setItem("theme", theme); } catch (_) { /* Storage may be disabled. */ }
    }
  }

  setTheme(root.dataset.theme === "dark" ? "dark" : "light", false);

  themeToggle?.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  // The address is split across spans in the markup so it is not in the served HTML as plain text.
  const address = document.querySelector(".profile-email");
  if (address) {
    const [local, , domain] = address.children;
    const value = `${local.textContent}@${domain.textContent}`;
    const link = document.createElement("a");
    link.href = `mailto:${value}`;
    link.textContent = value;
    address.replaceChildren(link);
  }
})();
