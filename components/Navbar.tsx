'use client';

import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CodeIcon from '@mui/icons-material/Code';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Local Dev', path: '/local' },
    { label: 'Containerized', path: '/container' },
    { label: 'Cloud', path: '/cloud' },
    { label: 'Compare', path: '/compare' },
    { label: 'DevOps', path: '/devops' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <AppBar
            position="fixed"
            sx={{
                background: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0, 229, 255, 0.2)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CodeIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #00e5ff 0%, #7c4dff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    display: { xs: 'none', sm: 'block' },
                                }}
                            >
                                Dev Environment Atlas
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    color: 'primary.main',
                                    display: { xs: 'block', sm: 'none' },
                                }}
                            >
                                DEA
                            </Typography>
                        </Box>
                    </Link>

                    <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 } }}>
                        {navItems.map((item) => (
                            <Link key={item.path} href={item.path} style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{
                                        color: pathname === item.path ? 'primary.main' : 'text.secondary',
                                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                        px: { xs: 1, sm: 2 },
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: pathname === item.path ? '80%' : '0%',
                                            height: '2px',
                                            background: 'linear-gradient(90deg, #00e5ff, #7c4dff)',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover': {
                                            color: 'primary.main',
                                            background: 'rgba(0, 229, 255, 0.08)',
                                            '&::after': {
                                                width: '80%',
                                            },
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

