import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

const ProfileCarList = ({ userId, list, deleteItem }) => {
  const dispatch = useDispatch();

  const handleClick = (carId) => {
    deleteItem(userId, carId).then(data => {
      dispatch({ type: 'EDIT_USER', data });
      localStorage.setItem('user', JSON.stringify(data));
      alert('Car was deleted successfully');
    })
  }

  return (
    <div className="carsList listContainer">
      <h4 className='listTitle'>Your Registerd Cars</h4>
      <hr />
      <ul className='list'>
        {list?.map(item => (
          <li key={v4()}>
            <p>
              <span>{item.make}</span>
              <span>{item.model}</span>
            </p>
            <p>Miles: {item.miles}</p>
            <p>Fuel: {item.fuel}</p>
            <button onClick={() => handleClick(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCarList;
