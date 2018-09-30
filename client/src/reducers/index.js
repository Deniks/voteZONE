import { combineReducers } from 'redux';

import pollReducer from './pollReducer';
import subscriptionReducer from './subscriptionReducer';

const rootReducer = combineReducers({
  pollReducer,
  subscriptionReducer
});

export default rootReducer;