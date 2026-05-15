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
