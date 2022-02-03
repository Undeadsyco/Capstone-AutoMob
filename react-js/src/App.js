import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import useAuth from './Utils/useAuth';

import { Header, Footer, PrivateRoute, AdminRoute } from './Components';
import {
  Home, Services, Service, Booking, Signup,
  Confirmation, Login, Profile, Reports
} from './Views';
import { AppContainer } from './Styles';

import actions from './Actions';

function App(props) {
  const { checkAuth } = useAuth();
  checkAuth();

  return (
    <AppContainer className="App">
      <Header isLoggedIn={props.isLoggedIn} user={props.user} />
      <div className='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="profile" element={
              <Profile
                user={props.user}
                editDetails={props.onEditProfileDetails}
                deleteCarItem={props.onDeleteCarItem}
                deleteAddressItem={props.onDeleteAddressItem}
                addCarItem={props.onAddCarItem}
                addAddressItem={props.onAddAddressItem}
                getBookings={props.onGetUserBookings}
                userBookings={props.userBookings}
              />
            } />
            <Route path="admin/" element={<AdminRoute user={props.user} />}>
              <Route path="reports" element={
                <Reports getReports={props.onGetReports} reports={props.reports} cancelBooking={props.onCancelBooking} />
              } />
            </Route>
          </Route>
          <Route path="/login" element={<Login submit={props.onLogin} />} />
          <Route path="/sign-up" element={<Signup submit={props.onSignup} />} />
          <Route path="/services" element={<Services list={props.services} getList={props.onGetServices} />} />
          <Route path="/services/:service" element={<Service onGetService={props.onGetService} />} />
          <Route path="/booking" element={<Booking submit={props.onSubmitBooking} user={props.user} />} />
          <Route path="/booking-confirmation" element={<Confirmation />} />
        </Routes>
      </div>
      <Footer />
    </AppContainer>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user,
  services: state.services,
  userBookings: state.userBookings,
  reports: state.reports
});

const mapDispatchToProps = (dispatch) => {
  const {
    getServices, getService, submitBooking, login, addCarItem,
    editProfileDetails, deleteCarItem, deleteAddressItem, signup,
    addAdressItem, getUserBookings, getReports, cancelBooking, 
  } = actions;

  return ({
    onLogin: (name) => login(name),
    onSignup: (body) => signup(body),
    onGetServices: () => getServices().then(data => dispatch({ type: 'GET_SERVICES', data })),
    onGetService: (id) => getService(id),
    onSubmitBooking: (body) => submitBooking(body),
    onEditProfileDetails: (id, body) => editProfileDetails(id, body),
    onDeleteCarItem: (id, carId) => deleteCarItem(id, carId),
    onDeleteAddressItem: (id, addressId) => deleteAddressItem(id, addressId),
    onAddCarItem: (id, body) => addCarItem(id, body),
    onAddAddressItem: (id, body) => addAdressItem(id, body),
    onGetUserBookings: (name) => getUserBookings(name).then(data => dispatch({ type: 'GET_USER_BOOKINGS', data })),
    onGetReports: () => getReports().then(data => dispatch({ type: 'GET_REPORTS', data })),
    onCancelBooking: (id) => cancelBooking(id).then(data => dispatch({ type: 'GET_REPORTS', data })),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
