import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import registration from './registrationReducer';
import user from './userReducer';

const config = {
      key: 'primary',
      storage: AsyncStorage,
};

export default persistCombineReducers(config,
    {
        registration,
        user
    });
