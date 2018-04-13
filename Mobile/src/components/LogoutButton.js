import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { LOGOUT } from '../actions/types';

@connect((store) => ({
    registration: store.registration,
}))
class LogoutButton extends Component {

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.dispatch({ type: LOGOUT })}>
                <Ionicons name="ios-power" size={30} color="white" />
            </TouchableOpacity>
        );
    }
}

export default withNavigation(LogoutButton);
