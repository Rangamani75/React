import { useContext } from "react";
import { UserContext } from "../UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Profile;
