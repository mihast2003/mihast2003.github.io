const root = document.documentElement;
const theme_btn = document.getElementById("themeToggle");

const minimizeButtons = document.querySelectorAll(".minimize");
const closeButtons = document.querySelectorAll(".close");

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
theme_btn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  theme_btn.textContent = next === "dark" ? "Light mode" : "Dark mode";
});



minimizeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const window = button.closest(".window");
    const body = window.querySelector(".window-body");
    body.classList.toggle("minimized");
  });
});

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const window = button.closest(".window");
    window.style.display = "none";
  });
});