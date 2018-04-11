import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import store from './src/store/index';
import NavigationContainer from './src/navigation/NavigationContainer';

export default class App extends Component {
    state = {
        appIsReady: false,
    };

    componentWillMount() {
        persistStore(store, undefined, () => {
            this.setState({ appIsReady: true });
        });
    }

    render() {
        if (this.state.appIsReady) {
            return (
                <Provider store={store}>
                    <NavigationContainer />
                </Provider>
            );
        } 
        return <AppLoading />;
    }
}
