import { combineReducers } from 'redux';
import dashboardStats from './dashboard.reducer';

const rootReducer = combineReducers({
  dashboardStats,
});

export default rootReducer;
