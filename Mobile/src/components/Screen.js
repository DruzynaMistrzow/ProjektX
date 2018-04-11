import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Header } from './';

export default class Screen extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
                <Header headerTitle={this.props.title} />
                    {this.props.children}
            </KeyboardAvoidingView>
        );
    }

}
