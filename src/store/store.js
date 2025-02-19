import { legacy_createStore as createStore, combineReducers } from 'redux';
import serviceAddReducer from './serviceAdd';
import serviceListReducer from './serviceList';

const reducer = combineReducers({
   serviceList: serviceListReducer,
   serviceAdd: serviceAddReducer,
});

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
