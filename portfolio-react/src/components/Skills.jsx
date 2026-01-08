
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SkillSphere = ({ allSkills }) => {
    const containerRef = useRef(null);
    const currentRotation = useRef({ x: 0, y: 0 });
    const autoRotation = useRef({ x: 0.003, y: 0.005 });
    const isDragging = useRef(false);
    const lastMousePos = useRef({ x: 0, y: 0 });
    const radius = useRef(250);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateRadius = () => {
            radius.current = window.innerWidth < 768 ? 160 : 250;
        };
        updateRadius();
        window.addEventListener('resize', updateRadius);

        const tags = Array.from(container.querySelectorAll('.tag-cloud-item'));
        let requestID;

        // Distribute tags spherically
        const count = tags.length;
        tags.forEach((tag, i) => {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            tag.dataset.phi = phi;
            tag.dataset.theta = theta;
        });

        const render = () => {
            if (!isDragging.current) {
                currentRotation.current.x += autoRotation.current.x;
                currentRotation.current.y += autoRotation.current.y;
            }

            const rotX = currentRotation.current.x;
            const rotY = currentRotation.current.y;

            tags.forEach(tag => {
                const phi = parseFloat(tag.dataset.phi);
                const theta = parseFloat(tag.dataset.theta);

                // Initial position
                let x = radius.current * Math.sin(phi) * Math.cos(theta);
                let y = radius.current * Math.sin(phi) * Math.sin(theta);
                let z = radius.current * Math.cos(phi);

                // Rotation around X axis
                const y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
                const z1 = y * Math.sin(rotX) + z * Math.cos(rotX);

                // Rotation around Y axis
                const x2 = x * Math.cos(rotY) + z1 * Math.sin(rotY);
                const z2 = -x * Math.sin(rotY) + z1 * Math.cos(rotY);

                // Perspective
                const scale = (z2 + radius.current * 2) / (radius.current * 2);
                const alpha = (z2 + radius.current) / (radius.current * 2) + 0.2;

                tag.style.transform = `translate3d(${x2}px, ${y1}px, ${z2}px) scale(${scale})`;
                tag.style.opacity = Math.min(Math.max(alpha, 0.2), 1);
                tag.style.zIndex = Math.floor(scale * 100);
            });

            requestID = requestAnimationFrame(render);
        };

        const handleMouseDown = (e) => {
            isDragging.current = true;
            lastMousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseMove = (e) => {
            if (!isDragging.current) return;
            const dx = e.clientX - lastMousePos.current.x;
            const dy = e.clientY - lastMousePos.current.y;
            currentRotation.current.y += dx * 0.005;
            currentRotation.current.x -= dy * 0.005;
            lastMousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseUp = () => isDragging.current = false;

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        render();

        return () => {
            cancelAnimationFrame(requestID);
            window.removeEventListener('resize', updateRadius);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [allSkills]);

    return (
        <div
            className="tag-cloud-container"
            ref={containerRef}
            style={{
                height: window.innerWidth < 768 ? '400px' : '600px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                perspective: '1000px',
                cursor: 'grab'
            }}
        >
            {allSkills.map((skill, index) => (
                <span
                    key={index}
                    className="tag-cloud-item"
                    style={{
                        position: 'absolute',
                        padding: '8px 16px',
                        borderRadius: '50px',
                        background: 'rgba(255,255,255,0.03)',
                        border: `1px solid ${skill.color}`,
                        color: '#fff',
                        whiteSpace: 'nowrap',
                        fontSize: window.innerWidth < 768 ? '0.75rem' : '0.9rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    <i className={skill.iconClass} style={{ color: skill.color }}></i>
                    {skill.name}
                </span>
            ))}
        </div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "Languages", color: "#FF6B6B", skills: [
                { name: "Java", iconClass: "fab fa-java" },
                { name: "Python", iconClass: "fab fa-python" },
                { name: "C", iconClass: "fas fa-terminal" }
            ]
        },
        {
            title: "Web Tech", color: "#4facfe", skills: [
                { name: "HTML5", iconClass: "fab fa-html5" },
                { name: "CSS3", iconClass: "fab fa-css3-alt" },
                { name: "JavaScript", iconClass: "fab fa-js" },
                { name: "React.js", iconClass: "fab fa-react" },
                { name: "Node.js", iconClass: "fab fa-node-js" }
            ]
        },
        {
            title: "Databases", color: "#f093fb", skills: [
                { name: "MySQL", iconClass: "fas fa-database" },
                { name: "SQL", iconClass: "fas fa-server" }
            ]
        },
        {
            title: "Tools & Ops", color: "#FFD93D", skills: [
                { name: "Git", iconClass: "fab fa-git-alt" },
                { name: "VS Code", iconClass: "fas fa-code-branch" },
                { name: "Colab", iconClass: "fab fa-google" },
                { name: "PyCharm", iconClass: "fas fa-laptop-code" },
                { name: "Cloud", iconClass: "fas fa-cloud" },
                { name: "SEO", iconClass: "fas fa-search-dollar" }
            ]
        }
    ];

    const allSkillsFlat = [];
    categories.forEach((cat, idx) => {
        cat.skills.forEach(s => allSkillsFlat.push({ ...s, color: cat.color }));
    });

    return (
        <section id="skills" className="skills-section" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div
                className="heading"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{ textAlign: 'center' }}>Technical <span>Orbit</span></h2>
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem', fontStyle: 'italic' }}>
                    Drag the sphere to explore my technology universe
                </p>
            </motion.div>

            <SkillSphere allSkills={allSkillsFlat} />

            <div className="skills-legend" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem', padding: '0 1rem' }}>
                {categories.map((cat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: cat.color }}></div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{cat.title}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
