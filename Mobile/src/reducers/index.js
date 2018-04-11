import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import registration from './registrationReducer';

const config = {
      key: 'primary',
      storage: AsyncStorage,
};

export default persistCombineReducers(config, { registration });
