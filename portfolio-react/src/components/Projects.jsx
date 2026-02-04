
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            id: "01",
            title: "Business Website",
            category: "Startup",
            tech: ["React.js", "JavaScript", "CSS"],
            desc: "Designed and developed a responsive business website for salon management. Implemented user-friendly UI and improved workflow efficiency.",
            img: "/images/salon.png",
            link: "https://parlourcafe.vercel.app/",
            color: "var(--primary)"
        },
        {
            id: "02",
            title: "Coffee Shop",
            category: "Premium UI",
            tech: ["React.js", "Framer Motion", "CSS"],
            desc: "A modern coffee shop website with elegant animations and responsive design. Focused on premium aesthetics and smooth user experience.",
            img: "/images/coffee.png",
            link: "https://cafebliss-six.vercel.app/",
            color: "var(--accent)"
        },
        {
            id: "03",
            title: "ToneIQ - AI Sentiment Engine",
            category: "AI/ML Product",
            tech: ["React 19", "Flask", "RoBERTa", "NLP"],
            desc: "A sophisticated Sentiment Analysis platform bridging text and human emotion. Features Dual RoBERTa Transformers for sarcasm detection and ABSA for granular insights.",
            img: "/images/toneiq.png",
            link: "https://toneiq.vercel.app/",
            color: "var(--secondary)"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section id="projects" className="projects-section">
            <motion.div
                className="heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="section-subtitle">My Work</span>
                <h2>Startups & <span>Projects</span></h2>
            </motion.div>

            <motion.div
                className="projects-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card-new"
                        variants={item}
                        whileHover={{ y: -10 }}
                    >
                        <div className="project-number">{project.id}</div>
                        <div className="project-img-wrapper">
                            <img src={project.img} alt={project.title} className="project-img-new" />
                            <div className="project-overlay" style={{ '--project-color': project.color }}>
                                <div className="category-badge">{project.category}</div>
                            </div>
                        </div>

                        <div className="project-content-new">
                            <motion.div
                                className="tech-stack"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={{
                                    show: {
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                            >
                                {project.tech.map((t, i) => (
                                    <motion.span
                                        key={i}
                                        className="tech-tag"
                                        variants={{
                                            hidden: { opacity: 0, x: -10 },
                                            show: { opacity: 1, x: 0 }
                                        }}
                                    >
                                        {t}
                                    </motion.span>
                                ))}
                            </motion.div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="project-footer">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                    View Project
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
