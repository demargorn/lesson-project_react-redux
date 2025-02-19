import { useSelector } from 'react-redux';

const List = ({ onItemEdit, onItemRemove }) => {
   const items = useSelector((s) => s.serviceList); // состояние элементов списка

   return (
      <ul className='list'>
         {items.map((i) => (
            <li key={i.id} className='item'>
               <span className='item-name'>{i.name}</span>
               <span className='item-price'>{i.price}</span>
               <button onClick={() => onItemEdit(i.id)} className='btn btn-info item-btn'>
                  edit
               </button>
               <button onClick={() => onItemRemove(i.id)} className='btn btn-danger item-btn'>
                  remove
               </button>
            </li>
         ))}
      </ul>
   );
};

export default List;
