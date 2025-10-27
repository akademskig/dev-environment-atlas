'use client';

import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import AnimatedBackground from '@/components/AnimatedBackground';
import CodeOutputSwitcher from '@/components/CodeOutputSwitcher';
import CloudDiagram from '@/components/diagrams/CloudDiagram';
import EdgeFunctionDemo from '@/components/EdgeFunctionDemo';
import Footer from '@/components/Footer';

const cloudCode = `// api/hello.ts - Vercel Edge Function
export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name') || 'World';
  
  return new Response(
    JSON.stringify({ 
      message: \`Hello \${name}!\`,
      region: process.env.VERCEL_REGION,
      timestamp: new Date().toISOString()
    }),
    { headers: { 'content-type': 'application/json' } }
  );
}`;

const cloudLogs = `$ vercel deploy
Vercel CLI 28.0.0
🔍 Inspect: https://vercel.com/...
✅ Production: https://my-app.vercel.app

Deployment Complete!
  Duration: 12s
  Region: iad1 (Washington, D.C.)
  
Edge Functions:
  ✓ /api/hello (Edge Runtime)
  Cold Start: ~50ms
  Warm: ~5ms`;

const architecture = `┌─────────────────────────────────┐
│      Global Edge Network        │
│                                 │
│  ┌───────────────────────────┐  │
│  │   Load Balancer / CDN     │  │
│  └───────────┬───────────────┘  │
│              │                  │
│  ┌───────────▼───────────────┐  │
│  │   Edge Functions (λ)      │  │
│  │   • Auto-scaling          │  │
│  │   • Multi-region          │  │
│  └───────────┬───────────────┘  │
│              │                  │
│  ┌───────────▼───────────────┐  │
│  │   Database / Storage      │  │
│  │   • Vercel KV/Postgres    │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘`;

export default function CloudPage() {
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
                        ☁️ Cloud Development
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800 }}>
                        Browser-based development with serverless functions, global edge networks, and managed infrastructure.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                        <Paper
                            sx={{
                                p: 4,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(93, 255, 255, 0.2)',
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: '#5dffff' }}>
                                Cloud Architecture
                            </Typography>
                            <CloudDiagram />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Paper
                            sx={{
                                p: 4,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(93, 255, 255, 0.2)',
                                borderRadius: 3,
                                height: '100%',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: '#5dffff' }}>
                                Key Advantages
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {[
                                    { title: '🌍 Global Scale', desc: 'Deploy to edge locations worldwide instantly' },
                                    { title: '📈 Auto-scaling', desc: 'Handle traffic spikes automatically' },
                                    { title: '💰 Pay-per-use', desc: 'Only pay for actual compute time used' },
                                    { title: '🔧 Zero Maintenance', desc: 'No servers to manage or update' },
                                    { title: '⚡ Edge Computing', desc: 'Run code close to users for low latency' },
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
                        <EdgeFunctionDemo />
                    </Grid>

                    <Grid item xs={12}>
                        <CodeOutputSwitcher
                            code={cloudCode}
                            logs={cloudLogs}
                            architecture={architecture}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                p: 4,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(93, 255, 255, 0.2)',
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: '#5dffff' }}>
                                Cloud Platforms
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>▲ Vercel</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Next.js-optimized platform with edge functions and instant deployments
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>🐙 GitHub Codespaces</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Full VS Code environment in the browser with dev containers
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>🦊 Gitpod</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Automated dev environments from any Git repository
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

