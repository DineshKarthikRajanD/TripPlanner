import React from "react";
import "../kodaikanal/kodaikanal.css";
import { Link } from "react-router-dom";

const Madurai = () => {
  return (
    <div>
      <div className="full">
        <div className="main">
          <h1>Package</h1>
          <div>
            <p id="p1">
              Ready for your Madurai adventure? Pick Your Package and start
              planning your perfect trip today!
            </p>
          </div>
        </div>

        <div className="image">
          <img
            src="https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297197.jpg?t=st=1729192394~exp=1729195994~hmac=b6dfcd4f509bdf1750fc0260fbcea8911354277d4a4210e0360ef259b0e75415&w=2000"
            alt=""
          />
        </div>

        <div className="pack">
          <div className="pack__standard">
            <div className="pack__standard__content">
              <h2>Cultural Heritage Tour Package - Madurai</h2>
              <h2>₹5,500 per person (2 days / 1 night)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided cultural
                tours.
              </p>
              <p>
                ✔️ Visit to Meenakshi Amman Temple: A spiritual journey through
                one of India's oldest temples.
              </p>
              <p>
                ✔️ Explore Thirumalai Nayakkar Mahal: Experience royal
                architecture.
              </p>
              <p>✔️ Visit to Koodal Azhagar Temple: A hidden gem of Madurai.</p>
              <p>✔️ Stay in a heritage hotel or traditional guesthouse.</p>
              <p>
                ✔️ Additional Activities: Temple rituals, cultural performances,
                and local handicrafts shopping.
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
              <h2>Pilgrimage Tour Package - Madurai</h2>
              <h2>₹6,500 per person (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and a pilgrimage
                guide.
              </p>
              <p>
                ✔️ Visit to Meenakshi Amman Temple: Attend the famous temple
                ceremony.
              </p>
              <p>
                ✔️ Alagar Koyil Temple: Explore the scenic and spiritual site.
              </p>
              <p>
                ✔️ Pazhamudircholai: A peaceful hill temple surrounded by
                nature.
              </p>
              <p>✔️ Attend evening aarti and spiritual rituals.</p>
              <p>✔️ Stay in a peaceful retreat or pilgrim lodge.</p>
              <p>
                ✔️ Additional Activities: Meditation sessions, spiritual
                discourses, and local temple food experiences.
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
              <h2>Adventure & Nature Tour Package - Madurai</h2>
              <h2>₹8,000 per person (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided nature
                tours.
              </p>
              <p>
                ✔️ Trek to Samanar Hills: Explore ancient Jain caves and enjoy a
                panoramic view of the city.
              </p>
              <p>✔️ Visit to Vaigai Dam: A peaceful spot for nature lovers.</p>
              <p>✔️ Trekking and sightseeing in the Alagar Hills.</p>
              <p>✔️ Stay in a nature resort or eco-friendly lodge.</p>
              <p>
                ✔️ Additional Activities: Bird watching, village tours, and
                nature walks.
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
              <h2>Family Fun Package - Madurai</h2>
              <h2>₹15,000 for a family of 4 (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes family-friendly accommodation, activities for kids,
                and transportation.
              </p>
              <p>
                ✔️ Visit to Meenakshi Temple for a cultural experience suitable
                for all ages.
              </p>
              <p>
                ✔️ Gandhi Memorial Museum: Learn about the history of India’s
                independence.
              </p>
              <p>✔️ Vaigai River: Enjoy a peaceful family picnic.</p>
              <p>✔️ Stay in a family resort with activities for children.</p>
              <p>
                ✔️ Additional Activities: Heritage walks, fun activities for
                kids, and local markets tour.
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
              <h2>Luxury & Wellness Package - Madurai</h2>
              <h2>₹20,000 per couple (4 days / 3 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes luxury accommodation, spa treatments, and gourmet
                dining experiences.
              </p>
              <p>✔️ Stay at a luxury resort with personalized services.</p>
              <p>
                ✔️ Ayurvedic spa treatments for relaxation and rejuvenation.
              </p>
              <p>
                ✔️ Visit to the Meenakshi Temple followed by a private tour.
              </p>
              <p>
                ✔️ Enjoy exclusive fine dining at the best restaurants in
                Madurai.
              </p>
              <p>
                ✔️ Additional Activities: Private yoga sessions, cultural tours,
                and luxury shopping.
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

export default Madurai;
