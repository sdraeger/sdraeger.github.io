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

  const copyButton = document.querySelector("[data-copy-email]");
  let copyResetTimer;

  function showCopyState(state) {
    if (!copyButton) return;
    const icon = copyButton.querySelector("[data-copy-icon]");
    copyButton.querySelectorAll("[data-copy-state]").forEach((element) => {
      element.hidden = element.dataset.copyState !== state;
    });
    const status = copyButton.querySelector("[data-copy-status]");
    if (status) status.textContent = state === "success" ? "Copied" : state === "failure" ? "Failed to copy" : "Copy";
    icon?.classList.remove("is-entering");
    void icon?.offsetWidth;
    icon?.classList.add("is-entering");
  }

  async function writeClipboard(value) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }
    const field = document.createElement("textarea");
    field.value = value;
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.append(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    if (!copied) throw new Error("Clipboard copy failed");
  }

  copyButton?.addEventListener("click", async () => {
    window.clearTimeout(copyResetTimer);
    try {
      await writeClipboard(copyButton.dataset.copyEmail);
      showCopyState("success");
    } catch (_) {
      showCopyState("failure");
    }
    copyResetTimer = window.setTimeout(() => showCopyState("idle"), 500);
  });

  const header = document.querySelector(".site-header");
  if (header) {
    const updateHeaderOffset = () => {
      root.style.setProperty("--header-offset", `${Math.ceil(header.getBoundingClientRect().height) + 16}px`);
    };
    updateHeaderOffset();
    new ResizeObserver(updateHeaderOffset).observe(header);
    // Re-align an incoming fragment after the web font establishes the header height.
    document.fonts.ready.then(() => {
      updateHeaderOffset();
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) target.scrollIntoView({ behavior: "instant" });
    });
  }

  const scrollTop = document.querySelector("[data-scroll-top]");
  const updateScrollTop = () => {
    if (scrollTop) scrollTop.hidden = window.scrollY < 400;
  };
  window.addEventListener("scroll", updateScrollTop, { passive: true });
  updateScrollTop();
  scrollTop?.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  });
})();
