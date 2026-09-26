import { categories, tools } from "./tools.js?v=20260926-tools14";
import { updates } from "./updates.js?v=20260926-tools14";

const searchInput = document.querySelector("#toolSearch");
const clearSearch = document.querySelector("#clearSearch");
const resultSummary = document.querySelector("#resultSummary");
const categoryList = document.querySelector("#categoryList");
const toolGrid = document.querySelector("#toolGrid");
const emptyState = document.querySelector("#emptyState");
const updatesList = document.querySelector("#updatesList");
const updatesToggle = document.querySelector("#updatesToggle");
const updatesDialog = document.querySelector("#updatesDialog");
const showAll = document.querySelector("#showAll");

let selectedCategory = "all";
let query = "";

const statusLabel = { public: "公開中", draft: "準備中" };

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderUpdates() {
  updatesList.replaceChildren(...updates.map(item => {
    const row = element("li", "update-item");
    const date = element("time", "update-date", item.date.replaceAll("-", "."));
    date.dateTime = item.date.replaceAll(".", "-");
    row.append(date, element("span", "", item.text));
    return row;
  }));
}

updatesToggle.addEventListener("click", () => {
  updatesDialog.showModal();
  updatesToggle.setAttribute("aria-expanded", "true");
});

updatesDialog.addEventListener("close", () => {
  updatesToggle.setAttribute("aria-expanded", "false");
});

function renderCategories() {
  categoryList.replaceChildren(...categories.map(category => {
    const button = element("button", "category-button");
    button.type = "button";
    button.dataset.category = category.id;
    button.setAttribute("aria-controls", "toolGrid");
    const icon = element("span", "category-icon", category.icon);
    icon.setAttribute("aria-hidden", "true");
    button.append(icon, element("span", "", category.label));
    return button;
  }));
  updateCategorySelection();
}

function updateCategorySelection() {
  categoryList.querySelectorAll(".category-button").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.category === selectedCategory));
  });
}

categoryList.addEventListener("click", event => {
  const button = event.target.closest(".category-button");
  if (!button) return;
  selectedCategory = button.dataset.category;
  // ボタンを作り直さず、キーボードフォーカスを維持する。
  updateCategorySelection();
  renderTools();
});

function normalizeSearch(value) {
  return value.normalize("NFKC").toLowerCase();
}

function matchesTool(tool) {
  const inCategory = selectedCategory === "all" || tool.category === selectedCategory;
  const normalized = normalizeSearch(query.trim());
  const haystack = normalizeSearch([tool.name, tool.description, ...tool.tags].join(" "));
  return inCategory && (!normalized || haystack.includes(normalized));
}

function getToolUrl(tool) {
  const value = tool.url.trim();
  if (tool.status !== "public" || !value || value.startsWith("#")) return null;
  try {
    const url = new URL(value, document.baseURI);
    return ["https:", "http:"].includes(url.protocol) ? url : null;
  } catch {
    return null;
  }
}

function renderTools() {
  const filtered = tools.filter(matchesTool);

  toolGrid.replaceChildren(...filtered.map(tool => {
    const category = categories.find(item => item.id === tool.category);
    const url = getToolUrl(tool);
    const card = element(url ? "a" : "article", "tool-card");
    if (url) {
      card.href = url.href;
      if (url.origin !== window.location.origin) {
        card.target = "_blank";
        card.rel = "noopener";
      }
      const arrow = element("span", "tool-arrow", "→");
      arrow.setAttribute("aria-hidden", "true");
      card.append(arrow);
    }

    const heading = element("h3", "", tool.name);
    const status = element("span", "status-badge", statusLabel[tool.status] ?? tool.status);
    const meta = element("div", "tool-meta");
    meta.append(element("span", "tag", category?.label ?? tool.category));
    tool.tags.slice(0, 3).forEach(tag => meta.append(element("span", "tag", tag)));
    card.append(heading, status, element("p", "", tool.description), meta);
    if (!url && tool.status === "public") {
      card.append(element("p", "link-note", "リンク準備中"));
    }
    return card;
  }));

  emptyState.hidden = filtered.length !== 0;
  const category = categories.find(item => item.id === selectedCategory);
  const label = selectedCategory === "all" ? "" : `（${category.label}）`;
  resultSummary.textContent = `${filtered.length}件 / 全${tools.length}件のツールを表示中${label}`;
}

searchInput.addEventListener("input", event => {
  query = event.target.value;
  renderTools();
});

function resetFilters() {
  query = "";
  searchInput.value = "";
  selectedCategory = "all";
  updateCategorySelection();
  renderTools();
}

clearSearch.addEventListener("click", () => {
  resetFilters();
  searchInput.focus();
});

showAll.addEventListener("click", () => {
  resetFilters();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelector("#tools").scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
});

renderUpdates();
renderCategories();
renderTools();
