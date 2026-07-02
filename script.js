const root = document.documentElement;

const minimizeButtons = document.querySelectorAll(".minimize");
const closeButtons = document.querySelectorAll(".close");

// #region Theme toggle

const theme_btn = document.getElementById("themeToggle");
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

// #endregion

// #region MINIMIZE BUTONS

// for each minimize button: if clicked - adds class ".hidden" to closest ".window-body" 
minimizeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const window = button.closest(".window");
    const body = window.querySelector(".window-body");
    body.classList.toggle("minimized");
  });
});

// #endregion

// #region modal

// for each window-modal: get buttons and add functionality
document.querySelectorAll(".window-modal").forEach(modal => {
  const win = modal.closest(".window")
  const closeBtn = win.querySelector(".close");

  const closeModal = win.querySelector(".close_modal");

  const yes = win.querySelector(".yes");
  const no = win.querySelector(".no");

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  no.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  yes.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});

document.querySelectorAll(".modal-actions").forEach(modal => {
  const yesButtons = modal.querySelectorAll(".yes");

  let reversed = false;

  // when entering "yes" button - switch row order of the parent object
  yesButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      reversed = !reversed;
      modal.style.flexDirection = reversed ? "row-reverse" : "row";
    });
  });
});

// #endregion