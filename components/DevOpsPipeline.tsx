'use client';

import { useState } from 'react';
import { Box, Button, Paper, Typography, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = [
    {
        label: 'Git Push',
        description: 'Developer commits and pushes code to repository',
        icon: '📝',
        duration: 500,
    },
    {
        label: 'CI Triggered',
        description: 'GitHub Actions workflow starts automatically',
        icon: '🔄',
        duration: 800,
    },
    {
        label: 'Build',
        description: 'Install dependencies and compile application',
        icon: '🔨',
        duration: 1200,
    },
    {
        label: 'Test',
        description: 'Run unit tests, integration tests, and linting',
        icon: '🧪',
        duration: 1000,
    },
    {
        label: 'Deploy',
        description: 'Deploy to Vercel edge network globally',
        icon: '🚀',
        duration: 1500,
    },
    {
        label: 'Live',
        description: 'Application is live and serving traffic',
        icon: '✅',
        duration: 500,
    },
];

export default function DevOpsPipeline() {
    const [activeStep, setActiveStep] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);

    const animate = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveStep(-1);

        let currentStep = 0;
        const runStep = () => {
            if (currentStep < steps.length) {
                setActiveStep(currentStep);
                setTimeout(() => {
                    currentStep++;
                    runStep();
                }, steps[currentStep].duration);
            } else {
                setIsAnimating(false);
            }
        };

        setTimeout(runStep, 500);
    };

    const reset = () => {
        setActiveStep(-1);
        setIsAnimating(false);
    };

    return (
        <Paper
            sx={{
                p: 4,
                background: 'rgba(21, 27, 61, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 255, 136, 0.2)',
                borderRadius: 3,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h5" sx={{ color: '#00ff88' }}>
                    Deployment Pipeline Visualizer
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        variant="contained"
                        startIcon={<PlayArrowIcon />}
                        onClick={animate}
                        disabled={isAnimating}
                        size="small"
                        sx={{
                            background: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #00cc66 0%, #00a3cc 100%)',
                            },
                        }}
                    >
                        Run Pipeline
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
            </Box>

            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label} completed={activeStep > index}>
                        <StepLabel
                            StepIconComponent={() => (
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background:
                                            activeStep > index
                                                ? 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)'
                                                : activeStep === index
                                                    ? 'rgba(0, 255, 136, 0.2)'
                                                    : 'rgba(255, 255, 255, 0.05)',
                                        border: `2px solid ${activeStep >= index ? '#00ff88' : 'rgba(255, 255, 255, 0.1)'
                                            }`,
                                        transition: 'all 0.3s ease',
                                        boxShadow:
                                            activeStep === index ? '0 0 20px rgba(0, 255, 136, 0.5)' : 'none',
                                    }}
                                >
                                    {activeStep > index ? (
                                        <CheckCircleIcon sx={{ color: '#000', fontSize: 24 }} />
                                    ) : (
                                        <Typography sx={{ fontSize: '1.2rem' }}>{step.icon}</Typography>
                                    )}
                                </Box>
                            )}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: activeStep >= index ? '#00ff88' : 'text.secondary',
                                    fontWeight: activeStep === index ? 700 : 500,
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {step.label}
                            </Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {step.description}
                            </Typography>
                            {activeStep === index && (
                                <Box
                                    sx={{
                                        p: 2,
                                        background: 'rgba(0, 255, 136, 0.1)',
                                        border: '1px solid rgba(0, 255, 136, 0.3)',
                                        borderRadius: 2,
                                        animation: 'pulse 1.5s ease-in-out infinite',
                                        '@keyframes pulse': {
                                            '0%, 100%': { opacity: 1 },
                                            '50%': { opacity: 0.7 },
                                        },
                                    }}
                                >
                                    <Typography variant="caption" sx={{ color: '#00ff88', fontFamily: 'monospace' }}>
                                        ⚡ Running...
                                    </Typography>
                                </Box>
                            )}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>

            {activeStep === steps.length - 1 && (
                <Box
                    sx={{
                        mt: 3,
                        p: 3,
                        background: 'rgba(0, 255, 136, 0.1)',
                        border: '2px solid rgba(0, 255, 136, 0.5)',
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h6" sx={{ color: '#00ff88', mb: 1 }}>
                        🎉 Deployment Successful!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Your application is now live and serving traffic globally.
                    </Typography>
                </Box>
            )}
        </Paper>
    );
}

