import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import './Button.scss';

export enum ButtonClassName {
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: ButtonClassName;
    small?: boolean;
}

export const Button: FC<ButtonProps> = ({children, className, small, ...props}) => {
    const buttonClassName = classNames({
        'Button': true,
        [`Button--${className}`]: className,
        'Button--small': small
    });

    return (
        <button className={buttonClassName} {...props}>
            {children}
        </button>
    )
};