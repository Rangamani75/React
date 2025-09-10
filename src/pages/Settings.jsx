import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";

function Settings() {
  const { user, updateUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    setFormData({ name: user.name, email: user.email });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Email: </label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>Update</button>
      </form>
    </div>
  );
}

export default Settings;
