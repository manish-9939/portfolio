
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <>
            <section id="resume-download" className="reveal active">
                <motion.div
                    className="resume-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        padding: '4rem',
                        borderRadius: '30px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        maxWidth: '900px',
                        margin: '0 auto',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Ready to Collaborate?</h2>
                    <p
                        style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                        I am eager to learn new technologies and grow professionally. Download my resume to connect.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/M.Resume.pdf"
                            download
                            className="btn btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '50px', cursor: 'pointer' }}>
                            <i className="fas fa-download"></i> Download Resume
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.linkedin.com/in/manish-kumar-b83437279"
                            target="_blank"
                            className="btn btn-outline"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '50px', cursor: 'pointer' }}>
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </motion.a>
                    </div>
                </motion.div>
            </section>

            <section id="contact" className="reveal active">
                <div className="heading">
                    <h2>Get In <span>Touch</span></h2>
                </div>
                <div className="contact-container">
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        I am available for internships and full-time opportunities. Feel free to reach out!
                    </p>
                    <div className="contact-info">
                        {[
                            { href: "mailto:manishmahi505@gmail.com", icon: "fas fa-envelope", text: "manishmahi505@gmail.com" },
                            { href: "tel:+919939863412", icon: "fas fa-phone-alt", text: "+91 9939863412" },
                            { href: "https://www.linkedin.com/in/manish-kumar-b83437279", icon: "fab fa-linkedin-in", text: "LinkedIn Profile" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="contact-item"
                                whileHover={{ scale: 1.02, x: 10, borderColor: 'var(--primary)' }}
                                target={item.href.startsWith('http') ? "_blank" : "_self"}
                            >
                                <i className={item.icon}></i>
                                <span>{item.text}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
