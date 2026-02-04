
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            id: "01",
            title: "ToneIQ - AI Sentiment Engine",
            category: "AI/ML Product",
            tech: ["React 19", "Flask", "RoBERTa", "NLP"],
            desc: "A sophisticated Sentiment Analysis platform bridging text and human emotion. Features Dual RoBERTa Transformers for sarcasm detection and ABSA for granular insights.",
            img: "/images/toneiq.png",
            link: "https://toneiq.vercel.app/",
            color: "#4D96FF"
        },
        {
            id: "02",
            title: "Coffee Shop",
            category: "Premium UI",
            tech: ["React.js", "Framer Motion", "CSS"],
            desc: "A modern coffee shop website with elegant animations and responsive design. Focused on premium aesthetics and smooth user experience.",
            img: "/images/coffee.png",
            link: "https://cafebliss-six.vercel.app/",
            color: "#FFD93D"
        },
        {
            id: "03",
            title: "Business Website",
            category: "Startup",
            tech: ["React.js", "JavaScript", "CSS"],
            desc: "Designed and developed a responsive business website for salon management. Implemented user-friendly UI and improved workflow efficiency.",
            img: "/images/salon.png",
            link: "https://parlourcafe.vercel.app/",
            color: "#FF6B6B"
        }
    ];

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Adjust the x transform based on the number of projects
    // We want to move from 0 to - (100 * (projects.length - 1)) % roughly
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

    return (
        <section ref={targetRef} id="projects" className="projects-section-horizontal">
            <div className="sticky-wrapper">
                <div className="horizontal-scroll-content">
                    <motion.div
                        className="heading-side"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-subtitle">Selected Work</span>
                        <h2 className="glitch-text" data-text="PREMIUM">PREMIUM<br /><span>CREATIONS</span></h2>
                        <div className="scroll-info">
                            <div className="progress-container">
                                <motion.div
                                    className="progress-bar-fill"
                                    style={{ scaleX: scrollYProgress }}
                                />
                            </div>
                            <span className="scroll-text">Scroll to explore</span>
                        </div>
                    </motion.div>

                    <motion.div style={{ x }} className="projects-slider">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="project-slide"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="project-card-premium">
                                    <div className="project-card-visual">
                                        <div className="project-number-float">{project.id}</div>
                                        <div className="image-reveal-wrapper">
                                            <img src={project.img} alt={project.title} className="parallax-img" />
                                            <div className="image-overlay-premium" style={{ background: `linear-gradient(225deg, ${project.color}33, transparent)` }}></div>
                                        </div>
                                        <div className="category-tag-premium" style={{ background: project.color }}>
                                            {project.category}
                                        </div>
                                    </div>

                                    <div className="project-card-details">
                                        <div className="tech-stack-new">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="tech-badge">{t}</span>
                                            ))}
                                        </div>
                                        <h3>{project.title}</h3>
                                        <p>{project.desc}</p>
                                        <div className="project-link-wrapper">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="premium-link">
                                                <span>Live Demo</span>
                                                <div className="link-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
