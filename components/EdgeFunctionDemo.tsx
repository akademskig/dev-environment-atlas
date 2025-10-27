'use client';

import { useState } from 'react';
import { Box, Button, TextField, Paper, Typography, CircularProgress, Chip } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function EdgeFunctionDemo() {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<{ message: string; region: string; timestamp: string; latency: number } | null>(null);
    const [error, setError] = useState('');

    const callEdgeFunction = async () => {
        setLoading(true);
        setError('');
        setResponse(null);

        try {
            const startTime = performance.now();
            const res = await fetch(`/api/hello?name=${encodeURIComponent(name || 'World')}`);
            const endTime = performance.now();
            const latency = Math.round(endTime - startTime);

            if (!res.ok) throw new Error('Failed to fetch');

            const data = await res.json();
            setResponse({ ...data, latency });
        } catch (err) {
            console.error(err);
            setError('Edge function not available in this demo. Deploy to Vercel to test!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Paper
            sx={{
                p: 4,
                background: 'rgba(21, 27, 61, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(93, 255, 255, 0.2)',
                borderRadius: 3,
            }}
        >
            <Typography variant="h5" sx={{ mb: 3, color: '#5dffff' }}>
                🚀 Live Edge Function Demo
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Test a real serverless edge function running on Vercel&apos;s global network. Enter your name and see the response!
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                <TextField
                    label="Your Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ flexGrow: 1, minWidth: 200 }}
                    onKeyPress={(e) => e.key === 'Enter' && callEdgeFunction()}
                />
                <Button
                    variant="contained"
                    startIcon={loading ? <CircularProgress size={20} /> : <RocketLaunchIcon />}
                    onClick={callEdgeFunction}
                    disabled={loading}
                    sx={{ px: 4 }}
                >
                    Call Edge Function
                </Button>
            </Box>

            {response && (
                <Box
                    sx={{
                        p: 3,
                        background: '#0a0e27',
                        borderRadius: 2,
                        border: '1px solid rgba(93, 255, 255, 0.3)',
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                        <Chip label={`Latency: ${response.latency}ms`} color="primary" size="small" />
                        {response.region && <Chip label={`Region: ${response.region}`} size="small" />}
                        <Chip label="Edge Runtime" size="small" />
                    </Box>
                    <Typography variant="body2" sx={{ color: '#5dffff', fontFamily: 'monospace' }}>
                        <strong>Response:</strong>
                    </Typography>
                    <Box
                        component="pre"
                        sx={{
                            mt: 1,
                            p: 2,
                            background: 'rgba(93, 255, 255, 0.05)',
                            borderRadius: 1,
                            overflow: 'auto',
                            fontFamily: '"Fira Code", monospace',
                            fontSize: '0.9rem',
                            color: '#5dffff',
                        }}
                    >
                        {JSON.stringify(response, null, 2)}
                    </Box>
                </Box>
            )}

            {error && (
                <Box
                    sx={{
                        p: 3,
                        background: 'rgba(255, 100, 100, 0.1)',
                        borderRadius: 2,
                        border: '1px solid rgba(255, 100, 100, 0.3)',
                    }}
                >
                    <Typography variant="body2" sx={{ color: '#ff6464' }}>
                        ⚠️ {error}
                    </Typography>
                </Box>
            )}
        </Paper>
    );
}

