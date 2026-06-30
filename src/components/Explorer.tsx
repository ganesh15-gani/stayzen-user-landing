// Explorer.tsx (Part 1)

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiMapPin,
  FiFilter,
} from "react-icons/fi";
import "../styles/Explorer.css";

const categories = [
  "All",
  "For Rent",
  "Coliving",
  "Luxury",
];

const properties = [
  {
    id: 1,
    title: "Luxury PG",
    location: "Hyderabad",
    price: "₹8,999/mo",
    sharing: "Single",
    category: "For Rent",
    available: true,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80",
  },
  {
    id: 2,
    title: "Elite Apartment",
    location: "Bangalore",
    price: "₹13,499/mo",
    sharing: "Double",
    category: "Luxury",
    available: false,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80",
  },
  {
    id: 3,
    title: "Premium Hostel",
    location: "Chennai",
    price: "₹6,999/mo",
    sharing: "Triple",
    category: "Coliving",
    available: true,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&q=80",
  },
  {
    id: 4,
    title: "Modern Studio",
    location: "Pune",
    price: "₹11,499/mo",
    sharing: "Single",
    category: "Luxury",
    available: true,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
  },
];

const Explorer = () => {

  const [activeTab, setActiveTab] = useState("All");

  const [favorites, setFavorites] = useState<number[]>([]);

  const [showLogin, setShowLogin] = useState(false);

  const [pendingAction, setPendingAction] = useState("");

  // Mock Login
  const isLoggedIn = false;

  const toggleFavorite = (id: number) => {

    if (!isLoggedIn) {
      setPendingAction("favorite");
      setShowLogin(true);
      return;
    }

    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }

  };

  const filteredProperties =
    activeTab === "All"
      ? properties
      : properties.filter(
          (item) => item.category === activeTab
        );

  return (

<section className="explorer" id="explore">

<div className="section-header">

<span className="mini-title">
<FiFilter />
Explore Premium Properties
</span>

<h2>
Featured Properties
</h2>

<p>
Discover premium verified stays curated
for comfort, affordability and lifestyle.
</p>

</div>

{/* FILTERS */}

<div className="filter-tabs">

{categories.map((item)=>(

<button

key={item}

onClick={()=>setActiveTab(item)}

className={
activeTab===item
?"active"
:""
}

>

{item}

</button>

))}

</div>

{/* PROPERTY GRID STARTS IN PART 2 */}
        {/* ===========================
            PROPERTY GRID
        =========================== */}

        <div className="property-grid">

          {filteredProperties.map((property) => (

            <motion.div
              key={property.id}
              className="property-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >

              {/* Image */}

              <div className="property-image">

                <img
                  src={property.image}
                  alt={property.title}
                />

                <button
                  className={`heart-btn ${
                    favorites.includes(property.id)
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    toggleFavorite(property.id)
                  }
                >
                  <FiHeart />
                </button>

                <span className="price-tag">
                  {property.price}
                </span>

              </div>

              {/* Content */}

              <div className="property-content">

                <h3>{property.title}</h3>

                <div className="location">

                  <FiMapPin />

                  {property.location}

                </div>

                <span className="sharing-badge">

                  {property.sharing}

                </span>

                <div className="property-actions">

                  {property.available ? (

                    <button
                      className="book-btn"
                      onClick={() => {

                        if (!isLoggedIn) {

                          setPendingAction("book");

                          setShowLogin(true);

                          return;

                        }

                        alert(
                          `Booking ${property.title}`
                        );

                      }}
                    >
                      Book Now
                    </button>

                  ) : (

                    <>

                      <button
                        className="notify-btn"
                        onClick={() => {

                          if (!isLoggedIn) {

                            setPendingAction("notify");

                            setShowLogin(true);

                            return;

                          }

                          alert(
                            "We'll notify you when available."
                          );

                        }}
                      >
                        Notify Me
                      </button>

                      <button
                        className="enquiry-btn"
                        onClick={() => {

                          if (!isLoggedIn) {

                            setPendingAction("enquiry");

                            setShowLogin(true);

                            return;

                          }

                          alert(
                            "Opening enquiry form..."
                          );

                        }}
                      >
                        Enquiry
                      </button>

                    </>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* ===========================
            LOGIN MODAL
        =========================== */}

        {showLogin && (

          <div className="login-overlay">

            <div className="login-modal">

              <h2>Sign In Required</h2>

              <p>

                Please sign in to continue your
                <strong> {pendingAction}</strong> action.

              </p>

              <div className="modal-buttons">

                <button
                  className="login-btn"
                  onClick={() => {

                    alert(
                      "Login Successful (Demo)"
                    );

                    setShowLogin(false);

                  }}
                >
                  Sign In
                </button>

                <button
                  className="cancel-btn"
                  onClick={() =>
                    setShowLogin(false)
                  }
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        )}

      </section>

  );

};

export default Explorer;