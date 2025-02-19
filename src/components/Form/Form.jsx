import { useSelector } from 'react-redux';

const Form = ({ onFormSubmit, onInputChange, isEdited, onCancel }) => {
   const item = useSelector((s) => s.serviceAdd); // состояние формы

   return (
      <form className='form' onSubmit={onFormSubmit}>
         <div className='mb-3 input-div'>
            <input
               type='text'
               name='name'
               value={item.name}
               onChange={onInputChange}
               className='form-control'
               required
            />
         </div>
         <div className='mb-3 input-div'>
            <input
               type='text'
               name='price'
               value={item.price}
               onChange={onInputChange}
               className='form-control'
               required
            />
         </div>
         <button type='submit' className='btn btn-primary form-btn'>
            save
         </button>
         {isEdited && (
            <button type='button' onClick={onCancel} className='btn btn-danger form-btn'>
               cancel
            </button>
         )}
      </form>
   );
};

export default Form;
