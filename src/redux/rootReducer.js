import { combineReducers } from 'redux';
import createReducer from './createReducer';

const reducer = combineReducers({
  ActivityListViewer: createReducer('GET_ACTIVITY_LIST'),
});

export default reducer;
