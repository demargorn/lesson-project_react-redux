import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from '../actions/actionTypes';

const initialState = [
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

function serviceListReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_SERVICE: {
         const { name, price } = action.payload;
         return [...state, { id: nanoid(), name, price }];
      }
      case EDIT_SERVICE: {
         const { id, name, price } = action.payload;
         return [...state.slice(0, id), { id, name, price }, ...state.slice(id + 1)];
      }
      case REMOVE_SERVICE: {
         const { id } = action.payload;
         return state.filter((s) => s.id !== id);
      }
      default:
         return state;
   }
}

export default serviceListReducer;
