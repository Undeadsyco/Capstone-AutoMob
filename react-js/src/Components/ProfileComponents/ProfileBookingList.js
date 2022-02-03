import { v4 } from "uuid";

const ProfileBookingList = ({ bookingDisplay, setBookingDisplay, list }) => {
  
  const dateDif = (date1, date2) => {
    const dif = date1 - date2;
    return <p>{dif} days till appointment</p>
  }
  return (
    <div style={bookingDisplay ? { display: 'flex' } : { display: 'none' }} className="bookingList">
      <div>
        <h2>Upcomming Appointments</h2>
        <hr />
        <div>
          <ul>
            <li>
              <p>
                <span><b>Car</b></span>
                <span><b>Service</b></span>
                <span><b>Date</b></span>
              </p>
            </li>
            {list?.map(item => (
              <li key={v4()}>
                <p>
                  <span>{item.car.make}, {item.car.model}</span>
                  <span>{item.service}</span>
                  <span>
                    {new Date(item.date).toDateString()}<br />
                    {new Date(item.date) < new Date() && <span>passed</span>}
                    {new Date(item.date) > new Date() && dateDif(new Date(item.date).getDate(), new Date().getDate())}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => setBookingDisplay(false)}>Close</button>
      </div>
    </div>
  );
};

export default ProfileBookingList;
