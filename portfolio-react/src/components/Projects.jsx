
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    // Professional Project Data
    const projects = useMemo(() => [
        {
            id: "01",
            title: "ToneIQ",
            subtitle: "Advanced AI Sentiment Analysis",
            category: "Artificial Intelligence",
            tech: ["React 19", "Flask", "RoBERTa", "NLP"],
            desc: "A powerful sentiment engine that decodes complex human emotions with 98% accuracy. Features real-time sarcasm detection and aspect-based analysis.",
            img: "/images/toneiq.png",
            link: "https://toneiq.vercel.app/",
            size: "large", // For Bento Grid
            accent: "#4D96FF"
        },
        {
            id: "02",
            title: "CafeBliss",
            subtitle: "E-commerce Experience",
            category: "Web App",
            tech: ["React", "Framer", "CSS3"],
            desc: "Premium coffee shop interface focusing on visual storytelling and ultra-smooth animations.",
            img: "/images/coffee.png",
            link: "https://cafebliss-six.vercel.app/",
            size: "small",
            accent: "#FFD93D"
        },
        {
            id: "03",
            title: "Symmetry",
            subtitle: "Business Workflow",
            tech: ["JS", "Firebase"],
            desc: "Minimalist management studio for professional service providers.",
            img: "/images/salon.png",
            link: "https://parlourcafe.vercel.app/",
            size: "small",
            accent: "#FF6B6B"
        }
    ], []);

    return (
        <section id="projects" className="bento-projects-section">
            <div className="bento-container">
                <div className="bento-header">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="bento-tag">Work & Innovation</span>
                        <h2 className="bento-title">Selected <span>Showcase</span></h2>
                    </motion.div>
                </div>

                <div className="bento-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`bento-card ${project.size}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="bento-card-inner">
                                <div className="bento-image-layer">
                                    <img src={project.img} alt={project.title} />
                                    <div className="bento-overlay"></div>
                                </div>

                                <div className="bento-info">
                                    <div className="bento-top">
                                        <div className="bento-label">
                                            <span className="dot" style={{ background: project.accent }}></span>
                                            {project.id} / PROJECT
                                        </div>
                                        <div className="bento-tech-compact">
                                            {project.tech.slice(0, 2).map((t, i) => (
                                                <span key={i}>{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bento-mid">
                                        <h3>{project.title}</h3>
                                        {project.size === 'large' && <p>{project.desc}</p>}
                                    </div>

                                    <div className="bento-bottom">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="bento-link">
                                            <span className="link-text">Explore</span>
                                            <div className="bento-mini-icon">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
