
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="reveal active">
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
                    <h3>Driven by <span style={{ color: 'var(--secondary)' }}>Innovation</span> & Code</h3>
                    <p>
                        A highly motivated MCA (AI & Data Science) student seeking an entry-level position in the IT
                        industry.
                        I aim to apply my programming knowledge, problem-solving skills, and passion for technology to
                        develop
                        efficient software solutions and contribute to real-world projects.
                    </p>
                    <div className="info-list" style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
                        <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div className="icon-box"
                                style={{ width: '40px', height: '40px', background: 'rgba(139, 92, 246, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <span>Nawada, Bihar, India - 805107</span>
                        </div>
                        <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div className="icon-box"
                                style={{ width: '40px', height: '40px', background: 'rgba(217, 70, 239, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <span>manishmahi505@gmail.com</span>
                        </div>
                        <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div className="icon-box"
                                style={{ width: '40px', height: '40px', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
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
                    {/* Education Timeline styled as cards */}
                    <div className="edu-card"
                        style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '15px', borderLeft: '3px solid var(--primary)', marginBottom: '1.5rem' }}>
                        <span
                            style={{ background: 'rgba(217, 70, 239, 0.1)', color: 'var(--primary)', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>2024
                            - 2026 (Pursuing)</span>
                        <h4 style={{ margin: '10px 0 5px', fontSize: '1.1rem' }}>MCA (AI & Data Science)</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Vivekananda Global University, Jaipur</p>
                    </div>

                    <div className="edu-card"
                        style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '15px', borderLeft: '3px solid var(--secondary)' }}>
                        <span
                            style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--secondary)', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>2019
                            - 2023</span>
                        <h4 style={{ margin: '10px 0 5px', fontSize: '1.1rem' }}>BCA (Bachelor of Computer Applications)</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Magadh University, Bodh Gaya</p>
                        <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginTop: '5px' }}>Percentage: 75.5%</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
