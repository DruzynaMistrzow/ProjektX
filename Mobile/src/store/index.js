import { applyMiddleware, compose, createStore} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers';


const store = createStore(reducers,
    compose(applyMiddleware(thunk, promise(), logger))
    );

export default store;
