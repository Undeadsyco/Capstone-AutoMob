import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import useAuth from './Utils/useAuth';

import { Header, Footer, PrivateRoute, AdminRoute } from './Components';
import { 
  Home, Services, Service, Booking, Confirmation, Login, Profile,
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
            <Route path="profile" element={<Profile user={props.user} />} />
            <Route path="admin/" element={<AdminRoute user={props.user} />}>
              <Route path="reports" element={undefined} />
            </Route>
          </Route>
          <Route path="/login" element={<Login submit={props.onLogin} />} />
          <Route path="/sign-up" element={undefined} />
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
});

const mapDispatchToProps = (dispatch) => {
  const { getServices, getService, submitBooking, login } = actions;

  return ({
    onLogin: (name) => login(name),
    onGetServices: () => getServices().then(data => dispatch({ type: 'GET_SERVICES', data })),
    onGetService : (id) => getService(id),
    onSubmitBooking: (body) => submitBooking(body),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
