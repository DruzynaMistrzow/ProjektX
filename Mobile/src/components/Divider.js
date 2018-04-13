import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Divider extends Component {


    render() {
        return (
            <View style={styles.divider} />
        );
    }
}

const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#d4d3cf',
    },

});
