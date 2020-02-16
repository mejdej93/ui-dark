import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import './Button.scss';

export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    small?: boolean;
    fullWidth?: boolean;
}

export function Button({children, className, variant = ButtonVariant.tertiary, small, fullWidth, ...props}: ButtonProps) {
    const buttonClassName = classNames({
        'Button': true,
        [`Button--${variant}`]: variant,
        'Button--small': small,
        'Button--fullWidth': fullWidth
    });

    return (
        <button className={buttonClassName} {...props}>
            {children}
        </button>
    )
}

Button.variant = ButtonVariant;