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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="border-2 "
          name="name"
          id="name"
          value={name} // Bind value to state
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="number"
          className="border-2 "
          name="mobile"
          id="mobile"
          value={mobile} // Bind value to state
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="border-2 "
          name="email"
          id="email"
          value={email} // Bind value to state
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-blue-800 text-white rounded-2xl p-5"
        />
      </form>
      <ToastContainer />
      <Link to="/report">
        <button className="p-2 bg-lime-500 mt-3 ml-60">Report</button>
      </Link>
    </>
  );
}

export default Form;
