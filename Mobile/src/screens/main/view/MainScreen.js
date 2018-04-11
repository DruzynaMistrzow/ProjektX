import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, ButtonSelector } from '../../../components';
import Commons from '../../../assets/themes/Commons';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            range: '',
        };
    }

    onSelect=(index) => {
        console.log(`wcisnieto ${index}`);
    };

    render() {
        return (
            <Screen title="Account">
                <ButtonSelector
                    buttons={['Day', 'Week', 'Month', 'All']}
                    onSelect={this.onSelect}
                />
                <Text style={{ fontSize: 32 }}>{this.state.range === 'Day' ? '100' : '30000'}</Text>
                <View style={Commons.viewCenter}>
                    <Ionicons name="ios-contact" size={128} color="green" />
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons
                            name="ios-flag"
                            size={48}
                            color="red"
                            style={{ paddingHorizontal: 10 }}
                        />
                        <Text style={{ fontSize: 32 }}>User Name</Text>
                    </View>
                    <Text style={{ fontSize: 24 }}>#51</Text>
                </View>
            </Screen>
        );
    }
}
