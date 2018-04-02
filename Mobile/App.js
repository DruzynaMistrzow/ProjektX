import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/store/index';
import MainNavigator from './src/navigation/MainNavigation';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>
        );
    }
}

