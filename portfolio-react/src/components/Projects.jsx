
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
                    <div className="project-img-overlay"
                        style={{ height: '150px', background: 'linear-gradient(to bottom, var(--primary), var(--bg-color))', opacity: 0.2 }}>
                    </div>
                    <div className="project-info">
                        <h3>Business Website</h3>
                        <p className="project-tech">HTML, CSS, JavaScript, React.js</p>
                        <p className="project-desc">
                            Designed and developed a responsive business website for salon and coffee shop management.
                            Implemented user-friendly UI and improved workflow efficiency.
                        </p>
                        <a href="#" className="btn-link">View Details <i className="fas fa-arrow-right"></i></a>
                    </div>
                </motion.div>

                <motion.div className="project-card" variants={item} whileHover={{ y: -15 }}>
                    <div className="project-img-overlay"
                        style={{ height: '150px', background: 'linear-gradient(to bottom, var(--secondary), var(--bg-color))', opacity: 0.2 }}>
                    </div>
                    <div className="project-info">
                        <h3>Number Guessing Game</h3>
                        <p className="project-tech">C Language • Logic</p>
                        <p className="project-desc">
                            A classic interactive console game optimizing binary search logic concepts.
                            Users guess a randomly generated number with dynamic hint feedback.
                        </p>
                        <a href="#" className="btn-link">View Details <i className="fas fa-arrow-right"></i></a>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Projects;
