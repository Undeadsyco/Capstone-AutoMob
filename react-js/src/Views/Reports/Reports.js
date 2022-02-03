import { useEffect, useState } from "react";

import { BookingTable, ReviewsTable, Popup } from "../../Components/ReportsComponents";
import ReportsContainer from './styles';

const Reports = ({ getReports, reports, cancelBooking }) => {
  const [tableDisplay, setTableDisplay] = useState('bookings');
  const [details, setDetails] = useState(undefined);
  const [popup, openPopup] = useState(false);

  const handleClick = (item) => {
    openPopup(true);
    setDetails(item);
  }

  useEffect(() => {
    getReports()
  }, [getReports])

  const setCost = (service) => {
    switch (service) {
      case 'Preventive Maintenance':
        return 5000;
      case 'Car Care':
        return 4500;
      case 'Body Repair':
        return 7000;
      default:
        return 0;
    }
  }

  return (
    <ReportsContainer className="multiGrid" rows={12} cols={12}>
      <h2>Reports</h2>
      <button className="appointmentBtn" onClick={() => setTableDisplay('bookings')}>Appointments</button>
      <button className="reviewBtn" onClick={() => setTableDisplay('reviews')}>Reviews</button>
      {tableDisplay === 'bookings' &&
        <BookingTable
          list={reports?.bookings}
          setCost={setCost}
          handleClick={handleClick}
        />
      }
      {tableDisplay === 'reviews' && <ReviewsTable list={reports?.reviews} />}
      {popup && 
        <div className="bookingDetails">
          <Popup details={details} openPopup={openPopup} cancelBooking={cancelBooking} />
        </div>
      }
    </ReportsContainer>
  );
};

export default Reports;
