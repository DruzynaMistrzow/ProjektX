import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MainNavigation from './MainNavigation';
import RegistrationNavigation from './RegistrationNavigation';


@connect((store) => ({
    registration: store.registration,
}))
export default class NavigationContainer extends Component {

    render() {
        let properNavigator = null;

        if (this.props.registration.isUserLoggedIn) {
            properNavigator = (<MainNavigation
                onNavigationStateChange={(prevState, currentState) => {
                    const routeKey = currentState.routes[currentState.index].key;
                    this.props.dispatch({ type: 'CHANGE_ROUTE', payload: routeKey });
                }}
            />);
        } else {
            properNavigator = <RegistrationNavigation />;
        }

        return (
            <View style={{ flex: 1 }}>
                {properNavigator}
            </View>
        );
    }


}

