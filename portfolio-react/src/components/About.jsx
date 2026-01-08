
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.div
                className="heading"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>About <span>Me</span></h2>
            </motion.div>

            <div className="about-container">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3>Driven by <span>Innovation</span> & Code</h3>
                    <p>
                        A highly motivated MCA (AI & Data Science) student seeking an entry-level position in the IT
                        industry.
                        I aim to apply my programming knowledge, problem-solving skills, and passion for technology to
                        develop
                        efficient software solutions and contribute to real-world projects.
                    </p>
                    <div className="info-list">
                        <div className="info-item">
                            <div className="icon-box location">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <span>Nawada, Bihar, India - 805107</span>
                        </div>
                        <div className="info-item">
                            <div className="icon-box email">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <span>manishmahi505@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <div className="icon-box phone">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <span>+91 9939863412</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="education-preview"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="edu-card primary-theme">
                        <span className="edu-tag">2024 - 2026 (Pursuing)</span>
                        <h4>MCA (AI & Data Science)</h4>
                        <p className="school">Vivekananda Global University, Jaipur</p>
                    </div>

                    <div className="edu-card secondary-theme">
                        <span className="edu-tag">2019 - 2023</span>
                        <h4>BCA (Bachelor of Computer Applications)</h4>
                        <p className="school">Magadh University, Bodh Gaya</p>
                        <p className="score">Percentage: 75.5%</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

