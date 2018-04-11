import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DrawerItems} from 'react-navigation';


const Drawer = (props) => (
    <View style={styles.drawerContainer}>
        <View style={styles.drawerHeaderContainer}>
            <Text style={styles.drawerHeaderText}>MENU</Text>
        </View>
        <DrawerItems {...props} />
    </View>
);

export default Drawer;

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
    },
    drawerHeaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#d4d3cf',
        padding: 15,
    },
    drawerHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
