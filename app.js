const sections = document.querySelectorAll('section');

function showVisibleSections() {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showVisibleSections);
window.addEventListener('load', showVisibleSections);

  const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button text
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☼";
    } else {
      toggleBtn.textContent = "☾";
      
    }
  });
