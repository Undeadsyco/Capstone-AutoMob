import ProfileContainer from "./styles";

const Profile = ({ user }) => {
  return (
    <ProfileContainer className="multiGrid" width="80%" rows={12} cols={12}>
      <div className="profileInfo">
        <h2>Welcome to your profile {user?.username}</h2>
        <h3 className="email">Email: {user?.email}</h3>
        <input className="emailInput" style={{ display: "none" }} placeholder="Enter new email" />
        <h3 className="number">Phone Number: {user?.number}</h3>
        <input className="numberInput" style={{ display: "none" }} placeholder="Enter new phone number" />
        <button className="editBtn">Edit</button>
        <button className="submitBtn" style={{ display: "none" }}>Submit</button>
      </div>
      <div className="carsList"></div>
      <div className="addressList"></div>
      <div className="formContainer"></div>
    </ProfileContainer>
  );
};

export default Profile;
