'use client';

import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import AnimatedBackground from '@/components/AnimatedBackground';
import CodeOutputSwitcher from '@/components/CodeOutputSwitcher';
import LocalDiagram from '@/components/diagrams/LocalDiagram';
import Footer from '@/components/Footer';

const localCode = `// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from local dev!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`;

const localLogs = `$ npm run dev
> dev-app@1.0.0 dev
> nodemon server.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter \`rs\`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,json
[nodemon] starting \`node server.js\`
Server running on http://localhost:3000
✓ Ready in 1.2s`;

const architecture = `┌─────────────────────────────────┐
│     Your Development Machine    │
│                                 │
│  ┌──────────┐    ┌──────────┐  │
│  │ VS Code  │───▶│  Node.js │  │
│  │  Editor  │    │  Runtime │  │
│  └──────────┘    └─────┬────┘  │
│                        │        │
│                        ▼        │
│                  ┌──────────┐  │
│                  │ Browser  │  │
│                  │localhost │  │
│                  └──────────┘  │
└─────────────────────────────────┘`;

export default function LocalDevPage() {
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
                        💻 Local Development
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800 }}>
                        Traditional development setup running directly on your machine with full system access and native performance.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
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
                                How It Works
                            </Typography>
                            <LocalDiagram />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Paper
                            sx={{
                                p: 4,
                                background: 'rgba(10, 10, 15, 0.9)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(0, 212, 255, 0.2)',
                                borderRadius: 3,
                                height: '100%',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                                Key Features
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {[
                                    { title: '⚡ Native Performance', desc: 'Direct hardware access, no virtualization overhead' },
                                    { title: '🔌 Offline Capability', desc: 'Work without internet connection' },
                                    { title: '🔄 Hot Reload', desc: 'Instant feedback on code changes' },
                                    { title: '🛠️ Full System Access', desc: 'Access to all system resources and tools' },
                                    { title: '🎯 Simple Setup', desc: 'Install dependencies and start coding' },
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
                            code={localCode}
                            logs={localLogs}
                            architecture={architecture}
                        />
                    </Grid>

                    <Grid item xs={12}>
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
                                Common Tools & Workflow
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>📝 Editor</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        VS Code, WebStorm, Sublime Text
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>⚙️ Runtime</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Node.js, Python, Ruby, Go
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" sx={{ mb: 2 }}>📦 Package Manager</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        npm, yarn, pnpm, pip
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

