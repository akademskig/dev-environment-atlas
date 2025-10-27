'use client';

import { useState } from 'react';
import { Box, Tabs, Tab, Paper, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

interface CodeOutputSwitcherProps {
    code: string;
    logs: string;
    architecture: string;
}

export default function CodeOutputSwitcher({ code, logs, architecture }: CodeOutputSwitcherProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Paper
            sx={{
                background: 'rgba(21, 27, 61, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: 3,
                overflow: 'hidden',
            }}
        >
            <Tabs
                value={activeTab}
                onChange={(_, newValue) => setActiveTab(newValue)}
                sx={{
                    borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
                    px: 2,
                    '& .MuiTab-root': {
                        color: 'text.secondary',
                        '&.Mui-selected': {
                            color: 'primary.main',
                        },
                    },
                }}
            >
                <Tab icon={<CodeIcon />} label="Code" iconPosition="start" />
                <Tab icon={<TerminalIcon />} label="Logs" iconPosition="start" />
                <Tab icon={<AccountTreeIcon />} label="Architecture" iconPosition="start" />
            </Tabs>

            <Box sx={{ p: 3 }}>
                {activeTab === 0 && (
                    <Box
                        component="pre"
                        sx={{
                            m: 0,
                            p: 3,
                            background: '#0a0e27',
                            borderRadius: 2,
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            overflow: 'auto',
                            fontFamily: '"Fira Code", "Courier New", monospace',
                            fontSize: '0.9rem',
                            color: '#5dffff',
                        }}
                    >
                        {code}
                    </Box>
                )}

                {activeTab === 1 && (
                    <Box
                        component="pre"
                        sx={{
                            m: 0,
                            p: 3,
                            background: '#0a0e27',
                            borderRadius: 2,
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            overflow: 'auto',
                            fontFamily: '"Fira Code", "Courier New", monospace',
                            fontSize: '0.9rem',
                            color: '#00ff00',
                        }}
                    >
                        {logs}
                    </Box>
                )}

                {activeTab === 2 && (
                    <Box
                        component="pre"
                        sx={{
                            m: 0,
                            p: 3,
                            background: '#0a0e27',
                            borderRadius: 2,
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            overflow: 'auto',
                            fontFamily: '"Fira Code", "Courier New", monospace',
                            fontSize: '0.85rem',
                            color: '#00d4ff',
                            lineHeight: 1.6,
                        }}
                    >
                        {architecture}
                    </Box>
                )}
            </Box>
        </Paper>
    );
}

