import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("authToken")
  );
  const [searchQuery, setSearchQuery] = useState(""); // Initialize with an empty string
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("authToken");
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (!value) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5000/api/places?query=${value}`
      );
      console.log("Search results:", response.data);
      setSearchResults(response.data || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  const filteredResults = searchResults.filter((place) =>
    place?.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handlePlaceSelect = (place) => {
    setSearchQuery(place.name);
    setSearchResults([]);
    navigate(`/${place.name}`);
  };

  const handleSearchSubmit = () => {
    setSearchQuery(" ");
    if (searchQuery) {
      navigate(`/packages/${searchQuery}`);
    }
  };

  return (
    <div>
      <nav className="flex justify-between py-3 content-center bg-slate-50 drop-shadow w-full">
        <h1 className="ml-20 text-3xl font-bold">Travigo</h1>
        <div className="flex items-center">
          <ul className="flex gap-5 font-medium mt-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/api/booked">Booked</Link>
            </li>
          </ul>

          {location.pathname !== "/form" && (
            <>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for a place"
                className="border border-gray-300 rounded p-2 ml-5"
              />
              <button
                onClick={handleSearchSubmit}
                className="ml-2 bg-teal-600 text-white rounded p-2"
                disabled={!searchQuery}
              >
                Search
              </button>
            </>
          )}
        </div>
        <div>
          <ul className="flex gap-5 mr-14 font-medium">
            {isLoggedIn ? (
              <li>
                <button className="mt-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <button className="mt-2">Login</button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <button className="bg-teal-600 p-2 rounded-2xl">
                      Sign up
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {filteredResults.length > 0 && (
        <div className="bg-white shadow-md mt-2 rounded-md">
          <ul>
            {filteredResults.map((place) => (
              <li
                key={place?._id}
                className="p-2 border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => handlePlaceSelect(place)}
              >
                {place?.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
