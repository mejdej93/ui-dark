import React from 'react';
import './styles/app.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Dashboard } from './views/Dashboard/Dashboard';
import { PageContent } from './views/PageContent';

export const App = () => {
    return (
        <div>
            <Sidebar/>

            <PageContent>
                <Dashboard/>
            </PageContent>
        </div>
    );
};