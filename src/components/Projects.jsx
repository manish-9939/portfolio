
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Stack, useTheme } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Projects = () => {
    const theme = useTheme();

    const projects = [
        {
            id: "01",
            icon: "fas fa-brain",
            title: "TIQ - Sentiment Intelligence",
            category: "Data Science",
            desc: "A high-end sentiment intelligence dashboard featuring real-time analysis, sarcasm detection (5%), and multi-modal emotion tracking. Optimized for Hinglish and professional communication patterns.",
            frontendTech: ["React.js", "Material UI"],
            backendTech: ["Python", "Flask API", "RoBERTa", "NLP"],
            img: "/images/ToneiQ.png",
            link: "https://toneiq.vercel.app/",
            color: "#a855f7" // Purple from screenshot
        },
        {
            id: "02",
            icon: "fas fa-coffee",
            title: "CafeBliss - Coffee Experience",
            category: "Website Project",
            desc: "A modern coffee shop website with elegant animations and responsive design. Focused on premium aesthetics and smooth user experience.",
            tech: ["JavaScript", "React.js", "CSS3"],
            img: "/images/coffee.png",
            link: "https://cafebliss-six.vercel.app/",
            color: "#3dffcbff"
        },
        {
            id: "03",
            icon: "fas fa-cut",
            title: "Parlour Business Studio",
            category: "Website Project",
            desc: "Designed and developed a responsive business website for salon management. Implemented user-friendly UI and improved workflow efficiency.",
            tech: ["JavaScript", "React.js", "CSS3"],
            img: "/images/salon.png",
            link: "https://parlourcafe.vercel.app/",
            color: "#FF6B6B"
        }
    ];

    return (
        <Box component="section" id="projects" sx={{ py: { xs: 10, md: 15 } }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 4, fontSize: '0.9rem' }}>
                        Portfolio
                    </Typography>
                    <Typography variant="h2" sx={{
                        fontWeight: 900,
                        mt: 1,
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                        letterSpacing: -1,
                        lineHeight: 1.2
                    }}>
                        Selected <Box component="span" sx={{ color: 'text.secondary', fontWeight: 300 }}>Works</Box>
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 10, md: 15 } }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" direction={index % 2 === 0 ? 'row' : { xs: 'row', md: 'row-reverse' }}>
                                <Grid item xs={12} md={7}>
                                    <Box sx={{
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        border: `1px solid ${theme.palette.divider}`,
                                        boxShadow: theme.palette.mode === 'dark'
                                            ? `0 20px 50px -12px ${project.color}30`
                                            : `0 15px 30px -10px rgba(0,0,0,0.1)`,
                                        position: 'relative',
                                        width: '100%',
                                        transition: 'all 0.5s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: theme.palette.mode === 'dark'
                                                ? `0 30px 60px -15px ${project.color}50`
                                                : `0 20px 40px -12px rgba(0,0,0,0.15)`,
                                        },
                                        '&:hover img': { transform: 'scale(1.05)' },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            inset: 0,
                                            background: `linear-gradient(45deg, ${project.color}10, transparent)`,
                                            zIndex: 1,
                                            pointerEvents: 'none'
                                        }
                                    }}>
                                        <CardMedia
                                            component="img"
                                            image={project.img}
                                            alt={project.title}
                                            loading="lazy"
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                display: 'block',
                                                transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
                                            }}
                                        />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={5}>
                                    <Box sx={{ px: { xs: 1, md: 2 } }}>
                                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                                            <Box sx={{
                                                width: '36px',
                                                height: '36px',
                                                borderRadius: '10px',
                                                backgroundColor: `${project.color}15`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: `1px solid ${project.color}25`
                                            }}>
                                                <i className={project.icon} style={{ color: project.color, fontSize: '1rem' }}></i>
                                            </Box>
                                            <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2, color: 'text.secondary', fontSize: '0.7rem' }}>
                                                {project.category}
                                            </Typography>
                                        </Stack>

                                        <Typography variant="h3" sx={{
                                            fontWeight: 800,
                                            fontSize: { xs: '2rem', md: '2.5rem' },
                                            mb: 2.5,
                                            lineHeight: 1.2,
                                            letterSpacing: -0.5
                                        }}>
                                            {project.title}
                                        </Typography>

                                        <Typography variant="body1" sx={{
                                            mb: 4,
                                            color: 'text.secondary',
                                            lineHeight: 1.8,
                                            fontSize: '1rem',
                                            fontWeight: 400
                                        }}>
                                            {project.desc}
                                        </Typography>

                                        <Box sx={{ mb: 4 }}>
                                            {project.frontendTech ? (
                                                <Stack spacing={2}>
                                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                        <Typography variant="caption" sx={{ fontWeight: 800, minWidth: '80px', mt: 0.5, color: project.color, textTransform: 'uppercase' }}>Frontend</Typography>
                                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                            {project.frontendTech.map(t => <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600, borderColor: `${project.color}30`, color: project.color }} />)}
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                        <Typography variant="caption" sx={{ fontWeight: 800, minWidth: '80px', mt: 0.5, color: project.color, textTransform: 'uppercase' }}>Backend</Typography>
                                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                            {project.backendTech.map(t => <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600, borderColor: `${project.color}30`, color: project.color }} />)}
                                                        </Box>
                                                    </Box>
                                                </Stack>
                                            ) : (
                                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                    <Typography variant="caption" sx={{ fontWeight: 800, minWidth: '80px', mt: 0.5, color: 'primary.main', textTransform: 'uppercase' }}>Tech Stack</Typography>
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                        {project.tech.map(t => <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600 }} />)}
                                                    </Box>
                                                </Box>
                                            )}
                                        </Box>

                                        <Button
                                            variant="contained"
                                            href={project.link}
                                            target="_blank"
                                            endIcon={<OpenInNewIcon sx={{ fontSize: '18px' }} />}
                                            sx={{
                                                borderRadius: '12px',
                                                px: 4,
                                                py: 1.8,
                                                fontWeight: 800,
                                                fontSize: '0.9rem',
                                                textTransform: 'none',
                                                background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}cc 100%)`,
                                                color: '#fff',
                                                boxShadow: `0 10px 20px -5px ${project.color}50`,
                                                transition: 'all 0.3s ease',
                                                width: { xs: '100%', sm: 'auto' },
                                                '&:hover': {
                                                    boxShadow: `0 15px 30px -5px ${project.color}70`,
                                                    filter: 'brightness(1.1)'
                                                }
                                            }}
                                        >
                                            View Project
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;
