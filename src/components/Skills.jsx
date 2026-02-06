
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Chip, useTheme, Card, CardContent } from '@mui/material';

const SkillSphere = ({ allSkills }) => {
    const containerRef = useRef(null);
    const theme = useTheme();
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

        const count = tags.length;
        tags.forEach((tag, i) => {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            tag.dataset.phi = phi;
            tag.dataset.theta = theta;
        });

        let frameCount = 0;
        const render = () => {
            frameCount++;
            if (frameCount % 2 !== 0) { // Render every 2 frames to reduce CPU/GPU load
                requestID = requestAnimationFrame(render);
                return;
            }

            if (!isDragging.current) {
                currentRotation.current.x += autoRotation.current.x;
                currentRotation.current.y += autoRotation.current.y;
            }

            const rotX = currentRotation.current.x;
            const rotY = currentRotation.current.y;

            tags.forEach(tag => {
                const phi = parseFloat(tag.dataset.phi);
                const theta = parseFloat(tag.dataset.theta);

                let x = radius.current * Math.sin(phi) * Math.cos(theta);
                let y = radius.current * Math.sin(phi) * Math.sin(theta);
                let z = radius.current * Math.cos(phi);

                const y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
                const z1 = y * Math.sin(rotX) + z * Math.cos(rotX);

                const x2 = x * Math.cos(rotY) + z1 * Math.sin(rotY);
                const z2 = -x * Math.sin(rotY) + z1 * Math.cos(rotY);

                const scale = (z2 + radius.current * 2) / (radius.current * 2);
                const alpha = (z2 + radius.current) / (radius.current * 2) + 0.2;

                tag.style.transform = `translate3d(${x2}px, ${y1}px, ${z2}px) scale(${scale})`;
                tag.style.opacity = Math.min(Math.max(alpha, 0.2), 1);
            });

            requestID = requestAnimationFrame(render);
        };

        const handleMouseDown = (e) => {
            isDragging.current = true;
            lastMousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleTouchStart = (e) => {
            isDragging.current = true;
            lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        };

        const handleMouseMove = (e) => {
            if (!isDragging.current) return;
            const dx = e.clientX - lastMousePos.current.x;
            const dy = e.clientY - lastMousePos.current.y;
            currentRotation.current.y += dx * 0.005;
            currentRotation.current.x -= dy * 0.005;
            lastMousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleTouchMove = (e) => {
            if (!isDragging.current) return;
            const dx = e.touches[0].clientX - lastMousePos.current.x;
            const dy = e.touches[0].clientY - lastMousePos.current.y;
            currentRotation.current.y += dx * 0.005;
            currentRotation.current.x -= dy * 0.005;
            lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        };

        const handleDragEnd = () => isDragging.current = false;

        container.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleDragEnd);

        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleDragEnd);

        render();

        return () => {
            cancelAnimationFrame(requestID);
            window.removeEventListener('resize', updateRadius);
            container.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleDragEnd);
            container.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleDragEnd);
        };
    }, [allSkills]);

    return (
        <Box
            className="tag-cloud-container"
            ref={containerRef}
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                perspective: '1000px',
                cursor: 'grab',
                touchAction: 'none', // Prevent page scroll while dragging sphere
                '&:active': { cursor: 'grabbing' }
            }}
        >
            {allSkills.map((skill, index) => (
                <Box
                    key={index}
                    className="tag-cloud-item"
                    sx={{
                        position: 'absolute',
                        padding: '8px 16px',
                        borderRadius: '50px',
                        background: 'var(--card-bg)',
                        border: `1px solid ${skill.color}`,
                        color: 'var(--text-main)',
                        whiteSpace: 'nowrap',
                        fontSize: { xs: '0.75rem', md: '0.9rem' },
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 12px var(--shadow-color)'
                    }}
                >
                    <i className={skill.iconClass} style={{ color: skill.color }}></i>
                    {skill.name}
                </Box>
            ))}
        </Box>
    );
};

const Skills = () => {
    const theme = useTheme();
    const categories = [
        {
            title: "Languages", color: "#4D96FF", skills: [
                { name: "Python(Pandas, NumPy, Scikit-learn)", iconClass: "fab fa-python" },
                { name: "C", iconClass: "fas fa-terminal" }
            ]
        },
        {
            title: "Visualization Tools", color: "#4D96FF", skills: [
                { name: "Power Bi", iconClass: "fab fa-Power Bi" },
                { name: "Excel (Pivot Tables, Charts)", iconClass: "fab fa-excel" },
                { name: "Matplotlib / Seaborn", iconClass: "fab fa-Matplotlib / Seaborn" },
            ]
        },
        {
            title: "Backend / Databases", color: "#4D96FF", skills: [
                { name: "MySQL", iconClass: "fas fa-database" },
                { name: "SQL", iconClass: "fas fa-server" },
                { name: "Flask, RESTful API", iconClass: "fas fa-API" },
            ]
        },
        {
            title: "Web Tech", color: "#4D96FF", skills: [
                { name: "HTML5", iconClass: "fab fa-html5" },
                { name: "CSS3", iconClass: "fab fa-css3-alt" },
                { name: "JavaScript", iconClass: "fab fa-js" },
                { name: "React.js", iconClass: "fab fa-react" },
            ]
        },
        {
            title: "Tools & Ops", color: "#4D96FF", skills: [
                { name: "Git", iconClass: "fab fa-git-alt" },
                { name: "VS Code", iconClass: "fas fa-code-branch" },
                { name: "Colab", iconClass: "fab fa-google" },
                { name: "Cloud", iconClass: "fas fa-cloud" },
                { name: "SEO", iconClass: "fas fa-search-dollar" }
            ]
        }
    ];

    const skillColors = [
        "#FF6B6B", "#4D96FF", "#FFD93D", "#6BCB77", "#4BC0C0",
        "#FF9F40", "#9966FF", "#FF6384", "#00D2FC", "#F869D5",
        "#63E6BE", "#fab005", "#748ffc", "#e599f7"
    ];

    const allSkillsFlat = [];
    let colorIndex = 0;
    categories.forEach(cat => {
        cat.skills.forEach(s => {
            allSkillsFlat.push({
                ...s,
                color: skillColors[colorIndex % skillColors.length]
            });
            colorIndex++;
        });
    });

    return (
        <Box component="section" id="skills" sx={{ py: { xs: 10, md: 15 }, overflow: 'hidden' }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 8, md: 10 }} alignItems="center">
                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 4, fontSize: { xs: '0.75rem', md: '0.85rem' } }}>
                                Expertise
                            </Typography>
                            <Typography variant="h2" sx={{
                                fontWeight: 900,
                                mb: 3,
                                fontSize: { xs: '2.8rem', md: '3.5rem' },
                                letterSpacing: -1
                            }}>
                                Tech <Box component="span" sx={{ color: 'primary.main' }}>Stack</Box>
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{
                                mb: 5,
                                lineHeight: 1.8,
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                fontWeight: 400
                            }}>
                                My toolkit for building modern applications, ranging from frontend design to backend intelligence.
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                {categories.map((cat, idx) => (
                                    <Box key={idx}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            mb: 2,
                                            position: 'relative'
                                        }}>
                                            <Box sx={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: `${cat.color}15`,
                                                color: cat.color,
                                                fontSize: '1.2rem',
                                                border: `1px solid ${cat.color}30`
                                            }}>
                                                <i className={
                                                    cat.title === "Languages" ? "fas fa-code" :
                                                        cat.title === "Visualization Tools" ? "fas fa-chart-line" :
                                                            cat.title === "Backend / Databases" ? "fas fa-server" :
                                                                cat.title === "Web Tech" ? "fas fa-globe" :
                                                                    cat.title === "Tools & Ops" ? "fas fa-tools" : "fas fa-layer-group"
                                                }></i>
                                            </Box>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: 'text.primary',
                                                    fontSize: '1rem',
                                                    letterSpacing: 1
                                                }}
                                            >
                                                {cat.title}
                                            </Typography>
                                        </Box>

                                        <Box sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 1.5
                                        }}>
                                            {cat.skills.map(skill => (
                                                <Box
                                                    key={skill.name}
                                                    component={motion.div}
                                                    whileHover={{ y: -3, scale: 1.05 }}
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1.2,
                                                        px: 2,
                                                        py: 1,
                                                        borderRadius: '12px',
                                                        backgroundColor: 'rgba(99, 102, 241, 0.05)',
                                                        border: '1px solid',
                                                        borderColor: 'rgba(99, 102, 241, 0.15)',
                                                        backdropFilter: 'blur(8px)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(99, 102, 241, 0.15)',
                                                            borderColor: '#6366f1'
                                                        }
                                                    }}
                                                >
                                                    <i className={skill.iconClass} style={{ fontSize: '1rem', color: '#6366f1' }}></i>
                                                    <Typography
                                                        sx={{
                                                            fontSize: '0.85rem',
                                                            fontWeight: 600,
                                                            color: 'text.secondary',
                                                            whiteSpace: 'nowrap'
                                                        }}
                                                    >
                                                        {skill.name}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Box sx={{
                            height: { xs: '400px', sm: '500px', md: '700px' },
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            zIndex: 1,
                            mt: { xs: 4, md: 0 },
                            transform: { md: 'translateX(60px)' }
                        }}>
                            <SkillSphere allSkills={allSkillsFlat} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
