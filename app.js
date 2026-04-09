       function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        function toggleMenu() {
            document.getElementById('navMenu').classList.toggle('active');
        }
        

        const sections = document.querySelectorAll('section');
        window.addEventListener('scroll', () => {
            sections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    sec.classList.add('show');
                }
            });
        });