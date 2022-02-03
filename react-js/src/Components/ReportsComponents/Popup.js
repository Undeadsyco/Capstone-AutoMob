const Popup = ({ details, openPopup, cancelBooking }) => {

  const handleClick = () => {
    cancelBooking(details.id);
    alert('Booking was canceled successfully')
    openPopup(false);
  }
  return (
    <div>
      <div>
        <div className="cusomer">
          <h2>Customer Name: {details.user.name}</h2>
          <h3>Customer Email: {details.user.email}</h3>
          <h3>Customer Number: {details.user.number}</h3>
        </div>
        <div className="car">
          <h2>Car</h2>
          <h3>Make: {details.car.make}</h3>
          <h3>Model: {details.car.model}</h3>
          <h3>Current Mileage: {details.car.miles}</h3>
          <h3>Fuel: {details.car.fuel}</h3>
        </div>
        <div className="service">
          <h3>Service Type: {details.service}</h3>
          <h3>Service Date: {new Date(details.date).toDateString()}</h3>
        </div>
      </div>
      <button className="cancel" onClick={() => handleClick()} >Cancel Appointment</button>
      <button onClick={() => openPopup(false)}>Close</button>
    </div>
  );
};

export default Popup;
