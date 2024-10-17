import React from "react";
import "./kodaikanal.css";
import { Link } from "react-router-dom";

const Kodaikanal = () => {
  return (
    <div>
      <div className="full">
        <div className="main">
          <h1>Package</h1>
          <div>
            <p id="p1">
              Ready for your Kodaikanal adventure? Pick Your Package and start
              planning your perfect trip today!
            </p>
          </div>
        </div>

        <div className="image">
          <img
            src="https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823121.jpg?t=st=1729192833~exp=1729196433~hmac=7ef1d831624ce9b569a6b647df920859587e724ed39021382b6063af94a3f767&w=2000"
            alt=""
          />
        </div>

        <div className="pack">
          <div className="pack__standard">
            <div className="pack__standard__content">
              <h2>Nature & Scenic Tour Package</h2>
              <h2>₹7,500 per person (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided tours.
              </p>
              <p>
                ✔️ Visit to Kodaikanal Lake: Boating, cycling around the lake.
              </p>
              <p>
                ✔️ Coaker's Walk: Scenic stroll with views of valleys and hills.
              </p>
              <p>✔️ Bryant Park: Explore the botanical garden.</p>
              <p>✔️ Pine Forest: Nature walk through the iconic pine trees.</p>
              <p>✔️ Accommodation in a cozy homestay or nature resort.</p>
              <p>
                ✔️ Additional Activities: Photography at the scenic viewpoints,
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
              <h2> Adventure & Trekking Package</h2>
              <h2>₹9,500 per person (4 days / 3 nights) </h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, trekking guide, gear, and meals
                during treks.
              </p>
              <p>
                ✔️ Trek to Dolphin’s Nose and Echo Rock for panoramic views.
              </p>
              <p>✔️ Vattakanal Falls: Trekking and nature exploration.</p>
              <p>
                ✔️ Kukkal Caves trek: Explore ancient caves surrounded by scenic
                beauty.
              </p>
              <p>✔️ Mountain biking around Kodaikanal.</p>
              <p>✔️ Stay in a campsite or eco-friendly lodge.</p>
              <p>
                ✔️ Additional Activities: Bonfire, star gazing, bird watching
                tours.
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
              <h2> Romantic Getaway Package</h2>
              <h2>₹12,000 per couple (3 days / 2 nights) </h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes luxury accommodation, private boat ride, and
                candlelight dinner.
              </p>
              <p>✔️ Private boat ride at Kodaikanal Lake.</p>
              <p>✔️ Visit to Silver Cascade Waterfalls and Bear Shola Falls.</p>
              <p>
                ✔️ Candlelight dinner at a hilltop restaurant with valley views.
              </p>
              <p>✔️ Stay at a luxury resort with a spa package for couples.</p>
              <p>
                ✔️ Additional Activities: Horse riding, scenic walks, picnic at
                Bryant Park.
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
              <h2> Cultural & Wellness Retreat Package</h2>
              <h2>₹15,000 per person (5 days / 4 nights) </h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes stay at a wellness resort, yoga sessions, spa
                treatments, and cultural tours.
              </p>
              <p>
                ✔️ Explore Poombarai Village to experience local culture and the
                famous Murugan Temple.
              </p>
              <p>✔️ Yoga and meditation sessions amidst the hills.</p>
              <p>✔️ Ayurvedic spa treatments for relaxation.</p>
              <p>✔️ Organic farm visit with local food experiences.</p>
              <p>✔️ Stay at a wellness retreat center or eco-resort.</p>
              <p>
                ✔️ Additional Activities: Cultural performances, local food
                tours, and forest bathing.
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
              <h2> Family Fun Package</h2>
              <h2>Price: ₹20,000 for a family of 4 (3 days / 2 nights) </h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes family-friendly accommodation, activities for kids,
                and transportation.
              </p>
              <p>✔️ Boating and cycling around Kodaikanal Lake.</p>
              <p>✔️ Chettiar Park: Family-friendly picnic spot.</p>
              <p>✔️ Horse riding and games for kids at the lake.</p>
              <p>✔️ Stay in a family resort with activities for children.</p>
              <p>
                ✔️ Additional Activities: Visit to nearby farms, local
                handicrafts shopping, and nature hikes suitable for kids.
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

export default Kodaikanal;
