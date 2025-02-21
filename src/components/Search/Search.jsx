const Search = ({ onSearch, onSubmit }) => {
   const handleSeachChange = (e) => {
      e.preventDefault();
      const { value } = e.target;
      onSearch(value);
   };

   return (
      <form className='search-form' onSubmit={onSubmit}>
         <div className='mb-3 search-input'>
            <input
               type='text'
               name='search'
               onChange={handleSeachChange}
               className='form-control search-field'
               placeholder='что хотите найти?'
            />
         </div>
      </form>
   );
};

export default Search;
