import AuthLoginReducer from './AuthReducer';
import DataReducer from './DataReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    AuthLoginReducer: AuthLoginReducer,
    DataReducer: DataReducer
})

export default rootReducer;