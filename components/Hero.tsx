'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Hero() {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight - 100,
            behavior: 'smooth',
        });
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                        'radial-gradient(circle at 20% 50%, rgba(0, 229, 255, 0.08) 0%, transparent 50%),' +
                        'radial-gradient(circle at 80% 80%, rgba(124, 77, 255, 0.08) 0%, transparent 50%)',
                    pointerEvents: 'none',
                },
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 3,
                            px: 3,
                            py: 1,
                            borderRadius: 50,
                            border: '1px solid rgba(0, 229, 255, 0.3)',
                            background: 'rgba(0, 229, 255, 0.08)',
                        }}
                    >
                        <RocketLaunchIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 500 }}>
                            Modern Development Workflows
                        </Typography>
                    </Box>

                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            mb: 3,
                            background: 'linear-gradient(135deg, #ffffff 0%, #00e5ff 50%, #7c4dff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: 700,
                        }}
                    >
                        Dev Environment Atlas
                    </Typography>

                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            mb: 5,
                            color: 'text.secondary',
                            maxWidth: 700,
                            mx: 'auto',
                            lineHeight: 1.6,
                        }}
                    >
                        Navigate the landscape of modern software development environments.
                        From local setups to containerized workflows and cloud-based solutions.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={scrollToContent}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                            }}
                        >
                            Explore Environments
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            href="https://github.com"
                            target="_blank"
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                '&:hover': {
                                    borderColor: 'primary.light',
                                    background: 'rgba(0, 229, 255, 0.1)',
                                },
                            }}
                        >
                            View on GitHub
                        </Button>
                    </Box>
                </Box>
            </Container>

            {/* Animated background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    animation: 'float 6s ease-in-out infinite',
                    '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-20px)' },
                    },
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(124, 77, 255, 0.1) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    animation: 'float 8s ease-in-out infinite',
                    animationDelay: '1s',
                }}
            />
        </Box>
    );
}

