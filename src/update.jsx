import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/userUpdate/${email}`, {
        name,
        mobile,
      });
      console.log("update data send from ui");
    } catch (error) {
      console.log(error);
    }
    navigate("/report");
  };

  return (
    <div>
      <h1>Update Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="mobile">Mobile</label>
        <input
          type="number"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <label>Email</label>
        <h2>{email}</h2>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
