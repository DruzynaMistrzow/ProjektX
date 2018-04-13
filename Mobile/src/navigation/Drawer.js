import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DrawerItems} from 'react-navigation';
import Divider from "../components/Divider";


const Drawer = (props) => (
    <View style={styles.drawerContainer}>
        <View style={styles.drawerHeaderContainer}>
            <Text style={styles.drawerHeaderText}>MENU</Text>
        </View>
        <Divider />
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
        padding: 15,
    },
    drawerHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
