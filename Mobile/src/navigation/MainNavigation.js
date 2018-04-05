import { DrawerNavigator } from 'react-navigation';

import { MainScreen, MapScreen } from '../screens';


const MainNavigator = DrawerNavigator(
    {
        main: {
            screen: MainScreen
        },
        map: {
            screen: MapScreen
        }
    },
    {
        initialRouteName: 'main',
        swipeEnabled: true,
        animationEnabled: false,
    }
);

export default MainNavigator;
