import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class MyHamburger extends Component {
//this.props.navigation.navigate('DrawerOpen')
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Ionicons name="ios-menu" size={35} color="white" />
            </TouchableOpacity>
        );
    }
}

export default withNavigation(MyHamburger);
