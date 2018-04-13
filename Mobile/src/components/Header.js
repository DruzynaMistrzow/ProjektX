import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MyHamburger, LogoutButton } from './';


export default class Header extends Component {


    render() {
        return (
            <View style={styles.header}>
                <View style={styles.left}>
                    <MyHamburger />
                </View>
                <View style={styles.body}>
                    <Text style={styles.text}>
                        {this.props.headerTitle}
                    </Text>
                </View>
                <View style={styles.left}>
                    <LogoutButton />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f3a017',
        height: 45,
    },
    text: {
        textAlign: 'center',
        color: '#bec6ff',
        fontWeight: 'bold',
        fontSize: 24,
    },
    left: {
        flex: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 10,
    },
    right: {
        flex: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
