import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Report() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userdata = await axios.get("http://localhost:5000/userdata");
        console.log(userdata.data);
        setUser(userdata.data);
      } catch (error) {
        setError("Error fetching data");
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, []); // Empty array ensures this effect runs only once (on mount)

  function handleDelete(email) {
    console.log(email);
    try {
      const userDelete = axios.delete(
        `http://localhost:5000/userDelete/${email}`
      );
      console.log("successfully deleted");
    } catch (error) {
      console.log("not successfully deleted");
    }
  }

  function handleUpdate(email) {
    navigate(`/update`, { state: { email } });
  }
  return (
    <>
      <div className="container mx-auto pb-5">
        {error ? (
          <p className="text-red-500">{error}</p>
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
    </>
  );
}

export default Report;
