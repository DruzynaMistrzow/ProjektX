import { StackNavigator } from 'react-navigation';

import { RegistrationScreen } from '../screens';

const RegistrationNavigator = StackNavigator(
    {
        registration: {
            screen: RegistrationScreen,
            path: 'RegistrationScreen',
        }
    },
    {
        initialRouteName: 'main'
    }
);

export default RegistrationScreen;
