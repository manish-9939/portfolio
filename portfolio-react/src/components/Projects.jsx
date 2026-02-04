
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
    };

    return (
        <section id="projects" className="reveal active">
            <motion.div
                className="heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Startups & <span>Projects</span></h2>
            </motion.div>

            <motion.div
                className="projects-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >

                <motion.div className="project-card" variants={item} whileHover={{ y: -15 }}>
                    <div className="project-img-container">
                        <img src="/images/salon.png" alt="Business Website" className="project-img" />
                        <div className="project-img-overlay"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, var(--primary), transparent)', opacity: 0.2 }}>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Business Website</h3>
                        <p className="project-tech">HTML, CSS, JavaScript, React.js</p>
                        <p className="project-desc">
                            Designed and developed a responsive business website for salon management.
                            Implemented user-friendly UI and improved workflow efficiency.
                        </p>
                        <a href="https://parlourcafe.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-link">Live Preview <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </motion.div>

                <motion.div className="project-card" variants={item} whileHover={{ y: -15 }}>
                    <div className="project-img-container">
                        <img src="/images/coffee.png" alt="Coffee Shop" className="project-img" />
                        <div className="project-img-overlay"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, var(--accent), transparent)', opacity: 0.2 }}>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Coffee Shop</h3>
                        <p className="project-tech">React.js, Framer Motion, CSS</p>
                        <p className="project-desc">
                            A modern coffee shop website with elegant animations and responsive design.
                            Focused on premium aesthetics and smooth user experience.
                        </p>
                        <a href="https://cafebliss-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-link">Live Preview <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </motion.div>

                <motion.div className="project-card" variants={item} whileHover={{ y: -15 }}>
                    <div className="project-img-container">
                        <img src="/images/toneiq.png" alt="ToneIQ Sentiment Analysis" className="project-img" />
                        <div className="project-img-overlay"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, var(--secondary), transparent)', opacity: 0.2 }}>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>ToneIQ - AI Sentiment Engine</h3>
                        <p className="project-tech"><b>Frontend:</b> React 19, MUI v7 | <b>Backend:</b> Flask, RoBERTa (DL), ML, NLP</p>
                        <p className="project-desc">
                            A sophisticated Sentiment Analysis platform bridging text and human emotion. Built with React-Flask, it features Dual RoBERTa Transformers for sarcasm detection, Hinglish optimization, and ABSA for granular insights.
                        </p>
                        <a href="https://toneiq.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-link">Live Preview <i className="fas fa-external-link-alt"></i></a>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Projects;
