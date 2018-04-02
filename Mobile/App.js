import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {StyleSheet, Text, View} from 'react-native';
import store from "./src/store/index";
import {StackNavigator} from 'react-navigation'
import MainScreen from './src/screens/main/view/MainScreen'

export default class App extends Component {
    render() {

        const MainNavigator = StackNavigator({
            Main:{screen: MainScreen}
        })
        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        );
    }
}

