import { useEffect, useState } from 'react';
import {
  ProfileDetails, CarsList, AddressList, FormContainer, BookingList
} from '../../Components/ProfileComponents';
import ProfileContainer from "./styles";

const Profile = (props) => {
  const [bookingDisplay, setBookingDisplay] = useState(false);
  const {
    user, editDetails, deleteCarItem, deleteAddressItem,
    addCarItem, addAddressItem, getBookings, userBookings
  } = props;

  useEffect(() => {
    getBookings(user?.username)
  }, [getBookings, user])

  return (
    <ProfileContainer className="multiGrid" width="80%" rows={12} cols={12}>
      <ProfileDetails user={user} editDetails={editDetails} setBookingDisplay={setBookingDisplay} />
      <CarsList userId={user?.id} list={user?.cars} deleteItem={deleteCarItem} />
      <AddressList userId={user?.id} list={user?.address} deleteItem={deleteAddressItem} />
      <FormContainer userId={user?.id} addCarItem={addCarItem} addAddressItem={addAddressItem} />
      <BookingList 
        bookingDisplay={bookingDisplay}
        setBookingDisplay={setBookingDisplay}
        list={userBookings}
      />
    </ProfileContainer>
  );
};

export default Profile;
