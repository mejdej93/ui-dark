import React, { FC, FormEvent } from 'react';
import { TextInput } from '../../../components/Form/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { Form } from '../../../components/Form/Form';

interface LoginFormProps {
    email: string;
    password: string;
    onEmailChange: (email: string) => void;
    onPasswordChange: (password: string) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const LoginForm: FC<LoginFormProps> = ({email, password, onEmailChange, onPasswordChange, onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            <TextInput label="Email"
                       type="email"
                       value={email}
                       onChange={({target: {value}}) => onEmailChange(value)}
                       layout={TextInput.layout.column}
                       required
                       autoComplete="username"
            />

            <TextInput label="Password"
                       type="password"
                       value={password}
                       onChange={({target: {value}}) => onPasswordChange(value)}
                       layout={TextInput.layout.column}
                       required
                       autoComplete="current-password"
            />

            <Button fullWidth
                    type="submit"
            >
                Log in
            </Button>
        </Form>
    )
};