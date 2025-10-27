'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00e5ff', // Brighter cyan
            light: '#6effff',
            dark: '#00b8d4',
            contrastText: '#000',
        },
        secondary: {
            main: '#7c4dff', // Purple accent
            light: '#b47cff',
            dark: '#3f1dcb',
        },
        background: {
            default: '#000000',
            paper: '#0a0a0f',
        },
        text: {
            primary: '#ffffff',
            secondary: '#a0aec0',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 600,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontSize: '1rem',
                    padding: '10px 24px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                    },
                },
                contained: {
                    background: 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #00a3cc 0%, #006acc 100%)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    border: '1px solid rgba(0, 229, 255, 0.15)',
                    background: 'rgba(10, 10, 15, 0.9)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        borderColor: 'rgba(0, 229, 255, 0.4)',
                        boxShadow: '0 8px 32px rgba(0, 229, 255, 0.25)',
                        transform: 'translateY(-4px)',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500,
                },
            },
        },
    },
});

export default theme;

