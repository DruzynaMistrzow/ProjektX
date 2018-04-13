import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/store/index';
import NavigationContainer from './src/navigation/NavigationContainer';

export default class App extends Component {
    state = {
        appIsReady: false,
    };

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<AppLoading />} persistor={persistStore(store)}>
                    <NavigationContainer />
                </PersistGate>
            </Provider>
        );
    }
}
