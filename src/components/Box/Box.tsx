import React, { FC, ReactNode } from 'react';
import { Heading } from '../Typography/Heading';
import './Box.scss';

export interface BoxProps {
    title: string;
    children: ReactNode;
}

export const Box: FC<BoxProps> = ({title, children}) => {
    return (
        <section className="Box">
            <Heading tag={Heading.tags.h3} className="Box-title">{title}</Heading>
            <div className="Box-content">
                {children}
            </div>
        </section>
    );
};