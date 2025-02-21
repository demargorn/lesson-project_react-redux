import {
   CHANGE_SERVICE_FIELD,
   CLEAR_SERVICE_FIELD,
   EDIT_SERVICE_FIELD,
} from '../actions/actionTypes';

const initialState = {
   name: '',
   price: '',
};

function serviceAddReducer(state = initialState, action) {
   switch (action.type) {
      case CHANGE_SERVICE_FIELD: {
         const { name, value } = action.payload;
         return { ...state, [name]: value };
      }
      case EDIT_SERVICE_FIELD: {
         const { name, price } = action.payload;
         return { ...state, name, price };
      }
      case CLEAR_SERVICE_FIELD: {
         return { ...state };
      }
      default: {
         return state;
      }
   }
}

export default serviceAddReducer;
