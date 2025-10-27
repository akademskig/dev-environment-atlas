'use client';

import { Box, Container, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                mt: 8,
                borderTop: '1px solid rgba(0, 212, 255, 0.2)',
                background: 'rgba(10, 14, 39, 0.5)',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 3,
                    }}
                >
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h6" sx={{ mb: 1, color: 'primary.main', fontWeight: 600 }}>
                            Dev Environment Atlas
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Built with Next.js, TypeScript, and Material UI
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Deployed on Vercel
                        </Typography>
                    </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link
              href="https://github.com/akademskig/dev-environment-atlas"
              target="_blank"
              rel="noopener noreferrer"
                            sx={{
                                color: 'text.secondary',
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: 'primary.main',
                                },
                            }}
                        >
                            <GitHubIcon sx={{ fontSize: 28 }} />
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: 'text.secondary',
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: 'primary.main',
                                },
                            }}
                        >
                            <LinkedInIcon sx={{ fontSize: 28 }} />
                        </Link>
                    </Box>
                </Box>

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Dev Environment Atlas. Portfolio project showcasing modern development workflows.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

