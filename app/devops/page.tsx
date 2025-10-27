'use client';

import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import AnimatedBackground from '@/components/AnimatedBackground';
import DevOpsPipeline from '@/components/DevOpsPipeline';
import Footer from '@/components/Footer';

export default function DevOpsPage() {
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
                        🚀 DevOps Pipeline
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800 }}>
                        Visualize the complete deployment pipeline from code commit to production deployment across different environments.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <DevOpsPipeline />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper
                            sx={{
                                p: 4,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(0, 229, 255, 0.2)',
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: '#00e5ff' }}>
                                Pipeline Stages
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {[
                                    { title: '1. Code Commit', desc: 'Developer pushes code to Git repository' },
                                    { title: '2. CI Trigger', desc: 'Automated build and test pipeline starts' },
                                    { title: '3. Build', desc: 'Application is compiled and dependencies installed' },
                                    { title: '4. Test', desc: 'Unit, integration, and E2E tests run' },
                                    { title: '5. Deploy', desc: 'Application deployed to production environment' },
                                    { title: '6. Monitor', desc: 'Health checks and performance monitoring' },
                                ].map((stage, i) => (
                                    <Box key={i}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                            {stage.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {stage.desc}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper
                            sx={{
                                p: 4,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(0, 212, 255, 0.2)',
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                                Popular CI/CD Tools
                            </Typography>
                            <Grid container spacing={2}>
                                {[
                                    { name: 'GitHub Actions', desc: 'Native GitHub CI/CD' },
                                    { name: 'Vercel', desc: 'Automatic deployments' },
                                    { name: 'Jenkins', desc: 'Self-hosted automation' },
                                    { name: 'GitLab CI', desc: 'Integrated DevOps platform' },
                                    { name: 'CircleCI', desc: 'Cloud-native CI/CD' },
                                    { name: 'Travis CI', desc: 'Open source friendly' },
                                ].map((tool, i) => (
                                    <Grid item xs={12} key={i}>
                                        <Box
                                            sx={{
                                                p: 2,
                                                background: 'rgba(0, 229, 255, 0.05)',
                                                border: '1px solid rgba(0, 229, 255, 0.2)',
                                                borderRadius: 2,
                                            }}
                                        >
                                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                                {tool.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {tool.desc}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                p: 4,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(0, 229, 255, 0.2)',
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                                Benefits of Automated Pipelines
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6" sx={{ mb: 1, color: '#00e5ff' }}>⚡ Speed</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Deploy changes in minutes instead of hours or days
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6" sx={{ mb: 1, color: '#7c4dff' }}>🔒 Reliability</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Consistent, repeatable deployments reduce human error
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6" sx={{ mb: 1, color: '#00e5ff' }}>🧪 Quality</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Automated testing catches bugs before production
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Typography variant="h6" sx={{ mb: 1, color: '#7c4dff' }}>📊 Visibility</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Track every deployment and its status in real-time
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

