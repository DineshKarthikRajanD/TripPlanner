import React from "react";
import "../kodaikanal/kodaikanal.css";
import { Link } from "react-router-dom";

const Thirunelveli = () => {
  return (
    <div>
      <div className="full">
        <div className="main">
          <h1>Package</h1>
          <div>
            <p id="p1">
              Ready for your Thirunelveli adventure? Pick Your Package and start
              planning your perfect trip today!
            </p>
          </div>
        </div>

        <div className="image">
          <img
            src="https://img.freepik.com/free-photo/reflection-clouds-lake-angkor-wat-temple-cambodia_181624-27631.jpg?t=st=1729192759~exp=1729196359~hmac=ac31f7b75f4c7f300a464d99f26f641a050e85cadd6ce0fe09db4a785b7ba6d0&w=2000"
            alt=""
          />
        </div>

        <div className="pack">
          <div className="pack__standard">
            <div className="pack__standard__content">
              <h2>Cultural Heritage Tour Package - Thirunelveli</h2>
              <h2>₹5,000 per person (2 days / 1 night)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided tours.
              </p>
              <p>
                ✔️ Visit to Nellaiappar Temple: Explore ancient Dravidian
                architecture.
              </p>
              <p>
                ✔️ Papanasam: Visit the famous temple and dam surrounded by
                nature.
              </p>
              <p>✔️ Sankaran Kovil: Famous for the sacred snake sculpture.</p>
              <p>
                ✔️ Stroll through the local markets and taste authentic
                Thirunelveli halwa.
              </p>
              <p>✔️ Stay in a traditional guesthouse or boutique hotel.</p>
              <p>
                ✔️ Additional Activities: Cultural performances, local food
                tours, and heritage walks.
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
              <h2>Pilgrimage Tour Package - Thirunelveli</h2>
              <h2>₹6,000 per person (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and a pilgrimage
                guide.
              </p>
              <p>
                ✔️ Visit to Courtallam Falls: Famous for its spiritual
                significance and natural beauty.
              </p>
              <p>
                ✔️ Papanasam Temple: A popular pilgrimage spot with scenic
                surroundings.
              </p>
              <p>
                ✔️ Visit to Sri Vaikuntam Temple: Sacred site known for its
                unique architecture.
              </p>
              <p>✔️ Attend evening rituals and aarti at Nellaiappar Temple.</p>
              <p>✔️ Stay in a peaceful retreat or pilgrim lodge.</p>
              <p>
                ✔️ Additional Activities: Meditation, spiritual discourses, and
                temple rituals.
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
              <h2>Adventure & Nature Tour Package - Thirunelveli</h2>
              <h2>₹7,500 per person (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes accommodation, transportation, and guided nature
                tours.
              </p>
              <p>
                ✔️ Trekking in the Western Ghats: Explore the scenic mountain
                ranges.
              </p>
              <p>
                ✔️ Courtallam Waterfalls: Enjoy a refreshing dip in the falls.
              </p>
              <p>✔️ Wildlife Safari at Kalakkad Mundanthurai Tiger Reserve.</p>
              <p>✔️ Stay in a nature resort or eco-friendly lodge.</p>
              <p>
                ✔️ Additional Activities: Bird watching, nature photography, and
                local village tours.
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
              <h2>Family Fun Package - Thirunelveli</h2>
              <h2>₹12,000 for a family of 4 (3 days / 2 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes family-friendly accommodation, activities for kids,
                and transportation.
              </p>
              <p>✔️ Visit to Manimuthar Dam for a fun picnic experience.</p>
              <p>
                ✔️ Courtallam Falls: Perfect for a family day out with swimming
                and fun at the waterfalls.
              </p>
              <p>✔️ Local food tours featuring Thirunelveli's famous sweets.</p>
              <p>✔️ Stay in a family resort with activities for children.</p>
              <p>
                ✔️ Additional Activities: Nature walks, farm visits, and local
                handicrafts shopping.
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
              <h2>Luxury & Wellness Package - Thirunelveli</h2>
              <h2>₹18,000 per couple (4 days / 3 nights)</h2>
            </div>
            <div className="pack__standard__features">
              <p>
                ✔️ Includes luxury accommodation, spa treatments, and private
                tours.
              </p>
              <p>
                ✔️ Stay at a luxury eco-resort surrounded by natural beauty.
              </p>
              <p>
                ✔️ Ayurvedic spa treatments for relaxation and rejuvenation.
              </p>
              <p>✔️ Private tour of Nellaiappar Temple and spiritual sites.</p>
              <p>✔️ Enjoy gourmet dining with a view of the Western Ghats.</p>
              <p>
                ✔️ Additional Activities: Private yoga sessions, nature walks,
                and cultural performances.
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

export default Thirunelveli;
