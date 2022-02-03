import { v4 } from "uuid";

const ReviewsTable = ({ list }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Review Id</th>
          <th>Customer Name</th>
          <th>Customer Email</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {list?.map(item => (
          <tr key={v4()}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReviewsTable;
