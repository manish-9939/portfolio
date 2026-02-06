
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';

const Certifications = () => {
    const theme = useTheme();

    const certs = [
        { title: "Python for Data Science, AI & Development", icon: "fas fa-robot" },
        { title: "Next.js: Creating and Hosting a FullStack Site", icon: "fas fa-globe" },
        { title: "EXIN Cloud Computing Foundation", icon: "fas fa-cloud" },
        { title: "Object-Oriented Hierarchies in Java", icon: "fas fa-cubes" },
        { title: "Generative AI Impact, Considerations, and Ethical", icon: "fas fa-brain" }
    ];

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
                                <Paper sx={{
                                    p: { xs: 2.5, md: 3.5 },
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 3,
                                    background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.01)',
                                    borderRadius: '20px',
                                    border: `1px solid ${theme.palette.divider}`,
                                    borderLeft: '5px solid',
                                    borderColor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                                        borderColor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                                        boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                                    }
                                }}>
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
        </Box>
    );
};

export default Certifications;
