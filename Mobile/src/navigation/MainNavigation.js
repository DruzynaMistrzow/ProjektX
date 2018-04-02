import { DrawerNavigator } from 'react-navigation';

import { MainScreen } from '../screens';

const MainNavigator = DrawerNavigator(
    {
        main: {
            screen: MainScreen,
            path: 'MainScreen',
        }
    },
    {
        initialRouteName: 'main',
        swipeEnabled: true,
        animationEnabled: false,
    }
);

export default MainNavigator;
