'use client';

import { Card, CardContent, Typography, Box, Chip, Stack, Button } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

interface EnvironmentCardProps {
    title: string;
    icon: SvgIconComponent;
    description: string;
    features: string[];
    tools: string[];
    color: string;
    link?: string;
}

export default function EnvironmentCard({
    title,
    icon: Icon,
    description,
    features,
    tools,
    color,
    link,
}: EnvironmentCardProps) {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'visible',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: -20,
                    left: 20,
                    width: 60,
                    height: 60,
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${color} 0%, ${color}99 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 20px ${color}40`,
                }}
            >
                <Icon sx={{ fontSize: 32, color: '#000' }} />
            </Box>

            <CardContent sx={{ pt: 6, pb: 3, flexGrow: 1 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {description}
                </Typography>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'primary.main', fontWeight: 600 }}>
                        Key Features
                    </Typography>
                    <Stack spacing={1}>
                        {features.map((feature, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CheckCircleOutlineIcon sx={{ fontSize: 18, color: color }} />
                                <Typography variant="body2" color="text.secondary">
                                    {feature}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>

                <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1.5, color: 'primary.main', fontWeight: 600 }}>
                        Popular Tools
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {tools.map((tool, index) => (
                            <Chip
                                key={index}
                                label={tool}
                                size="small"
                                sx={{
                                    backgroundColor: `${color}20`,
                                    color: color,
                                    border: `1px solid ${color}40`,
                                    fontWeight: 500,
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {link && (
                    <Box sx={{ mt: 3 }}>
                        <Link href={link} style={{ textDecoration: 'none' }}>
                            <Button
                                variant="outlined"
                                endIcon={<ArrowForwardIcon />}
                                fullWidth
                                sx={{
                                    borderColor: color,
                                    color: color,
                                    '&:hover': {
                                        borderColor: color,
                                        background: `${color}20`,
                                    },
                                }}
                            >
                                Learn More
                            </Button>
                        </Link>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
}

