import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { MainScreen, MapScreen, RankingScreen } from '../screens';
import Drawer from './Drawer';

const getIcon = (iconName) => <Ionicons name={iconName} size={35} />;

const MainNavigator = DrawerNavigator(
    {
        Account: {
            screen: MainScreen,
            navigationOptions: {
                drawerIcon: getIcon('ios-contact')
            },
        },
        Map: {
            screen: MapScreen,
            navigationOptions: {
                drawerIcon: getIcon('ios-map')
            },
        },
        Ranking: {
            screen: RankingScreen,
            navigationOptions: {
                drawerIcon: getIcon('md-trophy')
            },
        }
    },
    {
        initialRouteName: 'Account',
        swipeEnabled: true,
        animationEnabled: false,
        drawerWidth: 225,
        contentComponent: Drawer,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        contentOptions: {
            labelStyle: { fontSize: 18 },
            iconContainerStyle: { width: 35 },
        },
    }
);

export default MainNavigator;
