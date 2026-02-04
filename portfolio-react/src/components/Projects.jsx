
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            id: "01",
            title: "ToneIQ - AI Sentiment Engine",
            category: "Artificial Intelligence",
            tech: ["React 19", "Python", "RoBERTa", "NLU"],
            desc: "An enterprise-grade sentiment analysis engine with sarcasm detection and aspect-based insights. Bridging the gap between raw text and human emotion.",
            img: "/images/toneiq.png",
            link: "https://toneiq.vercel.app/",
            color: "#4D96FF"
        },
        {
            id: "02",
            title: "CafeBliss - Premium Experience",
            category: "E-Commerce",
            tech: ["React", "Framer Motion", "GSAP"],
            desc: "A luxury coffee shop experience featuring immersive animations, fluid transitions, and a seamless reservation system.",
            img: "/images/coffee.png",
            link: "https://cafebliss-six.vercel.app/",
            color: "#FFD93D"
        },
        {
            id: "03",
            title: "Symmetry - Business Studio",
            category: "Startup Solutions",
            tech: ["JavaScript", "Tailwind", "Firebase"],
            desc: "Custom management dashboard for salons and wellness centers, focusing on workflow optimization and customer engagement.",
            img: "/images/salon.png",
            link: "https://parlourcafe.vercel.app/",
            color: "#FF6B6B"
        }
    ];

    return (
        <section id="projects" className="projects-pro-section">
            <div className="section-header">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="pro-subtitle">Architecture & Design</span>
                    <h2 className="pro-title">Selected <span>Work</span></h2>
                </motion.div>
                <div className="pro-scroll-hint">
                    <span>Swipe to explore</span>
                    <div className="swipe-line"></div>
                </div>
            </div>

            <div className="pro-projects-container">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="pro-card"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="pro-card-image">
                            <img src={project.img} alt={project.title} />
                            <div className="pro-card-overlay" style={{ background: `linear-gradient(to top, #000, transparent)` }}>
                                <div className="pro-card-category">{project.category}</div>
                            </div>
                        </div>
                        <div className="pro-card-content">
                            <div className="pro-tech-list">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="pro-tech-tag">{t}</span>
                                ))}
                            </div>
                            <h3 className="pro-card-title">{project.title}</h3>
                            <p className="pro-card-desc">{project.desc}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="pro-view-btn">
                                View Project
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className="pro-card-number">{project.id}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
