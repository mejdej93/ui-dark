import React, { FC, FormHTMLAttributes, ReactNode } from 'react';
import './Form.scss';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}

export const Form: FC<FormProps> = ({children, ...props}) => {
    return (
        <form className="Form" {...props}>
            {children}
        </form>
    )
};