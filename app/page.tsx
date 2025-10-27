'use client';

import { Container, Box, Typography, Grid } from '@mui/material';
import Hero from '@/components/Hero';
import EnvironmentCard from '@/components/EnvironmentCard';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ComputerIcon from '@mui/icons-material/Computer';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import StorageIcon from '@mui/icons-material/Storage';

const environments = [
    {
        title: 'Local Development',
        icon: ComputerIcon,
        description: 'Traditional setup on your machine with direct access to system resources.',
        features: [
            'Full system access',
            'Native performance',
            'Offline capability',
            'Direct hardware access',
        ],
        tools: ['VS Code', 'Node.js', 'Git', 'npm/yarn'],
        color: '#00d4ff',
        link: '/local',
    },
    {
        title: 'Containerized',
        icon: StorageIcon,
        description: 'Isolated environments using Docker for consistency across teams.',
        features: [
            'Environment isolation',
            'Reproducible builds',
            'Easy dependency management',
            'Portable across systems',
        ],
        tools: ['Docker', 'Docker Compose', 'Dev Containers', 'Kubernetes'],
        color: '#0099ff',
        link: '/container',
    },
    {
        title: 'Cloud-Based',
        icon: CloudQueueIcon,
        description: 'Browser-accessible development environments hosted in the cloud.',
        features: [
            'Access from anywhere',
            'Scalable resources',
            'Team collaboration',
            'Zero local setup',
        ],
        tools: ['GitHub Codespaces', 'Gitpod', 'AWS Cloud9', 'Replit'],
        color: '#5dffff',
        link: '/cloud',
    },
];

export default function Home() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #000000 0%, #0a0a0f 100%)',
            }}
        >
            <AnimatedBackground />
            <Hero />

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            mb: 2,
                            background: 'linear-gradient(135deg, #00e5ff 0%, #7c4dff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Development Environments
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                        Explore the evolution of software development setups, from local machines to cloud-based solutions.
                        Each approach offers unique advantages for modern development workflows.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {environments.map((env, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <EnvironmentCard {...env} />
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 10, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 3 }}>
                        Why This Matters
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                                    🚀 Productivity
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Choose the right environment to maximize your development speed and efficiency.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                                    🔄 Consistency
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Ensure your code works the same way across different machines and team members.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                                    📈 Scalability
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Scale your development infrastructure as your team and projects grow.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Footer />
        </Box>
    );
}

