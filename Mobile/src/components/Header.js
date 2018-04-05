import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {


    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>
                    {this.props.headerTitle}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3a017',
        height: 45
    },
    text: {
        textAlign: 'center',
        color: '#bec6ff',
        fontWeight: 'bold',
        fontSize: 24,
    }
});
