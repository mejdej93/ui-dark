import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/app.scss';
import { DashboardView } from './views/Dashboard/DashboardView';
import { LoginView } from './views/Login/LoginView';
import { loginReducer } from './state/reducers/login.reducer';

const store = createStore(loginReducer);

export const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginView}/>
                    <Route path="/dashboard" component={DashboardView}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </Provider>
    );
};