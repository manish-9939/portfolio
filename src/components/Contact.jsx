
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Button, Paper, Stack, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    const theme = useTheme();

    return (
        <>
            <Box component="section" id="resume-download" sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="md">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Paper sx={{
                            textAlign: 'center',
                            p: { xs: 4, sm: 6, md: 8 },
                            borderRadius: { xs: '30px', md: '40px' },
                            boxShadow: theme.palette.mode === 'dark' ? '0 30px 60px rgba(0,0,0,0.5)' : '0 20px 40px rgba(0,0,0,0.05)',
                            background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.01)',
                            border: `1px solid ${theme.palette.divider}`
                        }}>
                            <Typography variant="h4" sx={{
                                mb: 2,
                                fontWeight: 800,
                                fontSize: { xs: '1.8rem', md: '2.5rem' },
                                letterSpacing: -0.5
                            }}>Ready to Collaborate?</Typography>
                            <Typography variant="body1" sx={{
                                color: 'text.secondary',
                                mb: 5,
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                maxWidth: '600px',
                                mx: 'auto',
                                lineHeight: 1.8
                            }}>
                                I am eager to learn new technologies and grow professionally. Download my resume to connect.
                            </Typography>
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button
                                    variant="contained"
                                    href="/M.Resume.pdf"
                                    download
                                    startIcon={<DownloadIcon />}
                                    sx={{
                                        borderRadius: '16px',
                                        px: 4,
                                        py: 2,
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        width: { xs: '100%', sm: 'auto' }
                                    }}
                                >
                                    Download Resume
                                </Button>
                                <Button
                                    variant="outlined"
                                    href="https://www.linkedin.com/in/manish-mahi/"
                                    target="_blank"
                                    startIcon={<LinkedInIcon />}
                                    sx={{
                                        borderRadius: '16px',
                                        px: 4,
                                        py: 2,
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        width: { xs: '100%', sm: 'auto' }
                                    }}
                                >
                                    LinkedIn
                                </Button>
                            </Stack>
                        </Paper>
                    </motion.div>
                </Container>
            </Box>

            <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="sm">
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                        <Typography variant="h3" sx={{
                            fontWeight: 900,
                            fontSize: { xs: '2.2rem', md: '3rem' },
                            letterSpacing: -1
                        }}>Get In <Box component="span" sx={{ color: 'primary.main' }}>Touch</Box></Typography>
                        <Typography variant="body1" sx={{
                            color: 'text.secondary',
                            mt: 2,
                            fontSize: '1.1rem'
                        }}>
                            I am available for internships and full-time opportunities. Feel free to reach out!
                        </Typography>
                    </Box>

                    <Stack spacing={2.5}>
                        {[
                            { href: "mailto:manishmahi505@gmail.com", icon: "fas fa-envelope", text: "manishmahi505@gmail.com", color: "#FF6B6B" },
                            { href: "tel:+919939863412", icon: "fas fa-phone-alt", text: "+91 9939863412", color: "#4D96FF" },
                            { href: "https://www.linkedin.com/in/manish-mahi/", icon: "fab fa-linkedin-in", text: "LinkedIn Profile", color: "#0077b5" },
                            { href: "https://github.com/mahi-manish", icon: "fab fa-github", text: "GitHub", color: "#333" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                style={{ textDecoration: 'none' }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                target={item.href.startsWith('http') ? "_blank" : "_self"}
                            >
                                <Paper sx={{
                                    p: 3,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 3,
                                    borderRadius: '20px',
                                    border: `1px solid ${theme.palette.divider}`,
                                    background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.01)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                    }
                                }}>
                                    <Box sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: `${item.color}15`,
                                        color: item.color,
                                        fontSize: '1.4rem'
                                    }}>
                                        <i className={item.icon}></i>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>{item.text}</Typography>
                                </Paper>
                            </motion.a>
                        ))}
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default Contact;
