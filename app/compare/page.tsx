'use client';

import { Container, Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const comparisons = [
    {
        feature: 'Setup Time',
        local: { value: 'Hours', rating: 'medium' },
        container: { value: 'Minutes', rating: 'good' },
        cloud: { value: 'Seconds', rating: 'excellent' },
    },
    {
        feature: 'Performance',
        local: { value: 'Native', rating: 'excellent' },
        container: { value: 'Near-native', rating: 'good' },
        cloud: { value: 'Network-dependent', rating: 'medium' },
    },
    {
        feature: 'Consistency',
        local: { value: 'Variable', rating: 'poor' },
        container: { value: 'High', rating: 'excellent' },
        cloud: { value: 'Very High', rating: 'excellent' },
    },
    {
        feature: 'Offline Work',
        local: { value: 'Full', rating: 'excellent' },
        container: { value: 'Full', rating: 'excellent' },
        cloud: { value: 'Limited', rating: 'poor' },
    },
    {
        feature: 'Team Collaboration',
        local: { value: 'Manual', rating: 'poor' },
        container: { value: 'Good', rating: 'good' },
        cloud: { value: 'Excellent', rating: 'excellent' },
    },
    {
        feature: 'Resource Usage',
        local: { value: 'High', rating: 'medium' },
        container: { value: 'Medium', rating: 'good' },
        cloud: { value: 'Minimal', rating: 'excellent' },
    },
    {
        feature: 'Scalability',
        local: { value: 'Limited', rating: 'poor' },
        container: { value: 'Good', rating: 'good' },
        cloud: { value: 'Unlimited', rating: 'excellent' },
    },
    {
        feature: 'Cost',
        local: { value: 'Hardware only', rating: 'excellent' },
        container: { value: 'Hardware only', rating: 'excellent' },
        cloud: { value: 'Usage-based', rating: 'medium' },
    },
];

const getRatingIcon = (rating: string) => {
    switch (rating) {
        case 'excellent':
            return <CheckCircleIcon sx={{ color: '#00ff88', fontSize: 20 }} />;
        case 'good':
            return <CheckCircleIcon sx={{ color: '#00d4ff', fontSize: 20 }} />;
        case 'medium':
            return <RemoveCircleOutlineIcon sx={{ color: '#ffaa00', fontSize: 20 }} />;
        case 'poor':
            return <CancelIcon sx={{ color: '#ff6464', fontSize: 20 }} />;
        default:
            return null;
    }
};

export default function ComparePage() {
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
                        ⚖️ Environment Comparison
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800 }}>
                        Compare the strengths and trade-offs of each development environment to choose the right one for your needs.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TableContainer
                            component={Paper}
                            sx={{
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(0, 229, 255, 0.2)',
                                borderRadius: 3,
                            }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 700, fontSize: '1rem', borderBottom: '2px solid rgba(0, 212, 255, 0.3)' }}>
                                            Feature
                                        </TableCell>
                                        <TableCell align="center" sx={{ fontWeight: 700, fontSize: '1rem', color: '#00d4ff', borderBottom: '2px solid rgba(0, 212, 255, 0.3)' }}>
                                            💻 Local
                                        </TableCell>
                                        <TableCell align="center" sx={{ fontWeight: 700, fontSize: '1rem', color: '#0099ff', borderBottom: '2px solid rgba(0, 153, 255, 0.3)' }}>
                                            🐳 Container
                                        </TableCell>
                                        <TableCell align="center" sx={{ fontWeight: 700, fontSize: '1rem', color: '#5dffff', borderBottom: '2px solid rgba(93, 255, 255, 0.3)' }}>
                                            ☁️ Cloud
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {comparisons.map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                '&:hover': {
                                                    background: 'rgba(0, 212, 255, 0.05)',
                                                },
                                            }}
                                        >
                                            <TableCell sx={{ fontWeight: 600, borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                {row.feature}
                                            </TableCell>
                                            <TableCell align="center" sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                                    {getRatingIcon(row.local.rating)}
                                                    <Typography variant="body2">{row.local.value}</Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="center" sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                                    {getRatingIcon(row.container.rating)}
                                                    <Typography variant="body2">{row.container.value}</Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="center" sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                                    {getRatingIcon(row.cloud.rating)}
                                                    <Typography variant="body2">{row.cloud.value}</Typography>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper
                            sx={{
                                p: 3,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(0, 229, 255, 0.3)',
                                borderRadius: 3,
                                height: '100%',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 2, color: '#00e5ff' }}>
                                💻 Best For Local
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, '& li': { mb: 1 } }}>
                                <li>Solo developers</li>
                                <li>Offline work required</li>
                                <li>Maximum performance needs</li>
                                <li>Learning & experimentation</li>
                                <li>Full system control</li>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper
                            sx={{
                                p: 3,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(124, 77, 255, 0.3)',
                                borderRadius: 3,
                                height: '100%',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 2, color: '#7c4dff' }}>
                                🐳 Best For Container
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, '& li': { mb: 1 } }}>
                                <li>Team consistency</li>
                                <li>Microservices architecture</li>
                                <li>CI/CD pipelines</li>
                                <li>Production parity</li>
                                <li>Complex dependencies</li>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper
                            sx={{
                                p: 3,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(0, 229, 255, 0.3)',
                                borderRadius: 3,
                                height: '100%',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 2, color: '#00e5ff' }}>
                                ☁️ Best For Cloud
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, '& li': { mb: 1 } }}>
                                <li>Distributed teams</li>
                                <li>Quick onboarding</li>
                                <li>Zero maintenance</li>
                                <li>Global scale needs</li>
                                <li>Serverless architecture</li>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </Box>
    );
}

