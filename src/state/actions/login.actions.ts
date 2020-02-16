import { LOGGED_IN, LOGGED_OUT, LoginActionTypes } from './login.types';

export function logIn(): LoginActionTypes {
    return ({
        type: LOGGED_IN
    })
}

export function logOut(): LoginActionTypes {
    return ({
        type: LOGGED_OUT
    })
}