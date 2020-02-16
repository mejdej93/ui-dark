import React, { InputHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';
import './TextInput.scss';

enum TextInputLayout {
    column = 'column',
    row = 'row'
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    layout?: TextInputLayout
}

export function TextInput({label, type = "text", required, layout, ...props}: InputProps) {
    const classNames = classnames({
        'TextInput': true,
        'TextInput--column': layout === TextInputLayout.column
    });

    return (
        <div className={classNames}>
            {
                label &&
                <label className="TextInput-label">{label}
                    {
                        required && <i>*</i>
                    }:
                </label>
            }

            <input className="TextInput-input"
                   type={type}
                   required={required}
                   {...props}
            />
        </div>
    );
}

TextInput.layout = TextInputLayout;
