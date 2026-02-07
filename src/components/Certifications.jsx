
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, useTheme, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Certifications = () => {
    const theme = useTheme();
    const [selectedCert, setSelectedCert] = useState(null);

    const certs = [
        { title: "Python for Data Science, AI & Development", icon: "fas fa-robot", image: "/images/Python for Data Science, AI & Development.png" },
        { title: "Next.js: Creating and Hosting a FullStack Site", icon: "fas fa-globe", image: "/images/nextjs.png" },
        { title: "EXIN Cloud Computing Foundation", icon: "fas fa-cloud", image: "/images/EXIN-Cloud.png" },
        { title: "Databases and SQL for Data Science", icon: "fas fa-database", image: "/images/database&sql.png" },
        { title: "Generative AI Impact, Considerations, and Ethical", icon: "fas fa-brain", image: "/images/GenAI.png" },
        { title: "EXIN Artificial Intelligence Foundation", icon: "fas fa-microchip", image: "/images/Exin-AI.png" },
        { title: "EXIN Blockchain Foundation", icon: "fas fa-link", image: "/images/EXIN-Blockchain.png" },
        { title: "Project Management Principles", icon: "fas fa-tasks", image: "/images/Project-management.png" },
        { title: "Power BI Data Analysis", icon: "fas fa-chart-bar", image: "/images/powerBi.png" },
        { title: "Data Analysis with Python", icon: "fas fa-chart-pie", image: "/images/DataAnalysis.png" }
    ];

    const handleOpen = (cert) => {
        setSelectedCert(cert);
    };

    const handleClose = () => {
        setSelectedCert(null);
    };

    return (
        <Box component="section" id="certs" sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="xl">
                <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 4, mb: 1, display: 'block' }}>
                        Education & Recognition
                    </Typography>
                    <Typography variant="h3" sx={{
                        fontWeight: 900,
                        fontSize: { xs: '2.2rem', md: '3rem' },
                        letterSpacing: -1
                    }}>Certifications</Typography>
                </Box>

                <Grid container spacing={{ xs: 2.5, md: 4 }}>
                    {certs.map((cert, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Paper
                                    onClick={() => handleOpen(cert)}
                                    sx={{
                                        p: { xs: 2.5, md: 3.5 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 3,
                                        background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.01)',
                                        borderRadius: '20px',
                                        border: `1px solid ${theme.palette.divider}`,
                                        borderLeft: '5px solid',
                                        borderColor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                                        cursor: 'pointer',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                                            borderColor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                                            boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <Box sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: index % 2 === 0 ? 'rgba(255, 107, 107, 0.1)' : 'rgba(77, 150, 255, 0.1)',
                                        color: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                                        fontSize: '1.5rem',
                                        flexShrink: 0
                                    }}>
                                        <i className={cert.icon}></i>
                                    </Box>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.4, fontSize: '1rem' }}>
                                        {cert.title}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Certificate Modal View */}
            <Modal
                open={Boolean(selectedCert)}
                onClose={handleClose}
                aria-labelledby="cert-modal-title"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }}
            >
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            style={{
                                position: 'relative',
                                maxWidth: '90%',
                                maxHeight: '90%',
                                outline: 'none'
                            }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <IconButton
                                    onClick={handleClose}
                                    sx={{
                                        position: 'absolute',
                                        top: -40,
                                        right: -10,
                                        color: '#fff',
                                        '&:hover': { color: 'primary.main' }
                                    }}
                                >
                                    <CloseIcon fontSize="large" />
                                </IconButton>
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    onContextMenu={(e) => e.preventDefault()} // Disable right click
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '80vh',
                                        borderRadius: '12px',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                        userSelect: 'none',
                                        pointerEvents: 'auto'
                                    }}
                                />
                            </Box>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Modal>
        </Box>
    );
};

export default Certifications;
