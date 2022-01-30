import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header, Footer } from './Components';
import { Home, Services, Service } from './Views';
import { AppContainer } from './Styles';

import actions from './Actions';

function App(props) {
  return (
    <AppContainer className="App">
      <Header />
      <div className='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={undefined}>
            <Route path="profile" element={undefined} />
            <Route path="admin/" element={undefined}>
              <Route path="reports" element={undefined} />
            </Route>
          </Route>
          <Route path="/login" element={undefined} />
          <Route path="/sign-up" element={undefined} />
          <Route path="/services" element={<Services list={props.services} getList={props.onGetServices} />} />
          <Route path="/services/:service" element={<Service />} />
          <Route path="/booking" element={undefined} />
          <Route path="booking-confirmation" element={undefined} />
        </Routes>
      </div>
      <Footer />
    </AppContainer>
  );
}

const mapStateToProps = (state) => ({
  services: state.services
});

const mapDispatchToProps = (dispatch) => {
  const { getServices } = actions;

  return ({
    onGetServices: () => getServices().then(data => dispatch({ type: 'GET_SERVICES', data })),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
