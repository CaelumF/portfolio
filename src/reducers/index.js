import { combineReducers } from 'redux';
import tbTabReducer from './tbTabReducer';
import SidebarReducer from './SidebarReducer';
const allReducers = combineReducers({
  tbTabReducer,
  SidebarReducer
});

export default allReducers;
