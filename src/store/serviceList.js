import { nanoid } from 'nanoid';
import {
   ADD_SERVICE,
   REMOVE_SERVICE,
   EDIT_SERVICE,
   FILTER_SERVICE,
   INITIAL_SERVICE,
} from '../actions/actionTypes';

const data = [
   {
      id: nanoid(),
      name: 'Замена стекла',
      price: 800,
   },
   {
      id: nanoid(),
      name: 'Замена экрана',
      price: 2100,
   },
   {
      id: nanoid(),
      name: 'Замена аккумулятора',
      price: 1100,
   },
];

const initialState = {
   query: '',
   data,
};

function serviceListReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_SERVICE: {
         const { name, price } = action.payload;
         return {
            ...state,
            data: [...state.data, { id: nanoid(), name, price }],
         };
      }
      case EDIT_SERVICE: {
         const { id, name, price } = action.payload;
         return {
            ...state,
            data: [...state.data.slice(0, id), { id, name, price }, ...state.data.slice(id + 1)],
         };
      }
      case REMOVE_SERVICE: {
         const { id } = action.payload;
         return {
            ...state,
            data: state.data.filter((s) => s.id !== id),
         };
      }
      case FILTER_SERVICE: {
         const { value } = action.payload;
         return {
            ...state,
            query: value,
         };
      }
      case INITIAL_SERVICE:
         return {
            ...state,
            query: '',
         };
      default:
         return state;
   }
}

export default serviceListReducer;
