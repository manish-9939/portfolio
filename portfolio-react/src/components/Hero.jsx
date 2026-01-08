
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="hero-subtitle">Hello, I'm</span>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Manish <span className="gradient-text">Kumar</span>
                </motion.h1>

                <h3 className="hero-role">
                    <span style={{ marginRight: '8px' }}>I am a</span>
                    <span style={{ color: 'var(--primary)', fontWeight: 400, fontStyle: 'italic' }}>
                        <TypeAnimation
                            sequence={[
                                'Creative Developer',
                                2000,
                                'Problem Solver',
                                2000,
                                'AI Enthusiast',
                                2000,
                                'Tech Explorer',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </span>
                </h3>

                <motion.p
                    style={{ marginBottom: '2.5rem', color: 'var(--text-muted)', maxWidth: '500px', fontSize: '1.1rem' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    Passionate about building scalable web applications and exploring Artificial Intelligence.
                    Creating digital experiences that matter.
                </motion.p>

                <motion.div
                    className="btn-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <a href="#contact" className="btn btn-primary">Let's Talk <i className="fas fa-arrow-right"></i></a>
                    <a href="/M.Resume.pdf" download className="btn btn-outline">Download CV</a>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 1, type: "spring" }}
            >
                <div className="hero-blob"></div>
                <div className="hero-img-container" style={{ position: 'relative', width: '350px', height: '350px', zIndex: 2, borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)' }}>
                    <motion.img
                        src="/img.jpeg"
                        alt="Manish Kumar"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', filter: 'grayscale(10%) contrast(1.1)' }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
