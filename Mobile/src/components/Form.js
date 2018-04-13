import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Divider from "./Divider";

export default class Form extends Component {

    render() {
        return (
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={styles.header}>
                            {this.props.header}
                        </Text>
                        <Divider />
                    </View>
                    <View style={styles.childContainer}>
                        {this.props.children}
                    </View>

                    <Divider />

                    <View style={styles.buttonsContainer} >
                        <Button
                            onPress={() => console.log('register')}
                            title="Register"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5ccf0a',
    },
    innerContainer: {
        backgroundColor: 'white',
        flex: 1,
        margin: 20,
        paddingHorizontal: 0,
        paddingTop: 20,
        borderRadius: 3

    },
    header: {
        textAlign: 'center',
        color: '#35c535',
        fontWeight: 'bold',
        paddingBottom: 20
    },
    childContainer: {
        padding: 10,
    },
    buttonsContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingVertical: 20,
    },
    divider: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 0
    }
});
