import { legacy_createStore as createStore, combineReducers } from 'redux';
import serviceAddReducer from './serviceAdd';
import serviceListReducer from './serviceList';

const reducer = combineReducers({
   serviceList: serviceListReducer,
   serviceAdd: serviceAddReducer,
});

const store = createStore(reducer);
export default store;
