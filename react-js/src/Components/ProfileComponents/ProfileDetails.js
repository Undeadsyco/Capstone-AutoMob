import { useState } from "react";
import { useDispatch } from "react-redux";

const ProfileDetails = ({ user, editDetails, setBookingDisplay }) => {
  
  const dispatch = useDispatch();

  const [displayInput, setDisplayInput] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const submit = () => {
    editDetails(user.id, { newEmail, newNumber}).then(data => {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch({ type: 'EDIT_USER', data });
      setDisplayInput(false);
      alert('Change was successful');
    })
  }

  return (
    <div className="profileInfo">
      <h2>Welcome to your profile {user?.username}</h2>
      <h3 className="email">Email: {user?.email}</h3>
      <input
        className="emailInput"
        style={displayInput ? { display: 'initial' } : { display: "none" }}
        placeholder="Enter new email"
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <h3 className="number">Phone Number: {user?.number}</h3>
      <input
        className="numberInput"
        style={displayInput ? { display: 'initial' } : { display: "none" }}
        placeholder="Enter new phone number"
        onChange={(e) => setNewNumber(e.target.value)}
      />
      <button
        className="editBtn"
        style={displayInput ? { display: 'none' } : { display: 'initial' }}
        onClick={() => setDisplayInput(true)}
      >
        Edit
      </button>
      <button
        className="submitBtn"
        style={displayInput ? { display: 'initial' } : { display: "none" }}
        onClick={() => submit()}
      >
        Submit
      </button>
      <button
        className="cancelBtn"
        style={displayInput ? { display: 'initial' } : { display: "none" }}
        onClick={() => setDisplayInput(false)}
      >
        Cancel
      </button>
      <button
        className="bookingBtn"
        style={displayInput ? { display: 'none' } : { display: 'initial' }}
        onClick={() => setBookingDisplay(true)}
      >Bookings</button>
    </div>
  )
}

export default ProfileDetails;