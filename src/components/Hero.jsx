
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Box, Typography, Button, Avatar, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            id="home"
            sx={{
                minHeight: { xs: 'auto', md: '100vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 3, sm: 6, md: '5%' },
                py: { xs: 12, md: 0 },
                flexDirection: { xs: 'column-reverse', md: 'row' },
                position: 'relative',
                overflow: 'hidden',
                gap: { xs: 6, md: 8 }
            }}
        >
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ flex: 1, maxWidth: '800px', width: '100%' }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: '0.9rem', md: '1.1rem' },
                        letterSpacing: 2,
                        textTransform: 'uppercase'
                    }}
                >
                    Hello, I'm
                </Typography>

                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '2.8rem', sm: '3.8rem', md: '4.2rem' },
                        lineHeight: 1.1,
                        mb: 2,
                        fontWeight: 900,
                        textAlign: { xs: 'left', md: 'left' }
                    }}
                >
                    Manish <Box component="span" sx={{
                        background: 'linear-gradient(135deg, #FF6B6B, #4D96FF)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Kumar</Box>
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        fontWeight: 500,
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 1.5,
                        fontSize: { xs: '1.2rem', sm: '1.6rem', md: '1.8rem' }
                    }}
                >
                    I am a
                    <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
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
                    </Box>
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 5,
                        color: 'text.secondary',
                        maxWidth: '600px',
                        fontSize: { xs: '1rem', md: '1.05rem' },
                        lineHeight: 1.8,
                        fontWeight: 400
                    }}
                >
                    Passionate about building scalable web applications and exploring Artificial Intelligence.
                    Creating digital experiences that matter.
                </Typography>

                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: { xs: '100%', sm: 'auto' }
                }}>
                    <Button
                        variant="contained"
                        component="a"
                        href="contact"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            borderRadius: '16px',
                            textTransform: 'none',
                            px: 4,
                            py: 2,
                            fontSize: '1rem',
                            fontWeight: 700,
                            boxShadow: '0 10px 20px rgba(255, 107, 107, 0.2)',
                            width: { xs: '100%', sm: 'auto' }
                        }}
                    >
                        Let's Talk
                    </Button>
                    <Button
                        variant="outlined"
                        component="a"
                        href="/M.Resume.pdf"
                        download
                        sx={{
                            borderRadius: '16px',
                            textTransform: 'none',
                            borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                            color: 'text.primary',
                            px: 4,
                            py: 2,
                            fontSize: '1rem',
                            fontWeight: 700,
                            width: { xs: '100%', sm: 'auto' },
                            '&:hover': {
                                borderColor: 'primary.main',
                                background: theme.palette.mode === 'dark' ? 'rgba(255,107,107,0.05)' : 'rgba(255,107,107,0.1)'
                            }
                        }}
                    >
                        Download CV
                    </Button>
                </Box>
            </motion.div>

            <motion.div
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, type: "spring" }}
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    width: '100%'
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        width: { xs: '250px', sm: '350px', md: '450px' },
                        height: { xs: '250px', sm: '350px', md: '450px' },
                        background: 'radial-gradient(circle, rgba(77, 150, 255, 0.15) 0%, transparent 70%)',
                        zIndex: 0,
                        animation: 'pulse 4s ease-in-out infinite'
                    }}
                />
                <Box sx={{
                    position: 'relative',
                    width: { xs: 240, sm: 300, md: 380 },
                    height: { xs: 240, sm: 300, md: 380 },
                    zIndex: 2,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `4px solid ${theme.palette.divider}`,
                    boxShadow: theme.palette.mode === 'dark' ? '0 30px 60px rgba(0,0,0,0.5)' : '0 20px 40px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.02)' },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3))',
                        zIndex: 1
                    }
                }}>
                    <Avatar
                        src="/img.jpeg"
                        alt="Manish Kumar"
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 0,
                            '& img': {
                                objectPosition: 'center 15%',
                                filter: 'contrast(1.05) brightness(1.05)'
                            }
                        }}
                    />
                </Box>
            </motion.div>

            <style>
                {`
                    @keyframes pulse {
                        0%, 100% { transform: scale(1); opacity: 0.5; }
                        50% { transform: scale(1.1); opacity: 0.8; }
                    }
                `}
            </style>
        </Box>
    );
};

export default Hero;
