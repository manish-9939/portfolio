
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            main: mode === 'dark' ? '#FF6B6B' : '#FF4757',
        },
        secondary: {
            main: mode === 'dark' ? '#4D96FF' : '#2E86DE',
        },
        background: {
            default: mode === 'dark' ? '#09090b' : '#fafafa',
            paper: mode === 'dark' ? '#18181b' : '#ffffff',
        },
        text: {
            primary: mode === 'dark' ? '#f4f4f5' : '#1a1a1a',
            secondary: mode === 'dark' ? '#a1a1aa' : '#636e72',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 800,
        },
        h2: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '10px 24px',
                    borderRadius: '8px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                },
            },
        },
    },
});

export default getDesignTokens;
