import { combineReducers } from 'redux';
import training from './trainingReducer';
import user from './userReducer';

export default combineReducers({
    training,
    user
});