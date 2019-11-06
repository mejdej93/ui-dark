import React, { FC, useState } from 'react'
import classNames from 'classnames';
import { SidebarPosition } from './Position/SidebarPosition';
import './Sidebar.scss';

interface SidebarProps {

}

export const Sidebar: FC<SidebarProps> = () => {

    const [isOpen, setIsOpen] = useState(false);

    const sidebarClassNames = classNames({
        'Sidebar': true,
        'Sidebar--open': isOpen
    });

    return (
        <div className={sidebarClassNames}>
            <a id="trigger" className="Trigger" onClick={() => setIsOpen(!isOpen)}>
                <i className="fa fa-bars"/>
            </a>

            <SidebarPosition isOpen={isOpen} icon="fa-cogs" label="First position"/>
        </div>
    );
};