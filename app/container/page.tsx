'use client';

import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import AnimatedBackground from '@/components/AnimatedBackground';
import CodeOutputSwitcher from '@/components/CodeOutputSwitcher';
import ContainerDiagram from '@/components/diagrams/ContainerDiagram';
import Footer from '@/components/Footer';

const dockerfileCode = `# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]`;

const dockerLogs = `$ docker build -t my-app .
[+] Building 12.3s (10/10) FINISHED
 => [1/5] FROM node:18-alpine
 => [2/5] WORKDIR /app
 => [3/5] COPY package*.json ./
 => [4/5] RUN npm install
 => [5/5] COPY . .
 => exporting to image
Successfully built abc123def456

$ docker run -p 3000:3000 my-app
Server running on http://localhost:3000
✓ Container started successfully`;

const architecture = `┌─────────────────────────────────┐
│        Host Machine             │
│                                 │
│  ┌───────────────────────────┐  │
│  │     Docker Container      │  │
│  │                           │  │
│  │  ┌─────────────────────┐  │  │
│  │  │   Node.js Runtime   │  │  │
│  │  │   + Dependencies    │  │  │
│  │  └─────────────────────┘  │  │
│  │                           │  │
│  │  ┌─────────────────────┐  │  │
│  │  │   Application Code  │  │  │
│  │  └─────────────────────┘  │  │
│  │                           │  │
│  └───────────────────────────┘  │
│           ↕ Port 3000           │
└─────────────────────────────────┘`;

export default function ContainerPage() {
    return (
        <Box sx={{ minHeight: '100vh', background: 'linear-gradient(180deg, #000000 0%, #0a0a0f 100%)' }}>
            <AnimatedBackground />

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 2,
                            background: 'linear-gradient(135deg, #00e5ff 0%, #7c4dff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        🐳 Containerized Development
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800 }}>
                        Isolated, reproducible environments using Docker containers for consistency across development, testing, and production.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                        <Paper
                            sx={{
                                p: 4,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(0, 153, 255, 0.2)',
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: '#0099ff' }}>
                                Container Lifecycle
                            </Typography>
                            <ContainerDiagram />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Paper
                            sx={{
                                p: 4,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(0, 153, 255, 0.2)',
                                borderRadius: 3,
                                height: '100%',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: '#0099ff' }}>
                                Key Benefits
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {[
                                    { title: '🔒 Isolation', desc: 'Each container runs in its own isolated environment' },
                                    { title: '📦 Portability', desc: 'Works the same on any machine with Docker' },
                                    { title: '🔄 Reproducibility', desc: 'Same dependencies and versions everywhere' },
                                    { title: '⚡ Quick Setup', desc: 'New developers get started in minutes' },
                                    { title: '🎯 Version Control', desc: 'Infrastructure as code with Dockerfiles' },
                                ].map((feature, i) => (
                                    <Box key={i}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {feature.desc}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <CodeOutputSwitcher
                            code={dockerfileCode}
                            logs={dockerLogs}
                            architecture={architecture}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                p: 4,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(0, 153, 255, 0.2)',
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: '#0099ff' }}>
                                Docker Ecosystem
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>🐳 Docker Engine</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Core runtime that builds and runs containers
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>🎼 Docker Compose</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Multi-container orchestration for complex apps
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>☸️ Kubernetes</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Production-grade container orchestration
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </Box>
    );
}

