import React, {Component} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Form} from '../../../components';
import {LOGIN, REGISTRATION} from '../../../actions/types';
import Commons from '../../../assets/themes/Commons';

@connect((store) => ({
    registration: store.registration,
}))
export default class RegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formType: 'login',
        };
    }

    renderHeader() {
        const formType = this.state.formType;
        return (<Text>{formType === 'registration' ? 'Registration' : 'Login'}</Text>);
    }

    renderBody() {
        return (
            <View>
                <TextInput
                    placeholder='Username'
                    underlineColorAndroid="transparent"
                    style={Commons.inputText}
                />
                <TextInput
                    placeholder='Password'
                    underlineColorAndroid="transparent"
                    style={Commons.inputText}
                />
            </View>
        );
    }

    renderFooter() {
        const formType = this.state.formType;
        return (
            <View>
                <Button
                    onPress={() => this.props.dispatch({
                            type: formType === 'registration' ? REGISTRATION : LOGIN
                        }
                    )}
                    title={formType === 'registration' ? 'Register' : 'Login'}
                    color="#841584"
                />
                <TouchableOpacity
                    onPress={() => this.setState({
                        formType: formType === 'registration' ? 'login' : 'registration'
                    })}
                    style={{padding: 10}}
                >
                    <Text style={{textAlign: 'center'}}>
                        {formType === 'registration' ?
                            'Already registered? Login me!'
                            : 'Not a member? Sign up now!'
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderLoginForm() {
        return (
            <View style={{flex: 1, backgroundColor: '#eea'}}>
                <Form
                    header={<Text>Login</Text>}
                    footer={<Text>Stopka</Text>}
                >
                    <View style={{alignItems: 'center', backgroundColor: '#ddd'}}>
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
                    title="Login"
                    color="#841584"
                />
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                <Form
                    header={this.renderHeader()}
                    footer={this.renderFooter()}
                >
                    {this.renderBody()}

                </Form>

            </View>
        );
    }
}
