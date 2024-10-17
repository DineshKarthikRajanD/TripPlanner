import React from "react";
import "../kodaikanal/kodaikanal.css";
import { Link } from "react-router-dom";

const Coimbatore = () => {
  return (
    <div>
      <div className="full">
        <div className="main">
          <h1>Package</h1>
          <div>
            <p id="p1">
              Ready for your Coimbatore adventure? Pick Your Package and start
              planning your perfect trip today!
            </p>
          </div>
        </div>

        <div className="image">
          <img
            src="https://img.freepik.com/free-photo/pak-nam-chumphon-town-fisherman-village-from-khao-matsee-viewpoint-chumphon-thailand_335224-1141.jpg?t=st=1729192672~exp=1729196272~hmac=ca3254e3d923c3bd9bdf1c0d5c509180d14059ca0ca224307834f55e79f6d945&w=2000"
            alt=""
          />
        </div>

        <div className="pack">
          <div className="pack__standard">
            <div className="pack__standard__content">
              <h2>City Explorer Tour Package - Coimbatore</h2>
              <h2>₹4,500 per person (2 days / 1 night)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided city
                tours.
              </p>
              <p>
                ✔️ Visit to Marudhamalai Temple: Explore the hilltop temple with
                panoramic views.
              </p>
              <p>✔️ G.D. Naidu Museum: A tech enthusiast’s paradise.</p>
              <p>
                ✔️ VOC Park & Zoo: Perfect for a leisurely stroll and family
                visit.
              </p>
              <p>
                ✔️ Explore the bustling local markets for shopping and street
                food.
              </p>
              <p>✔️ Stay in a centrally-located hotel or guesthouse.</p>
              <p>
                ✔️ Additional Activities: Visit to the Perur Pateeswarar Temple,
                heritage walks, and local dining experiences.
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
              <h2>Adventure & Nature Package - Coimbatore</h2>
              <h2>₹6,500 per person (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided nature
                tours.
              </p>
              <p>
                ✔️ Trekking in the Nilgiri Hills: Explore the lush green
                mountains.
              </p>
              <p>
                ✔️ Visit to Siruvani Waterfalls for a refreshing experience.
              </p>
              <p>✔️ Explore Monkey Falls near Coimbatore.</p>
              <p>✔️ Stay in an eco-lodge or nature resort.</p>
              <p>
                ✔️ Additional Activities: Wildlife safaris at the Anamalai Tiger
                Reserve, bird watching, and photography sessions.
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
              <h2>Spiritual & Wellness Retreat Package - Coimbatore</h2>
              <h2>₹10,000 per person (4 days / 3 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes luxury accommodation, wellness programs, and
                spiritual tours.
              </p>
              <p>
                ✔️ Isha Yoga Center: Experience yoga, meditation, and
                spirituality at this globally renowned center.
              </p>
              <p>
                ✔️ Dhyanalinga Temple: A unique meditation space in a serene
                environment.
              </p>
              <p>
                ✔️ Ayurvedic spa treatments for relaxation and rejuvenation.
              </p>
              <p>✔️ Stay at a wellness retreat or eco-resort.</p>
              <p>
                ✔️ Additional Activities: Organic farm visit, cultural
                performances, and private yoga sessions.
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
              <h2>Family Fun Package - Coimbatore</h2>
              <h2>₹12,500 for a family of 4 (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes family-friendly accommodation, transportation, and
                activities for kids.
              </p>
              <p>
                ✔️ Visit to Black Thunder Water Theme Park: A perfect spot for
                family fun.
              </p>
              <p>✔️ Gass Forest Museum: Educational and fun for kids.</p>
              <p>✔️ Picnic at Kovai Kutralam Waterfalls.</p>
              <p>✔️ Stay in a family resort with kid-friendly activities.</p>
              <p>
                ✔️ Additional Activities: Visit to nearby farms, local
                handicrafts shopping, and nature walks suitable for kids.
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
              <h2>Luxury & Shopping Package - Coimbatore</h2>
              <h2>₹15,000 per couple (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes luxury accommodation, exclusive shopping tours, and
                gourmet dining.
              </p>
              <p>
                ✔️ Stay at a luxury hotel with a personal concierge service.
              </p>
              <p>
                ✔️ Visit the best shopping destinations: Brookefields Mall, Fun
                Republic Mall, and local boutiques.
              </p>
              <p>✔️ Gourmet dining at the best restaurants in Coimbatore.</p>
              <p>
                ✔️ Additional Activities: Private tours, spa treatments, and
                city nightlife experiences.
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

export default Coimbatore;
