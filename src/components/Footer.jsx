
import React from 'react';
import { Box, Container, Typography, IconButton, Stack, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    const theme = useTheme();
    return (
        <Box component="footer" sx={{
            py: { xs: 3, md: 4 },
            bgcolor: theme.palette.mode === 'dark' ? '#09090b' : '#fafafa',
            borderTop: '1px solid',
            borderColor: 'divider',
            position: 'relative',
            zIndex: 10
        }}>
            <Container maxWidth="md">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 2, md: 3 }}
                    justifyContent="space-between"
                    alignItems="center"
                    textAlign={{ xs: 'center', md: 'left' }}
                >
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 900, color: 'primary.main', mb: 0.5, letterSpacing: -1 }}>MK</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '300px' }}>
                            Building the future with code and creativity. Let's create something amazing together.
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={2}>
                        {[
                            { href: "https://github.com/mahi-manish", icon: <GitHubIcon /> },
                            { href: "https://www.linkedin.com/in/manish-mahi/", icon: <LinkedInIcon /> },
                            { href: "mailto:manishmahi505@gmail.com", icon: <EmailIcon /> }
                        ].map((social, idx) => (
                            <IconButton
                                key={idx}
                                href={social.href}
                                target="_blank"
                                color="inherit"
                                sx={{
                                    border: `1px solid ${theme.palette.divider}`,
                                    borderRadius: '12px',
                                    p: 1,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: 'primary.main',
                                        background: theme.palette.divider,
                                        transform: 'translateY(-3px)'
                                    }
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>

                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                        &copy; {new Date().getFullYear()} All Rights Reserved.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
