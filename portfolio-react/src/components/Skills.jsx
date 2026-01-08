
import React, { useEffect, useRef } from 'react';

const SkillCategory = ({ title, icon, skills, list }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const tags = Array.from(container.querySelectorAll('.tag'));
        const r = 85; // Optimized radius for the container
        let angleX = 0;
        let angleY = 0;
        let requestID;
        let isVisible = false;

        // IntersectionObserver to pause animation when off-screen
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
            });
        });
        observer.observe(container);

        // Distribute tags spherically
        tags.forEach((tag, i) => {
            const phi = Math.acos(-1 + (2 * i) / tags.length);
            const theta = Math.sqrt(tags.length * Math.PI) * phi;
            tag.dataset.phi = phi;
            tag.dataset.theta = theta;
        });

        const render = () => {
            if (isVisible) {
                angleX += 0.003;
                angleY += 0.005;

                tags.forEach(tag => {
                    const phi = parseFloat(tag.dataset.phi);
                    const theta = parseFloat(tag.dataset.theta) + angleY;

                    // 3D Spherical Coordinates
                    const x = r * Math.sin(phi) * Math.cos(theta);
                    const y = r * Math.sin(phi) * Math.sin(theta);
                    const z = r * Math.cos(phi);

                    // Perspective Calculations
                    const scale = (z + r * 2.5) / (r * 2.5);
                    const alpha = (z + r) / (2 * r) + 0.2;

                    tag.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
                    tag.style.opacity = Math.min(Math.max(alpha, 0.3), 1);
                    tag.style.zIndex = Math.floor(scale * 100);

                    // Counter-rotate the text/icon so it stays readable
                    const iconEl = tag.querySelector('i');
                    if (iconEl) {
                        // Keep content upright
                        tag.style.perspective = '1000px';
                    }
                });
            }
            requestID = requestAnimationFrame(render);
        };


        render();

        return () => {
            cancelAnimationFrame(requestID);
            observer.disconnect();
        };
    }, [skills]);

    // Tilt Effect
    const cardRef = useRef(null);
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        let isHovered = false;
        const handleMouseEnter = () => isHovered = true;
        const handleMouseLeave = () => {
            isHovered = false;
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        };
        const handleMouseMove = (e) => {
            if (!isHovered) return;
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
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
        card.addEventListener('mousemove', handleMouseMove);

        return () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
            card.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="skill-category" ref={cardRef}>
            <div className="skill-text">
                <h3><i className={`fas ${icon}`}></i> {title}</h3>
                <p className="skill-list">{list}</p>
            </div>
            <div className="skill-items" ref={containerRef}>
                {skills.map((skill, index) => (
                    <span key={index} className="tag">
                        <i className={skill.iconClass}></i> {skill.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "Languages",
            icon: "fa-code",
            list: "Java • Python • C",
            skills: [
                { name: "Java", iconClass: "fab fa-java" },
                { name: "Python", iconClass: "fab fa-python" },
                { name: "C", iconClass: "fas fa-terminal" }
            ]
        },
        {
            title: "Web Tech",
            icon: "fa-laptop-code",
            list: "HTML5 • CSS3 • JS • React • Node",
            skills: [
                { name: "HTML5", iconClass: "fab fa-html5" },
                { name: "CSS3", iconClass: "fab fa-css3-alt" },
                { name: "JavaScript", iconClass: "fab fa-js" },
                { name: "React.js", iconClass: "fab fa-react" },
                { name: "Node.js", iconClass: "fab fa-node-js" }
            ]
        },
        {
            title: "Databases",
            icon: "fa-database",
            list: "MySQL • SQL",
            skills: [
                { name: "MySQL", iconClass: "fas fa-database" },
                { name: "SQL", iconClass: "fas fa-server" }
            ]
        },
        {
            title: "Tools & Ops",
            icon: "fa-tools",
            list: "Git • VS Code • Colab • PyCharm • Cloud • SEO",
            skills: [
                { name: "Git", iconClass: "fab fa-git-alt" },
                { name: "VS Code", iconClass: "fas fa-code-branch" },
                { name: "Google Colab", iconClass: "fab fa-google" },
                { name: "PyCharm", iconClass: "fas fa-laptop-code" },
                { name: "Cloud Ops", iconClass: "fas fa-cloud" },
                { name: "SEO", iconClass: "fas fa-search-dollar" }
            ]
        }
    ];

    return (
        <section id="skills" className="reveal active" style={{ background: 'transparent' }}>
            <div className="heading">
                <h2>Technical <span>Skills</span></h2>
            </div>
            <div className="skills-container">
                {categories.map((cat, idx) => (
                    <SkillCategory key={idx} {...cat} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
