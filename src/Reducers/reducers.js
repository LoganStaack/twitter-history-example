import { combineReducers } from 'redux';
import History from './History';

const rootReducers = combineReducers({ history: History });

export default rootReducers;
