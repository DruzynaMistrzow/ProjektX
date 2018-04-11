import { DrawerNavigator } from 'react-navigation';

import { MainScreen, MapScreen, RankingScreen } from '../screens';


const MainNavigator = DrawerNavigator(
    {
        main: {
            screen: MainScreen
        },
        map: {
            screen: MapScreen
        },
        ranking: {
            screen: RankingScreen
        }
    },
    {
        initialRouteName: 'main',
        swipeEnabled: true,
        animationEnabled: false,
    }
);

export default MainNavigator;
