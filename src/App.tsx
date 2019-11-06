import React from 'react';
import './styles/app.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

export const App = () => {
    return (
        <div>
            <Sidebar/>
        </div>
    );
};