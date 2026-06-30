console.log("JS is working");

const root = document.documentElement;
const btn = document.getElementById("themeToggle");

// load saved theme
const saved = localStorage.getItem("theme");

if (saved) {
  root.setAttribute("data-theme", saved);
} else {
  // fallback to system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", prefersDark ? "dark" : "light");
}

// toggle
btn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  btn.textContent = next === "dark" ? "Light mode" : "Dark mode";
});