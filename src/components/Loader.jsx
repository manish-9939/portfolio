
import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                flexDirection: 'column',
                background: 'var(--loader-bg, #09090b)', // Dynamic background
            }}
        >
            <style>
                {`
                :root { --loader-bg: #ffffff; --loader-text: #1a1a1a; }
                [data-theme='light'] :root { --loader-bg: #ffffff; --loader-text: #1a1a1a; }
                `}
            </style>
            <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                {/* Optimized Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '3px solid rgba(77, 150, 255, 0.1)',
                        borderTop: '3px solid #4facfe',
                        borderRadius: '50%',
                        position: 'absolute',
                    }}
                />

                {/* Glowing Pulse Background */}
                <motion.div
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        inset: '10%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
                        filter: 'blur(15px)',
                    }}
                />

                {/* The Rocket */}
                <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    exit={{
                        y: -1000,
                        opacity: 0,
                        scale: 1.2,
                        transition: { duration: 0.35, ease: "easeIn" }
                    }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <i className="fas fa-rocket" style={{
                        fontSize: '3rem',
                        color: '#a855f7', // Fallback color
                        background: 'linear-gradient(135deg, #a855f7 0%, #FF6B6B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        transform: 'rotate(-45deg)',
                        filter: 'drop-shadow(0 5px 15px rgba(168, 85, 247, 0.4))'
                    }}></i>
                </motion.div>
            </div>

            <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    marginTop: '25px',
                    letterSpacing: '5px',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    fontFamily: 'Outfit, sans-serif',
                    color: 'var(--loader-text, #fff)'
                }}
            >
                Loading
            </motion.div>
        </motion.div>
    );
};
export default Loader;
