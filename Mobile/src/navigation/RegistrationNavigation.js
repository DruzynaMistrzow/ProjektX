import { StackNavigator } from 'react-navigation';

import { RegistrationScreen } from '../screens';

const RegistrationNavigator = StackNavigator(
    {
        registration: {
            screen: RegistrationScreen
        }
    },
    {
        initialRouteName: 'registration',
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'white'
        }
    }
);

export default RegistrationNavigator;
