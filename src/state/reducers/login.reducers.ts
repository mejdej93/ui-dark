import { LOGGED_IN, LOGGED_OUT, LoginActionTypes, LoginState } from '../actions/login.types';

const initialState: LoginState = {
    isUserLoggedIn: false
};

export function loginReducer(state: LoginState = initialState, action: LoginActionTypes): LoginState {
    switch (action.type) {
        case LOGGED_IN:
            return Object.assign({}, state, {
                isUserLoggedIn: true
            });

        case LOGGED_OUT:
            return Object.assign({}, state, {
                isUserLoggedIn: false
            });

        default:
            return state;
    }
}