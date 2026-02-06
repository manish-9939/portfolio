
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, useTheme } from '@mui/material';

const About = () => {
    const theme = useTheme();

    const education = [
        {
            degree: "MCA (AI & Data Science)",
            school: "Vivekananda Global University, Jaipur",
            period: "2024 - 2026 (Pursuing)",
            score: "CGPA: 8.5",
            theme: "primary-theme"
        },
        {
            degree: "BCA (Bachelor of Computer Applications)",
            school: "Magadh University, Bodh Gaya",
            period: "2019 - 2023",
            score: "Percentage: 75.5%",
            theme: "secondary-theme"
        }
    ];

    return (
        <Box component="section" id="about" sx={{ py: { xs: 10, md: 15 } }}>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 4, mb: 1, display: 'block' }}>
                                My Story
                            </Typography>
                            <Typography variant="h2" sx={{
                                mb: 3,
                                fontWeight: 900,
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                letterSpacing: -1,
                                lineHeight: 1.2
                            }}>
                                Driven by <Box component="span" sx={{ color: 'secondary.main' }}>Innovation</Box> & Code
                            </Typography>
                            <Typography variant="body1" sx={{
                                mb: 3,
                                color: 'text.secondary',
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                lineHeight: 1.8,
                                fontWeight: 400
                            }}>
                                A highly motivated MCA (AI & Data Science) student seeking an entry-level position in the IT industry.
                                I aim to apply my programming knowledge, problem-solving skills, and passion for technology to develop efficient software solutions.
                            </Typography>
                            <Typography variant="body1" sx={{
                                color: 'text.secondary',
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                lineHeight: 1.8,
                                fontWeight: 400,
                                mb: 5
                            }}>
                                Whether it's developing complex sentiment analysis engines or crafting pixel-perfect user interfaces,
                                I always aim for excellence and performance in every project I undertake.
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                {education.map((edu, index) => (
                                    <Card key={index} sx={{
                                        borderRadius: '24px',
                                        borderLeft: '6px solid',
                                        borderColor: edu.theme === 'primary-theme' ? 'primary.main' : 'secondary.main',
                                        background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.01)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateX(10px)',
                                            background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'
                                        }
                                    }}>
                                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                            <Chip
                                                label={edu.period}
                                                size="small"
                                                sx={{
                                                    mb: 2,
                                                    fontWeight: 700,
                                                    fontSize: '0.7rem',
                                                    bgcolor: edu.theme === 'primary-theme' ? 'rgba(255, 107, 107, 0.1)' : 'rgba(77, 150, 255, 0.1)',
                                                    color: edu.theme === 'primary-theme' ? 'primary.main' : 'secondary.main',
                                                    borderRadius: '6px'
                                                }}
                                            />
                                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.25rem' }}>
                                                {edu.degree}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                                {edu.school}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mt: 2, fontWeight: 700, color: 'primary.main', fontSize: '0.9rem' }}>
                                                {edu.score}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Box sx={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '340px',
                                aspectRatio: '4/5',
                                borderRadius: '40px',
                                overflow: 'hidden',
                                border: `1px solid ${theme.palette.divider}`,
                                boxShadow: theme.palette.mode === 'dark' ? '0 30px 60px rgba(0,0,0,0.5)' : '0 20px 40px rgba(0,0,0,0.1)',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5))',
                                }
                            }}>
                                <img
                                    src="/img.jpeg"
                                    alt="Manish Kumar"
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center 10%',
                                        transform: 'scale(1.25)'
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
