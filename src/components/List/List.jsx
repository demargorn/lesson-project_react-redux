import { useSelector } from 'react-redux';

const List = ({ onItemEdit, onItemRemove }) => {
   const { query, data } = useSelector((s) => s.serviceList);
   const items = query ? data.filter((s) => s.name.toLowerCase().includes(query)) : data;

   return (
      <ul className='list'>
         {items.map((i) => (
            <li key={i.id} className='item'>
               <span className='item-name'>{i.name}</span>
               <span className='item-price'>{i.price}</span>
               <div className='button-controll'>
                  <button onClick={() => onItemEdit(i.id)} className='btn btn-info item-btn'>
                     edit
                  </button>
                  <button onClick={() => onItemRemove(i.id)} className='btn btn-danger item-btn'>
                     remove
                  </button>
               </div>
            </li>
         ))}
      </ul>
   );
};

export default List;
