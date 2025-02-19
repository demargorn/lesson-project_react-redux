import { useState } from 'react';
import { useSelector } from 'react-redux';

const Search = ({ onSearch }) => {
   const [value, setValue] = useState(''); // состояние формы поиска
   const items = useSelector((s) => s.serviceList); // состояние элементов списка

   const handlerSeachChange = (e) => {
      e.preventDefault();
      onSearch(items, value);
      setValue(e.target.value);
   };

   console.log(value);

   return (
      <form className='search-form'>
         <div className='mb-3 search-input'>
            <input
               type='text'
               name='search'
               value={value}
               onChange={handlerSeachChange}
               className='form-control search-field'
               placeholder='что хотите найти?'
            />
         </div>
      </form>
   );
};

export default Search;
