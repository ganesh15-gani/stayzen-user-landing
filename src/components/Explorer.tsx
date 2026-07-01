// ==============================================
// Explorer.tsx - PART 1
// ==============================================

import React, { useMemo, useState } from "react";
import "../styles/Explorer.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FiMapPin,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

interface Property {
  id: number;
  title: string;
  location: string;
  category: string;
  price: string;
  rating: number;
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury PG",
    location: "Hyderabad",
    category: "PG",
    price: "₹8,500 / month",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
  {
    id: 2,
    title: "Elite Apartment",
    location: "Bangalore",
    category: "Apartment",
    price: "₹18,000 / month",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
  },
  {
    id: 3,
    title: "Premium Hostel",
    location: "Chennai",
    category: "Hostel",
    price: "₹6,000 / month",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
  },
  {
    id: 4,
    title: "Modern Studio",
    location: "Pune",
    category: "Studio",
    price: "₹14,500 / month",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
  },
];

const Explorer: React.FC = () => {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "PG",
    "Apartment",
    "Hostel",
    "Studio",
  ];

  const filteredProperties = useMemo(() => {

    if (activeTab === "All") return properties;

    return properties.filter(
      (item) => item.category === activeTab
    );

  }, [activeTab]);

  // Directly navigate to Property Details page
  const handlePropertyClick = (id: number) => {
    navigate(`/property/${id}`);
  };
    return (
    <section className="explorer-section" id="explore">

      <div className="explorer-container">

        {/* ================= HEADER ================= */}

        <motion.div
          className="explorer-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <span className="section-badge">
            Featured Properties
          </span>

          <h2>
            Find Your
            <span> Perfect Stay</span>
          </h2>

          <p>
            Discover verified PGs, Apartments,
            Hostels and Studios carefully
            curated for students, professionals
            and travellers.
          </p>

        </motion.div>

        {/* ================= FILTERS ================= */}

        <div className="filter-tabs">

          {tabs.map((tab) => (

            <button
              key={tab}
              className={
                activeTab === tab
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>

          ))}

        </div>

        {/* ================= PROPERTY GRID ================= */}

        <div className="properties-grid">

          {filteredProperties.map((property) => (

            <motion.div
              key={property.id}
              className="property-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              onClick={() => handlePropertyClick(property.id)}
            >

              {/* IMAGE */}

              <div className="property-image">

                <img
                  src={property.image}
                  alt={property.title}
                />

                <span className="property-price">
                  {property.price}
                </span>

              </div>

              {/* CONTENT */}

              <div className="property-content">

                <div className="property-top">

                  <h3>{property.title}</h3>

                  <span className="rating">

                    <FiStar />

                    {property.rating}

                  </span>

                </div>

                <div className="location">

                  <FiMapPin />

                  <span>{property.location}</span>

                </div>

                <div className="category-tag">

                  {property.category}

                </div>

                <div className="property-footer">

                  <button
                    className="details-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePropertyClick(property.id);
                    }}
                  >
                    View Details

                    <FiArrowRight />
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Explorer;