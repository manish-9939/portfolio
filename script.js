document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            if (menuToggle) {
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // 2. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // 3. Active Link Highlighting (IntersectionObserver)
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.3
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(currentId)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 4. "Simple Circular Ring" Orbit Logic (Optimized)
    const skillContainers = document.querySelectorAll('.skill-items');

    skillContainers.forEach((container) => {
        const tags = Array.from(container.querySelectorAll('.tag'));
        const r = 100; // Fixed radius for a clean ring
        let angleY = 0;
        let isVisible = false;

        // IntersectionObserver to pause animation when off-screen
        const orbitObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
            });
        });
        orbitObserver.observe(container);

        // EVEN Distribution: Calculate fixed angles once
        const step = (2 * Math.PI) / tags.length;
        tags.forEach((tag, i) => {
            tag.dataset.theta = step * i;
        });

        const render = () => {
            if (isVisible) {
                angleY += 0.005; // Smooth, slow constant rotation

                tags.forEach(tag => {
                    const theta = parseFloat(tag.dataset.theta) + angleY;

                    // Pure 2D Circle in 3D space (XZ plane)
                    const x = r * Math.cos(theta);
                    const z = r * Math.sin(theta);
                    const y = 0; // Flat

                    // Simple depth scaling
                    const scale = (z + r * 3) / (r * 3);
                    const alpha = (z + r) / (2 * r) + 0.3;

                    tag.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
                    tag.style.opacity = Math.min(Math.max(alpha, 0.4), 1);
                    tag.style.zIndex = Math.floor(scale * 100);

                    // Counter-rotate Icon for readability
                    const icon = tag.querySelector('i');
                    if (icon) {
                        icon.style.transform = `rotateY(${-theta}rad)`; // Face front
                    }
                });
            }
            requestAnimationFrame(render);
        };

        render();
    });

    // 5. Card Tilt Effect (Optimized)
    const cards = document.querySelectorAll('.skill-category');
    cards.forEach(card => {
        let isHovered = false;

        card.addEventListener('mouseenter', () => isHovered = true);
        card.addEventListener('mouseleave', () => {
            isHovered = false;
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });

        card.addEventListener('mousemove', (e) => {
            if (!isHovered) return;
            // Use requestAnimationFrame for smoother tilt
            requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        });
    });

    // 6. Typewriter Effect (Removed for Editorial Theme)
    /* 
    const typeWriterElement = document.getElementById('typewriter');
    ...
    type(); 
    */

    // 7. Scroll Reveal Animation (IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
});
