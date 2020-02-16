import React, { FormEvent, useState } from 'react';
import { ApiService } from '../../api/ApiService';
import { LoginForm } from './LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { logIn } from '../../state/actions/login.actions';
import { useHistory } from 'react-router';

export const LoginView = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        ApiService.post('/auth/login', {
            email,
            password
        })
            .then(response => {
                console.log(response.data);
                dispatch(logIn());
                history.push('/dashboard');
            });
    };

    return (
        <div className="Flex-center">
            <LoginForm email={email}
                       password={password}
                       onEmailChange={(value) => setEmail(value)}
                       onPasswordChange={(value) => setPassword(value)}
                       onSubmit={onSubmit}
            />
        </div>
    );
};