import React, { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import './SidebarPosition.scss';

interface MenuPositionProps extends FontAwesomeIconProps {
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
            <FontAwesomeIcon className={`fa sidebar-position__icon`} icon={icon}/>
            <span className="sidebar-position__label">{label}</span>
        </div>
    )
};