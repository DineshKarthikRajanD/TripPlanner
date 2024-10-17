import React from "react";
import "../kodaikanal/kodaikanal.css";
import { Link } from "react-router-dom";

const dindigul = () => {
  return (
    <div>
      <div className="full">
        <div className="main">
          <h1>Package</h1>
          <div>
            <p id="p1">
              Ready for your Dindigul adventure? Pick Your Package and start
              planning your perfect trip today!
            </p>
          </div>
        </div>

        <div className="image">
          <img
            src="https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823020.jpg?t=st=1729192570~exp=1729196170~hmac=b5b36ba8ae4d13b09dcfe0343acf4ae7ea5c88c5f7ec578a33b5f819d4fe54a9&w=2000"
            alt=""
          />
        </div>

        <div className="pack">
          <div className="pack__standard">
            <div className="pack__standard__content">
              <h2>Historical & Fort Tour Package - Dindigul</h2>
              <h2>₹4,000 per person (2 days / 1 night)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided tours.
              </p>
              <p>
                ✔️ Visit to Dindigul Fort: Explore the ancient hill fort with
                panoramic city views.
              </p>
              <p>
                ✔️ Visit to the Begumpur Mosque: A glimpse into the rich history
                of Dindigul.
              </p>
              <p>
                ✔️ Stroll through the local markets for a taste of Dindigul's
                famous biryani.
              </p>
              <p>✔️ Stay in a heritage hotel or guesthouse.</p>
              <p>
                ✔️ Additional Activities: Local food tours, historical site
                exploration, and photography at scenic spots.
              </p>
            </div>
            <Link to="/form">
              <button>
                Book Now<i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>

          <div className="pack__standard">
            <div className="pack__standard__content">
              <h2>Adventure & Nature Tour Package - Dindigul</h2>
              <h2>₹6,500 per person (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided nature
                tours.
              </p>
              <p>
                ✔️ Trek to Sirumalai Hills: A scenic adventure with breathtaking
                views.
              </p>
              <p>
                ✔️ Visit to Kamarajar Lake for a peaceful day amidst nature.
              </p>
              <p>✔️ Stay in an eco-friendly lodge or nature resort.</p>
              <p>
                ✔️ Additional Activities: Bird watching, nature walks, and
                photography at the hill stations.
              </p>
            </div>
            <Link to="/form">
              <button>
                Book Now<i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>

          <div className="pack__standard">
            <div className="pack__standard__content">
              <h2>Spiritual & Wellness Package - Dindigul</h2>
              <h2>₹9,000 per person (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided spiritual
                experiences.
              </p>
              <p>
                ✔️ Visit to Thadikombu Perumal Temple: A spiritual experience
                amidst the peaceful surroundings.
              </p>
              <p>✔️ Yoga and meditation sessions at a serene retreat center.</p>
              <p>✔️ Ayurvedic spa treatments to relax and rejuvenate.</p>
              <p>✔️ Stay at a wellness retreat or boutique resort.</p>
              <p>
                ✔️ Additional Activities: Visit to Dindigul Fort for a quiet
                walk and spiritual contemplation.
              </p>
            </div>
            <Link to="/form">
              <button>
                Book Now<i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>

          <div className="pack__standard">
            <div className="pack__standard__content">
              <h2>Family Fun Package - Dindigul</h2>
              <h2>₹12,000 for a family of 4 (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes family-friendly accommodation, transportation, and
                activities for kids.
              </p>
              <p>✔️ Picnic at Kodaikanal Hills, just a short drive away.</p>
              <p>
                ✔️ Visit to Silver Cascade Waterfalls, perfect for a family
                outing.
              </p>
              <p>✔️ Stay at a family resort with activities for children.</p>
              <p>
                ✔️ Additional Activities: Local farm visits, nature walks, and
                fun sightseeing.
              </p>
            </div>
            <Link to="/form">
              <button>
                Book Now<i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>

          <div className="pack__standard">
            <div className="pack__standard__content">
              <h2>Luxury Getaway Package - Dindigul</h2>
              <h2>₹15,000 per couple (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes luxury accommodation, gourmet dining, and private
                tours.
              </p>
              <p>
                ✔️ Stay at a luxury resort with stunning views of the hills.
              </p>
              <p>
                ✔️ Enjoy a private tour of Dindigul Fort and historical sites.
              </p>
              <p>
                ✔️ Indulge in gourmet dining at hilltop restaurants with scenic
                views.
              </p>
              <p>
                ✔️ Additional Activities: Private yoga sessions, spa treatments,
                and sunset photography tours.
              </p>
            </div>
            <Link to="/form">
              <button>
                Book Now<i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dindigul;
