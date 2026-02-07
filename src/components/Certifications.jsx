
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, useTheme, Modal, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Certifications = () => {
    const theme = useTheme();
    const [selectedCert, setSelectedCert] = useState(null);

    const certs = [
        { title: "Python for Data Science, AI & Development", icon: "fas fa-robot", image: "/images/Python for Data Science, AI & Development.png", color: "#FF6B6B" },
        { title: "Next.js: FullStack Development", icon: "fas fa-globe", image: "/images/nextjs.png", color: "#4D96FF" },
        { title: "Cloud Computing Foundation", icon: "fas fa-cloud", image: "/images/EXIN-Cloud.png", color: "#6BCB77" },
        { title: "Databases and SQL", icon: "fas fa-database", image: "/images/database&sql.png", color: "#FFD93D" },
        { title: "Generative AI Ethics", icon: "fas fa-brain", image: "/images/GenAI.png", color: "#9575CD" },
        { title: "AI Foundation", icon: "fas fa-microchip", image: "/images/Exin-AI.png", color: "#4DB6AC" },
        { title: "Blockchain Foundation", icon: "fas fa-link", image: "/images/EXIN-Blockchain.png", color: "#7986CB" },
        { title: "Project Management", icon: "fas fa-tasks", image: "/images/Project-management.png", color: "#F06292" },
        { title: "Power BI Analytics", icon: "fas fa-chart-bar", image: "/images/powerBi.png", color: "#FFB74D" },
        { title: "Data Analysis with Python", icon: "fas fa-chart-pie", image: "/images/DataAnalysis.png", color: "#81C784" }
    ];

    const handleOpen = (cert) => setSelectedCert(cert);
    const handleClose = () => setSelectedCert(null);

    return (
        <Box component="section" id="certs" sx={{
            py: { xs: 12, md: 18 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorative Elements */}
            <Box sx={{
                position: 'absolute',
                top: '10%',
                left: '-5%',
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(60px)',
                zIndex: 0,
                animation: 'float 20s infinite alternate'
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, transparent 70%)`,
                borderRadius: '50%',
                filter: 'blur(80px)',
                zIndex: 0,
                animation: 'float 25s infinite alternate-reverse'
            }} />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Typography variant="overline" sx={{
                            fontWeight: 900,
                            letterSpacing: 6,
                            color: 'primary.main',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            mb: 2,
                            display: 'block'
                        }}>
                            Excellence & Skills
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontWeight: 900,
                            fontSize: { xs: '2.8rem', md: '4.5rem' },
                            letterSpacing: -2,
                            lineHeight: 1,
                            mb: 2,
                            background: theme.palette.mode === 'dark'
                                ? 'linear-gradient(135deg, #fff 0%, #a1a1aa 100%)'
                                : 'linear-gradient(135deg, #18181b 0%, #71717a 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            My <Box component="span" sx={{ color: 'primary.main' }}>Certifications</Box>
                        </Typography>
                        <Box sx={{ width: '80px', height: '6px', bgcolor: 'primary.main', mx: 'auto', borderRadius: '10px' }} />
                    </motion.div>
                </Box>

                <Grid container spacing={3.5}>
                    {certs.map((cert, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ y: -12, perspective: 1000 }}
                            >
                                <Paper
                                    onClick={() => handleOpen(cert)}
                                    sx={{
                                        position: 'relative',
                                        height: '240px',
                                        p: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        background: theme.palette.mode === 'dark'
                                            ? 'rgba(255, 255, 255, 0.03)'
                                            : 'rgba(255, 255, 255, 0.8)',
                                        backdropFilter: 'blur(20px)',
                                        borderRadius: '28px',
                                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'}`,
                                        cursor: 'pointer',
                                        overflow: 'hidden',
                                        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        '&:hover': {
                                            borderColor: cert.color,
                                            boxShadow: `0 30px 60px -15px ${cert.color}30`,
                                        },
                                        '&:hover .icon-box': {
                                            transform: 'scale(1.1) rotate(10deg)',
                                            background: cert.color,
                                            color: '#fff'
                                        },
                                        '&:hover .view-badge': {
                                            opacity: 1,
                                            transform: 'translateY(0)'
                                        }
                                    }}
                                >
                                    {/* Glass Overlay Effect */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 0, left: 0, right: 0,
                                        height: '50%',
                                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)',
                                        zIndex: 0
                                    }} />

                                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ position: 'relative', zIndex: 1 }}>
                                        <Box className="icon-box" sx={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: `${cert.color}15`,
                                            color: cert.color,
                                            fontSize: '1.6rem',
                                            transition: 'all 0.4s ease'
                                        }}>
                                            <i className={cert.icon}></i>
                                        </Box>
                                        <WorkspacePremiumIcon sx={{ color: cert.color, opacity: 0.4 }} />
                                    </Stack>

                                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                                        <Typography variant="h6" sx={{
                                            fontWeight: 800,
                                            color: 'text.primary',
                                            fontSize: '1.05rem',
                                            lineHeight: 1.3,
                                            mb: 1
                                        }}>
                                            {cert.title}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, opacity: 0.7 }}>
                                            Verify Certificate
                                        </Typography>
                                    </Box>

                                    {/* Hover "View" Tip */}
                                    <Box className="view-badge" sx={{
                                        position: 'absolute',
                                        bottom: 20,
                                        right: 20,
                                        opacity: 0,
                                        transform: 'translateY(10px)',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5,
                                        color: cert.color,
                                        fontWeight: 800,
                                        fontSize: '0.75rem'
                                    }}>
                                        VIEW <VisibilityIcon sx={{ fontSize: 16 }} />
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Cinematic Modal */}
            <Modal
                open={Boolean(selectedCert)}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(15px)',
                    backgroundColor: 'rgba(0,0,0,0.8)'
                }}
            >
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ scale: 0.5, rotateY: 90, opacity: 0 }}
                            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                            exit={{ scale: 0.5, rotateY: -90, opacity: 0 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                            style={{
                                position: 'relative',
                                width: 'min(95%, 1000px)',
                                outline: 'none'
                            }}
                        >
                            <Box sx={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                p: { xs: 1, md: 2 },
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: `0 0 100px ${selectedCert.color}20`
                            }}>
                                <IconButton
                                    onClick={handleClose}
                                    sx={{
                                        position: 'absolute',
                                        top: 15,
                                        right: 15,
                                        zIndex: 10,
                                        color: '#fff',
                                        background: 'rgba(0,0,0,0.5)',
                                        backdropFilter: 'blur(10px)',
                                        '&:hover': { background: selectedCert.color }
                                    }}
                                >
                                    <CloseIcon fontSize="medium" />
                                </IconButton>

                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    onContextMenu={(e) => e.preventDefault()}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '85vh',
                                        borderRadius: '16px',
                                        display: 'block',
                                        objectFit: 'contain',
                                        userSelect: 'none'
                                    }}
                                />

                                <Box sx={{
                                    p: 2,
                                    textAlign: 'center',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    position: 'absolute',
                                    bottom: 0, left: 0, right: 0
                                }}>
                                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '0.9rem', md: '1.2rem' } }}>
                                        {selectedCert.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Modal>

            <style>
                {`
                @keyframes float {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(30px, -50px) scale(1.1); }
                }
                `}
            </style>
        </Box>
    );
};

export default Certifications;
