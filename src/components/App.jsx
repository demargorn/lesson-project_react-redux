import { useDispatch, useSelector } from 'react-redux';
import {
   ADD_SERVICE,
   REMOVE_SERVICE,
   CHANGE_SERVICE_FIELD,
   CLEAR_SERVICE_FIELD,
   EDIT_SERVICE_FIELD,
} from './actions/actionTypes';
import './App.css';

const App = () => {
   const item = useSelector((s) => s.serviceAdd);
   const items = useSelector((s) => s.serviceList);
   const dispatch = useDispatch();

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      dispatch({ type: CHANGE_SERVICE_FIELD, payload: { name, value } });
   };

   const handlerFormSubmit = (e) => {
      e.preventDefault();
      const { name, price } = item;
      dispatch({ type: ADD_SERVICE, payload: { name, price } });
      dispatch({ type: CLEAR_SERVICE_FIELD });
   };

   const handleCancel = () => {
      dispatch({ type: CLEAR_SERVICE_FIELD });
   };

   const handleItemEdit = (id) => {
      const edited = items.find((item) => item.id === id);
      const { name, price } = edited;
      dispatch({ type: EDIT_SERVICE_FIELD, payload: { name, price } });
   };

   const handleItemRemove = (id) => {
      dispatch({ type: REMOVE_SERVICE, payload: { id } });
   };

   return (
      <section className='container-md'>
         <form className='form' onSubmit={handlerFormSubmit}>
            <div className='mb-3 input-div'>
               <input
                  type='text'
                  name='name'
                  value={item.name}
                  onChange={handleInputChange}
                  className='form-control'
               />
            </div>
            <div className='mb-3 input-div'>
               <input
                  type='text'
                  name='price'
                  value={item.price}
                  onChange={handleInputChange}
                  className='form-control'
               />
            </div>
            <button type='submit' className='btn btn-primary form-btn'>
               Save
            </button>
            <button type='button' onClick={handleCancel} className='btn btn-danger form-btn'>
               Cancel
            </button>
         </form>

         <ul className='list'>
            {items.map((i) => (
               <li key={i.id} className='item'>
                  <span className='item-name'>{i.name}</span>
                  <span className='item-price'>{i.price}</span>
                  <button onClick={() => handleItemEdit(i.id)} className='btn btn-info item-btn'>
                     edit
                  </button>
                  <button
                     onClick={() => handleItemRemove(i.id)}
                     className='btn btn-danger item-btn'
                  >
                     remove
                  </button>
               </li>
            ))}
         </ul>
      </section>
   );
};

export default App;
