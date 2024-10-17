import React from "react";
import "../kodaikanal/kodaikanal.css";
import { Link } from "react-router-dom";

const ooty = () => {
  return (
    <div>
      <div className="full">
        <div className="main">
          <h1>Package</h1>
          <div>
            <p id="p1">
              Ready for your Ooty adventure? Pick Your Package and start
              planning your perfect trip today!
            </p>
          </div>
        </div>

        <div className="image">
          <img
            src="https://img.freepik.com/free-photo/beautiful-natural-landscape_23-2151839218.jpg?t=st=1729191707~exp=1729195307~hmac=0310f6de8ad66675e9d1501cdc216bbd776fad8cde62de2f24132b3538d581e4&w=1800"
            alt=""
          />
        </div>

        <div className="pack">
          <div className="pack__standard">
            <div className="pack__standard__content">
              <h2>Nature & Scenic Tour Package - Ooty</h2>
              <h2>₹6,500 per person (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided tours.
              </p>
              <p>✔️ Visit to Ooty Lake: Boating and scenic views.</p>
              <p>✔️ Botanical Gardens: Explore the lush gardens.</p>
              <p>✔️ Dodabetta Peak: Panoramic views from the highest point.</p>
              <p>
                ✔️ Nilgiri Mountain Railway: Scenic toy train ride through the
                hills.
              </p>
              <p>✔️ Stay in a cozy homestay or nature resort.</p>
              <p>
                ✔️ Additional Activities: Photography, nature walks, and sunset
                views.
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
              <h2>Adventure & Trekking Package - Ooty</h2>
              <h2>₹8,500 per person (4 days / 3 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, trekking guide, gear, and meals
                during treks.
              </p>
              <p>✔️ Trek to Avalanche Lake: Explore stunning landscapes.</p>
              <p>✔️ Emerald Lake: Trekking and nature exploration.</p>
              <p>✔️ Mountain biking around Ooty.</p>
              <p>
                ✔️ Mudumalai Wildlife Sanctuary: Wildlife safari and bird
                watching.
              </p>
              <p>✔️ Stay in a campsite or eco-friendly lodge.</p>
              <p>
                ✔️ Additional Activities: Bonfire, star gazing, and nature
                walks.
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
              <h2>Romantic Getaway Package - Ooty</h2>
              <h2>₹11,000 per couple (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes luxury accommodation, private boat ride, and
                candlelight dinner.
              </p>
              <p>✔️ Private boat ride on Ooty Lake.</p>
              <p>✔️ Visit to Pine Forest: Scenic walks and photography.</p>
              <p>✔️ Candlelight dinner at a scenic spot with valley views.</p>
              <p>✔️ Stay at a luxury resort with spa treatments for couples.</p>
              <p>
                ✔️ Additional Activities: Horse riding, scenic strolls, and
                picnics.
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
              <h2>Cultural & Wellness Retreat Package - Ooty</h2>
              <h2>₹14,000 per person (5 days / 4 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes stay at a wellness resort, yoga sessions, spa
                treatments, and cultural tours.
              </p>
              <p>✔️ Explore Toda Village to experience the local culture.</p>
              <p>✔️ Yoga and meditation sessions in serene settings.</p>
              <p>
                ✔️ Ayurvedic spa treatments for relaxation and rejuvenation.
              </p>
              <p>✔️ Tea Plantation Tour and local food experiences.</p>
              <p>✔️ Stay at a wellness retreat center or eco-resort.</p>
              <p>
                ✔️ Additional Activities: Cultural performances and nature
                walks.
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
              <h2>Family Fun Package - Ooty</h2>
              <h2>₹18,000 for a family of 4 (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes family-friendly accommodation, activities for kids,
                and transportation.
              </p>
              <p>
                ✔️ Toy Train Ride from Mettupalayam to Ooty for a memorable
                experience.
              </p>
              <p>
                ✔️ Visit to Thunder World (Dinosaur Park) for fun and amusement.
              </p>
              <p>✔️ Boating and cycling around Ooty Lake.</p>
              <p>✔️ Stay in a family resort with activities for children.</p>
              <p>
                ✔️ Additional Activities: Nature hikes, horse riding, and family
                picnics.
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

export default ooty;
