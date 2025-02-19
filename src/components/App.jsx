import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   ADD_SERVICE,
   REMOVE_SERVICE,
   EDIT_SERVICE,
   CHANGE_SERVICE_FIELD,
   CLEAR_SERVICE_FIELD,
   EDIT_SERVICE_FIELD,
} from '../actions/actionTypes';
import Form from './Form/Form';
import Search from './Search/Search';
import List from './List/List';
import './App.css';

const App = () => {
   const [edited, setEdited] = useState(false); //  состояние: редактируется / не редактируется
   const item = useSelector((s) => s.serviceAdd); // состояние формы
   const items = useSelector((s) => s.serviceList); // состояние элементов списка
   const dispatch = useDispatch();

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      dispatch({ type: CHANGE_SERVICE_FIELD, payload: { name, value } });
   };

   const handlerFormSubmit = (e) => {
      e.preventDefault();

      const { name, price } = item;
      const idx = items.findIndex((item) => item.name === name); // ищем индекс повторяющегося элемента

      if (idx > -1) {
         dispatch({ type: EDIT_SERVICE, payload: { id: idx, name, price } });
      } else {
         dispatch({ type: ADD_SERVICE, payload: { name, price } });
      }
      dispatch({ type: CLEAR_SERVICE_FIELD });
      setEdited(false); // заканчиваем редактирование
   };

   const handleCancel = () => {
      setEdited(false); // заканчиваем редактирование
      dispatch({ type: CLEAR_SERVICE_FIELD });
   };

   const handleItemEdit = (id) => {
      setEdited(true); // начинаем редактирование
      const edited = items.find((item) => item.id === id); // ищем редактируемый элемент
      const { name, price } = edited;
      dispatch({ type: EDIT_SERVICE_FIELD, payload: { name, price } });
   };

   const handleItemRemove = (id) => {
      // если удаляем элемент во время редактирования
      if (edited) {
         dispatch({ type: CLEAR_SERVICE_FIELD });
      }
      dispatch({ type: REMOVE_SERVICE, payload: { id } });
      setEdited(false);
   };

   const handlerSearchItems = (items, value) => {
      if (value.trim() === '') {
         return items;
      }

      return items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
   };

   return (
      <section className='container-md'>
         <Form
            edited={edited}
            onFormSubmit={handlerFormSubmit}
            onInputChange={handleInputChange}
            onCancel={handleCancel}
         />
         <Search onSearch={handlerSearchItems} />
         <List onItemEdit={handleItemEdit} onItemRemove={handleItemRemove} />
      </section>
   );
};

export default App;
