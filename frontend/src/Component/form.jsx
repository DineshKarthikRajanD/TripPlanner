import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [packageTitle, setPackageTitle] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [features, setFeatures] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [amount, setAmount] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { title, price, duration, features, imageUrl } = location.state || {};
    if (title) setPackageTitle(title);
    if (price) {
      setPrice(price);
      setAmount(price); // Set amount based on package price
    }
    if (duration) setDuration(duration);
    if (features) setFeatures(features);
    if (imageUrl) setImageUrl(imageUrl);
  }, [location]);

  const storePaymentDetails = async (paymentId) => {
    try {
      const response = await axios.post("http://localhost:5000/payment", {
        name,
        mobile,
        email,
        packageTitle,
        paymentId,
        amount,
      });
      console.log("Payment details stored:", response.data);
      toast.success("Payment details stored successfully!");
    } catch (error) {
      console.error("Error storing payment details:", error.response || error);
      toast.error(
        "Failed to store payment details: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  const handleSubmit = async () => {
    const customerData = {
      name,
      mobile,
      email,
      packageTitle,
    };

    console.log("Sending customer data:", customerData); // Log the data being sent

    try {
      const response = await axios.post(
        "http://localhost:5000/customer",
        customerData
      );
      toast.success(`Thanks for Booking ${name}`);
      console.log(response);

      // Clear form fields
      setName("");
      setMobile("");
      setEmail("");
      setAmount("");

      navigate("/booked-packages"); // Redirect to booked packages page
    } catch (error) {
      console.error("Error occurred:", error.response || error);
      toast.error(
        "An error occurred while submitting the form: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  const handlePayment = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const options = {
      key: "rzp_test_4rdgre6savrrmw",
      amount: amount * 100, // Convert to paise
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "For testing purpose",
      handler: async function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
        await storePaymentDetails(response.razorpay_payment_id); // Store payment details
        await handleSubmit(); // Call submit function after successful payment
      },
      prefill: {
        name: name,
        email: email,
        contact: mobile,
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="flex">
      <div className="md:w-1/2 bg-blue-50 rounded-lg shadow-md p-4 mt-5 mb-[500px] ml-32">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
          Package Details
        </h2>
        <div className="mb-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Package Title
          </label>
          <div className="p-2 rounded-lg w-full">
            <h3 className="text-lg font-bold text-blue-700">{packageTitle}</h3>
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Price
          </label>
          <div className="p-2 rounded-lg w-full">
            <p className="text-lg font-bold text-blue-700">{`₹ ${price}`}</p>
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Duration
          </label>
          <div className="p-2 rounded-lg w-full">
            <p className="text-lg font-bold text-blue-700">{duration}</p>
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Features
          </label>
          <ul className="list-disc list-inside p-2 rounded-lg w-full">
            {features.length > 0 ? (
              features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))
            ) : (
              <li className="text-gray-700">No features available.</li>
            )}
          </ul>
        </div>
        <div className="mb-4">
          <img
            src={imageUrl}
            alt={packageTitle}
            className="w-full h-32 object-cover rounded-lg my-2 shadow-lg"
          />
        </div>
      </div>

      <div className="md:w-96 p-4 min-h-[200px] mt-16 mb-[90vh] ml-20 mr-16 bg-gradient-to-br from-blue-200 to-blue-500 shadow-2xl rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
          Booking Form
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-0">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              className="border-2 border-gray-400 p-2 rounded-lg w-full focus:outline-none focus:border-blue-500 hover:border-gray-600 transition duration-300"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-bold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              className="border-2 border-gray-400 p-2 rounded-lg w-full focus:outline-none focus:border-blue-500 hover:border-gray-600 transition duration-300"
              name="mobile"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="border-2 border-gray-400 p-2 rounded-lg w-full focus:outline-none focus:border-blue-500 hover:border-gray-600 transition duration-300 lowercase"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <input type="hidden" value={packageTitle} name="packageTitle" />

          <div className="mb-2">
            <label
              htmlFor="amount"
              className="block text-gray-700 font-bold mb-2"
            >
              Amount
            </label>
            <input
              type="number"
              className="border-2 border-gray-400 p-2 rounded-lg w-full focus:outline-none focus:border-blue-500 hover:border-gray-600 transition duration-300"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <button
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-300"
            onClick={handlePayment}
          >
            Proceed to Payment
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Form;
