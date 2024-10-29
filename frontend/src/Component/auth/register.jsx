import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};

    // Name validation
    if (!formData.name) {
      errors.name = "Name is required";
    }

    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)
    ) {
      errors.password =
        "Password must be 8 characters, include 1 uppercase, 1 lowercase, 1 digit, and 1 special character";
    }

    // Mobile validation
    if (!formData.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data?.message);
      alert(err.response?.data?.message || "Error during registration");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className={`w-full p-2 mb-1 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded focus:outline-none focus:ring focus:ring-blue-400`}
        />
        {errors.name && <p className="text-red-500 text-sm mb-4">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className={`w-full p-2 mb-1 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded focus:outline-none focus:ring focus:ring-blue-400`}
        />
        {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className={`w-full p-2 mb-1 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded focus:outline-none focus:ring focus:ring-blue-400`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-4">{errors.password}</p>
        )}

        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          onChange={handleChange}
          required
          className={`w-full p-2 mb-1 border ${
            errors.mobile ? "border-red-500" : "border-gray-300"
          } rounded focus:outline-none focus:ring focus:ring-blue-400`}
        />
        {errors.mobile && <p className="text-red-500 text-sm mb-4">{errors.mobile}</p>}

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
