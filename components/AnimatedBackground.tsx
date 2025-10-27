'use client';

import { Box } from '@mui/material';

export default function AnimatedBackground() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                overflow: 'hidden',
                pointerEvents: 'none',
            }}
        >
            {/* Grid background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
            linear-gradient(rgba(0, 229, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 20s linear infinite',
                    '@keyframes gridMove': {
                        '0%': { transform: 'translate(0, 0)' },
                        '100%': { transform: 'translate(50px, 50px)' },
                    },
                }}
            />

            {/* Floating orbs */}
            {[...Array(5)].map((_, i) => (
                <Box
                    key={i}
                    sx={{
                        position: 'absolute',
                        borderRadius: '50%',
                        background: i % 2 === 0
                            ? `radial-gradient(circle, rgba(0, 229, 255, ${0.12 - i * 0.015}) 0%, transparent 70%)`
                            : `radial-gradient(circle, rgba(124, 77, 255, ${0.08 - i * 0.01}) 0%, transparent 70%)`,
                        filter: 'blur(50px)',
                        animation: `float${i} ${8 + i * 2}s ease-in-out infinite`,
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 18}%`,
                        width: `${250 + i * 50}px`,
                        height: `${250 + i * 50}px`,
                        [`@keyframes float${i}`]: {
                            '0%, 100%': {
                                transform: `translate(0, 0) scale(1)`,
                            },
                            '50%': {
                                transform: `translate(${30 - i * 10}px, ${-20 - i * 5}px) scale(${1.1 - i * 0.05})`,
                            },
                        },
                    }}
                />
            ))}

            {/* Gradient overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.9) 100%)',
                }}
            />
        </Box>
    );
}

