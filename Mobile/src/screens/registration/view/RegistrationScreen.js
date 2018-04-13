import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Form } from '../../../components';
import { LOGIN } from '../../../actions/types';

@connect((store) => ({
    registration: store.registration,
}))
export default class RegistrationScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                <Form
                    header={<Text>Rejestracja</Text>}
                    footer={<Text>Stopka</Text>}
                >
                    <View>
                        <TextInput
                            placeholder='Username'
                            underlineColorAndroid="transparent"
                        />

                        <TextInput
                            placeholder='Password'
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </Form>
                <Button
                    onPress={() => this.props.dispatch({ type: LOGIN })}
                    title="Register"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}
