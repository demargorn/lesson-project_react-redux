import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
   ADD_SERVICE,
   REMOVE_SERVICE,
   EDIT_SERVICE,
   FILTER_SERVICE,
   INITIAL_SERVICE,
   CHANGE_SERVICE_FIELD,
   CLEAR_SERVICE_FIELD,
   EDIT_SERVICE_FIELD,
} from '../actions/actionTypes';
import Form from './Form/Form';
import Search from './Search/Search';
import List from './List/List';
import './App.css';

const App = () => {
   const [isEdited, setIsEdited] = useState(false); //  состояние: редактируется / не редактируется
   const item = useSelector((s) => s.serviceAdd); // состояние формы
   const items = useSelector((s) => s.serviceList.data); // состояние элементов списка
   const dispatch = useDispatch();

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      dispatch({ type: CHANGE_SERVICE_FIELD, payload: { name, value } });
   };

   const handleFormSubmit = (e) => {
      e.preventDefault();

      const { name, price } = item;
      const idx = items.findIndex((item) => item.name === name); // ищем индекс повторяющегося элемента

      if (idx > -1) {
         dispatch({ type: EDIT_SERVICE, payload: { id: idx, name, price } });
      } else {
         dispatch({ type: ADD_SERVICE, payload: { name, price } });
      }
      dispatch({ type: CLEAR_SERVICE_FIELD });
      setIsEdited(false); // заканчиваем редактирование
   };

   const handleCancel = () => {
      setIsEdited(false); // заканчиваем редактирование
      dispatch({ type: CLEAR_SERVICE_FIELD });
   };

   const handleItemEdit = (id) => {
      setIsEdited(true); // начинаем редактирование
      const isEdited = items.find((item) => item.id === id); // ищем редактируемый элемент
      const { name, price } = isEdited;
      dispatch({ type: EDIT_SERVICE_FIELD, payload: { name, price } });
   };

   const handleItemRemove = (id) => {
      // если удаляем элемент во время редактирования
      if (isEdited) {
         dispatch({ type: CLEAR_SERVICE_FIELD });
      }
      dispatch({ type: REMOVE_SERVICE, payload: { id } });
      setIsEdited(false);
   };

   const handleSearchItems = (value) => {
      if (value.trim() === '') {
         dispatch({ type: INITIAL_SERVICE });
      }
      dispatch({ type: FILTER_SERVICE, payload: { value } });
   };

   const handleSearchSubmit = (e) => {
      e.preventDefault(); // отменяем отправку по Enter
   };

   return (
      <section className='container app-container'>
         <Form
            isEdited={isEdited}
            onFormSubmit={handleFormSubmit}
            onInputChange={handleInputChange}
            onCancel={handleCancel}
         />
         <Search onSearch={handleSearchItems} onSubmit={handleSearchSubmit} />
         <List onItemEdit={handleItemEdit} onItemRemove={handleItemRemove} />
      </section>
   );
};

export default App;
