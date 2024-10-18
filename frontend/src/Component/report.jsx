import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Report() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userdata = await axios.get("http://localhost:5000/userdata");
        console.log(userdata.data);
        setUser(userdata.data);
      } catch (error) {
        setError("Error fetching data: " + error.message);
        console.log("Error fetching data", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched or failed
      }
    };

    fetchData();
  }, []);

  // Handle delete user action
  async function handleDelete(email) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/userDelete/${email}`);
        console.log("Successfully deleted");

        // Refresh the list after deletion
        setUser(user.filter((data) => data.email !== email));
      } catch (error) {
        setError("Error deleting user: " + error.message);
        console.log("Error deleting user", error);
      }
    }
  }

  // Handle update user action (redirect to update page)
  function handleUpdate(email) {
    navigate("/update", { state: { email } });
  }

  return (
    <div className="container mx-auto pb-5">
      {loading ? (
        <p>Loading...</p> // Show loading state
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : user.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {user.map((data, index) => (
            <div
              key={data.id || index}
              className="p-5 bg-blue-950 text-white rounded-lg"
            >
              <h1>{data.name}</h1>
              <h1>{data.email}</h1>
              <h1>{data.mobile}</h1>
              <div className="flex justify-between mt-3">
                <button
                  className="p-2 bg-lime-500"
                  onClick={() => handleUpdate(data.email)}
                >
                  Update
                </button>
                <button
                  className="p-2 bg-red-500"
                  onClick={() => handleDelete(data.email)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Report;
