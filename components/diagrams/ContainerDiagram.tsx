'use client';

import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function ContainerDiagram() {
    const [step, setStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const steps = [
        { label: 'Dockerfile', desc: 'Define container image' },
        { label: 'Build Image', desc: 'Create layered filesystem' },
        { label: 'Run Container', desc: 'Start isolated process' },
        { label: 'Port Mapping', desc: 'Access via localhost' },
    ];

    const animate = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setStep(0);

        const interval = setInterval(() => {
            setStep((prev) => {
                if (prev >= steps.length - 1) {
                    clearInterval(interval);
                    setIsAnimating(false);
                    return prev;
                }
                return prev + 1;
            });
        }, 1500);
    };

    const reset = () => {
        setStep(0);
        setIsAnimating(false);
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Button
                    variant="contained"
                    startIcon={<PlayArrowIcon />}
                    onClick={animate}
                    disabled={isAnimating}
                    size="small"
                >
                    Animate Flow
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<RestartAltIcon />}
                    onClick={reset}
                    size="small"
                >
                    Reset
                </Button>
            </Box>

            <Box sx={{ position: 'relative', minHeight: 400 }}>
                {/* Dockerfile */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        width: 120,
                        height: 100,
                        background: step >= 0 ? 'rgba(0, 153, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: `2px solid ${step >= 0 ? '#0099ff' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.5s ease',
                        boxShadow: step >= 0 ? '0 0 20px rgba(0, 153, 255, 0.5)' : 'none',
                    }}
                >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        📄 Dockerfile
                    </Typography>
                </Box>

                {/* Arrow 1 */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 70,
                        left: 150,
                        width: 80,
                        height: 2,
                        background: step >= 1 ? '#0099ff' : 'rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.5s ease',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            right: -8,
                            top: -4,
                            width: 0,
                            height: 0,
                            borderLeft: `8px solid ${step >= 1 ? '#0099ff' : 'rgba(255, 255, 255, 0.1)'}`,
                            borderTop: '5px solid transparent',
                            borderBottom: '5px solid transparent',
                        },
                    }}
                />

                {/* Image */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        width: 120,
                        height: 100,
                        background: step >= 1 ? 'rgba(0, 153, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: `2px solid ${step >= 1 ? '#0099ff' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.5s ease',
                        boxShadow: step >= 1 ? '0 0 20px rgba(0, 153, 255, 0.5)' : 'none',
                    }}
                >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        📦 Image
                    </Typography>
                </Box>

                {/* Arrow 2 */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 130,
                        right: 70,
                        width: 2,
                        height: 80,
                        background: step >= 2 ? '#0099ff' : 'rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.5s ease',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: -4,
                            width: 0,
                            height: 0,
                            borderTop: `8px solid ${step >= 2 ? '#0099ff' : 'rgba(255, 255, 255, 0.1)'}`,
                            borderLeft: '5px solid transparent',
                            borderRight: '5px solid transparent',
                        },
                    }}
                />

                {/* Container */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        width: 120,
                        height: 100,
                        background: step >= 2 ? 'rgba(0, 153, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: `2px solid ${step >= 2 ? '#0099ff' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.5s ease',
                        boxShadow: step >= 2 ? '0 0 20px rgba(0, 153, 255, 0.5)' : 'none',
                    }}
                >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        🐳 Container
                    </Typography>
                </Box>

                {/* Arrow 3 */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 70,
                        left: 150,
                        width: 80,
                        height: 2,
                        background: step >= 3 ? '#0099ff' : 'rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.5s ease',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: -8,
                            top: -4,
                            width: 0,
                            height: 0,
                            borderRight: `8px solid ${step >= 3 ? '#0099ff' : 'rgba(255, 255, 255, 0.1)'}`,
                            borderTop: '5px solid transparent',
                            borderBottom: '5px solid transparent',
                        },
                    }}
                />

                {/* Host */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                        width: 120,
                        height: 100,
                        background: step >= 3 ? 'rgba(0, 153, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: `2px solid ${step >= 3 ? '#0099ff' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.5s ease',
                        boxShadow: step >= 3 ? '0 0 20px rgba(0, 153, 255, 0.5)' : 'none',
                    }}
                >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        💻 Host:3000
                    </Typography>
                </Box>

                {/* Current Step Info */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        p: 2,
                        background: 'rgba(0, 153, 255, 0.1)',
                        border: '1px solid rgba(0, 153, 255, 0.3)',
                        borderRadius: 2,
                        minWidth: 200,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="caption" sx={{ color: '#0099ff', fontWeight: 600 }}>
                        Step {step + 1}: {steps[step].label}
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: 'text.secondary' }}>
                        {steps[step].desc}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

