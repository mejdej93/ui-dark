import React, { FC, useState } from 'react'
import classNames from 'classnames';
import { SidebarPosition } from './Position/SidebarPosition';
import { faAddressBook, faBars, faCogs, faIdCard, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Sidebar.scss';
import { LoginState } from '../../state/actions/login.types';

interface SidebarProps extends LoginState {

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
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars}/>
            </a>

            <SidebarPosition isOpen={isOpen} icon={faCogs} label="First position"/>
            <SidebarPosition isOpen={isOpen} icon={faIdCard} label="Second position"/>
            <SidebarPosition isOpen={isOpen} icon={faAddressBook} label="Third position"/>
        </div>
    );
};