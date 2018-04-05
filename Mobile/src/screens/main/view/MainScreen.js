import React, { Component } from 'react';
import { FlatList, Picker, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Screen } from '../../../components';
import Commons from '../../../assets/themes/Commons';


export default class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            range: '',
        };
    }

    render() {
        return (
            <Screen title="Account">
                <Picker
                    selectedValue={this.state.range}
                    onValueChange={(itemValue) => this.setState({ range: itemValue })}
                    mode='dropdown'
                >
                    <Picker.Item label="Day" value="Day" />
                    <Picker.Item label="Week" value="Week" />
                    <Picker.Item label="Month" value="Month" />
                    <Picker.Item label="All" value="All" />
                </Picker>
                <Text style={{ fontSize: 32 }}>{this.state.range === 'Day' ? '100' : '30000'}</Text>
                <View style={Commons.viewCenter}>
                    <FontAwesome name="user-circle-o" size={128} color="green" />
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome
                            name="flag-o"
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
