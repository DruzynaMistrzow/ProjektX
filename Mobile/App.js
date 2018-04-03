import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/store/index';
import NavigationContainer from './src/navigation/NavigationContainer';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer />
            </Provider>
        );
    }
}

