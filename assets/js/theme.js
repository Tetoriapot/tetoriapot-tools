// スタイルの読み込み前に表示設定を適用し、初回描画のちらつきを抑える。
(() => {
  const storageKey = "tetoriapot-tools-theme";
  const fontSizeKey = "tetoriapot-tools-font-size";
  const fontSizes = ["small", "normal", "large"];
  let theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  let fontSize = "normal";

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === "dark" || stored === "light") theme = stored;
    const storedSize = localStorage.getItem(fontSizeKey);
    if (fontSizes.includes(storedSize)) fontSize = storedSize;
  } catch {
    // 保存領域を使えない環境でもOSテーマで表示する。
  }

  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.fontSize = fontSize;

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // 保存できなくても、開いているページの切替は有効にする。
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#themeToggle");
    const icon = toggle.querySelector(".theme-icon");
    const text = toggle.querySelector(".theme-text");
    const fontControls = document.querySelector("#fontSizeControls");

    function applyTheme() {
      const isLight = theme === "light";
      document.documentElement.dataset.theme = theme;
      toggle.setAttribute("aria-pressed", String(isLight));
      icon.textContent = isLight ? "☀" : "☾";
      text.textContent = isLight ? "Light" : "Dark";
    }

    toggle.addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      applyTheme();
      savePreference(storageKey, theme);
    });

    function applyFontSize() {
      document.documentElement.dataset.fontSize = fontSize;
      fontControls.querySelectorAll("button[data-font-size]").forEach(button => {
        button.setAttribute("aria-pressed", String(button.dataset.fontSize === fontSize));
      });
    }

    fontControls.addEventListener("click", event => {
      const button = event.target.closest("button[data-font-size]");
      if (!button) return;
      fontSize = button.dataset.fontSize;
      applyFontSize();
      savePreference(fontSizeKey, fontSize);
    });

    // 文字サイズやナビの折り返しで変わるヘッダー高を、アンカー位置に反映する。
    const header = document.querySelector(".site-header");
    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty("--header-height", `${header.getBoundingClientRect().height}px`);
    };
    new ResizeObserver(updateHeaderHeight).observe(header);

    applyTheme();
    applyFontSize();
    updateHeaderHeight();
  });
})();
