import React, { FC, ReactNode } from 'react';
import './PageContent.scss';

interface PageContentProps {
    children: ReactNode;
}

export const PageContent: FC<PageContentProps> = ({children}) => {
    return (
        <div className="PageContent">
            {children}
        </div>
    );
};