import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const routes = (
    <Switch>
        <Route path='auth' component={AuthApp} />
        <Route path='/' component={MarketingApp} />
    </Switch>
);

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}> 
                <div>
                    <Header />   
                    {routes}
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
}
