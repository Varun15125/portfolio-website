const sections = document.querySelectorAll("section");
const toggleBtn = document.getElementById("theme-toggle");
const toggleIcon = toggleBtn.querySelector("i");

function showVisibleSections() {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

function setTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    toggleIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    toggleBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme ? savedTheme === "dark" : prefersDark);

window.addEventListener("scroll", showVisibleSections);
window.addEventListener("load", showVisibleSections);

toggleBtn.addEventListener("click", () => {
    setTheme(!document.body.classList.contains("dark-mode"));
});
