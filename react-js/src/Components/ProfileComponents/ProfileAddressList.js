import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

const ProfileAddressList = ({ userId, list, deleteItem }) => {
  const dispatch = useDispatch();

  const handleClick = (addressId) => {
    deleteItem(userId, addressId).then(data => {
      dispatch({ type: 'EDIT_USER', data });
      localStorage.setItem('user', JSON.stringify(data));
      alert('Address was deleted successfully');
    })
  }

  return (
    <div className="addressList listContainer">
      <h4 className='listTitle'>Your Registerd Addresses</h4>
      <hr />
      <ul className='list'>
        {list?.map(item => (
          <li key={v4()}>
            <span>{item.address},</span>
            <br />
            <span>{item.city} {item.state}</span>
            <br />
            <button onClick={() => handleClick(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileAddressList;