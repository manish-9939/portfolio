
import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#0a0a0a',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                flexDirection: 'column',
            }}
        >
            <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                {/* Animated Outer Ring */}
                <motion.div
                    animate={{
                        rotate: 360,
                        borderRadius: ["25%", "50%", "25%"],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '4px solid transparent',
                        borderTopColor: '#00f2fe',
                        borderBottomColor: '#4facfe',
                        position: 'absolute',
                    }}
                />

                {/* Animated Inner Ring */}
                <motion.div
                    animate={{
                        rotate: -360,
                        borderRadius: ["50%", "25%", "50%"],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        width: '70%',
                        height: '70%',
                        border: '4px solid transparent',
                        borderLeftColor: '#f093fb',
                        borderRightColor: '#f5576c',
                        position: 'absolute',
                        top: '15%',
                        left: '15%',
                    }}
                />

                {/* Logo Text in Center */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        fontFamily: 'Outfit, sans-serif'
                    }}
                >
                    MK
                </motion.div>

            </div>

            <motion.div
                animate={{
                    opacity: [0.3, 1, 0.3],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    marginTop: '20px',
                    color: '#fff',
                    letterSpacing: '4px',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    fontWeight: '300'
                }}
            >
                Loading Mastery
            </motion.div>
        </motion.div>
    );
};

export default Loader;
