import { useState } from 'react';

const Search = ({ onSearch, onSubmit }) => {
   const [value, setValue] = useState(''); // состояние формы поиска

   const handlerSeachChange = (e) => {
      e.preventDefault();
      onSearch(value);
      setValue(e.target.value);
   };

   return (
      <form className='search-form' onSubmit={onSubmit}>
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
