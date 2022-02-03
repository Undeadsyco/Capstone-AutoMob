import { v4 } from "uuid";

const BookingTable = ({ list, setCost, handleClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Booking Id</th>
          <th>Customer Name</th>
          <th>Service Type</th>
          <th>Service Date</th>
          <th>Cost</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {list?.map(item => (
          <tr key={v4()}>
            <td>{item.id}</td>
            <td>{item.user.name}</td>
            <td>{item.service}</td>
            <td>{new Date(item.date).toDateString()}</td>
            <td>{setCost(item.service)}</td>
            <td>
              <button onClick={() => handleClick(item)}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
