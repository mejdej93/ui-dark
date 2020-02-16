import React from 'react';
import './DashboardView.scss';
import { Box } from '../../components/Box/Box';
import { PageContent } from '../PageContent';

export const DashboardView = () => {
    return (
        <PageContent>
            <main className="Dashboard">
                <Box title="Widget no 1">
                </Box>
            </main>
        </PageContent>
    );
};