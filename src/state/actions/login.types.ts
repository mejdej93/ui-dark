export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

interface LoggedInAction {
    type: typeof LOGGED_IN
}

interface LoggedOutAction {
    type: typeof LOGGED_OUT
}

export interface LoginState {
    isUserLoggedIn: boolean;
}

export type LoginActionTypes = LoggedInAction | LoggedOutAction;