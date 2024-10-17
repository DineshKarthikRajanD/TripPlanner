import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom"; // Import Link

function Form() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!name || !mobile || !email) {
      toast.error("All fields are required");
      return;
    }

    try {
      const user = await axios.post("http://localhost:5000/customer", {
        name,
        mobile,
        email,
      });
      toast.success(`Thanks for Booking ${name}`);
      console.log(user);

      // Reset form fields
      setName("");
      setMobile("");
      setEmail("");
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
      console.log("error", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-8 rounded-lg shadow-md"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500 hover:border-gray-600 transition duration-300"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="mobile"
            className="block text-gray-700 font-bold mb-2"
          >
            Mobile Number
          </label>
          <input
            type="number"
            className="border-2 border-gray-400 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500 hover:border-gray-600 transition duration-300"
            name="mobile"
            id="mobile"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            className="border-2 border-gray-400 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500 hover:border-gray-600 transition duration-300"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="bg-blue-800 text-white rounded-2xl p-5 hover:bg-blue-700 transition duration-300"
          />
        </div>
      </form>

      <ToastContainer />

      <Link to="/report">
        <button className="p-3 bg-lime-500 mt-5 w-full rounded-lg text-white hover:bg-lime-600 transition duration-300">
          Report
        </button>
      </Link>
    </>
  );
}

export default Form;
