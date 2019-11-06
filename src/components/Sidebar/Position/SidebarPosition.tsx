import React, { FC } from 'react';
import classNames from 'classnames';
import './SidebarPosition.scss';

interface MenuPositionProps {
    icon: string;
    label: string;
    isOpen: boolean;
}

export const SidebarPosition: FC<MenuPositionProps> = ({label, icon, isOpen}) => {

    const sidebarClassNames = classNames({
        'sidebar-position': true,
        'sidebar-position--open': isOpen
    });

    return (
        <div className={sidebarClassNames}>
            <i className={`fa sidebar-position__icon ${icon}`}/>
            <span className="sidebar-position__label">{label}</span>
        </div>
    )
};