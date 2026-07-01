import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FiHeart,
  FiMapPin,
  FiStar,
  FiWifi,
  FiShield,
} from "react-icons/fi";

import "../styles/Explorer.css";

interface Property {
  id: number;
  title: string;
  category: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  features: string[];
}

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Boys PG",
    category: "Boys PG",
    location: "Hyderabad",
    price: "₹15,000",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    description:
      "Luxury fully furnished PG with premium amenities and WiFi.",
    features: ["WiFi", "Verified", "Parking"],
  },

  {
    id: 2,
    title: "Elite Apartment",
    category: "Apartment",
    location: "Bangalore",
    price: "₹22,000",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    description:
      "Modern apartment with balcony and smart interiors.",
    features: ["Parking", "Lift", "Gym"],
  },

  {
    id: 3,
    title: "Luxury Girls PG",
    category: "Girls PG",
    location: "Hyderabad",
    price: "₹14,000",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    description:
      "Premium girls accommodation with security.",
    features: ["WiFi", "Food", "Laundry"],
  },

  {
    id: 4,
    title: "Premium Hostel",
    category: "Hostel",
    location: "Chennai",
    price: "₹8,000",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    description:
      "Affordable premium hostel with study rooms.",
    features: ["Study", "WiFi", "Laundry"],
  },
    {
    id: 5,
    title: "Executive Boys PG",
    category: "Boys PG",
    location: "Pune",
    price: "₹13,500",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    description:
      "Executive stay with premium facilities and housekeeping.",
    features: ["AC", "Food", "WiFi"],
  },

  {
    id: 6,
    title: "Royal Girls PG",
    category: "Girls PG",
    location: "Hyderabad",
    price: "₹16,000",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
    description:
      "Luxury girls stay near the IT corridor with premium amenities.",
    features: ["Gym", "Food", "WiFi"],
  },

  {
    id: 7,
    title: "Sky Apartment",
    category: "Apartment",
    location: "Pune",
    price: "₹24,000",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    description:
      "Luxury apartment with skyline views and premium interiors.",
    features: ["Parking", "Pool", "Lift"],
  },

  {
    id: 8,
    title: "City Hostel",
    category: "Hostel",
    location: "Hyderabad",
    price: "₹7,500",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    description:
      "Comfortable hostel for students with study lounge and WiFi.",
    features: ["Study", "WiFi", "Laundry"],
  },
    {
    id: 9,
    title: "Premium Apartment",
    category: "Apartment",
    location: "Bangalore",
    price: "₹28,000",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    description:
      "Premium apartment with luxury interiors and smart home features.",
    features: ["Luxury", "Pool", "Parking"],
  },

  {
    id: 10,
    title: "Grand Boys PG",
    category: "Boys PG",
    location: "Hyderabad",
    price: "₹12,500",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    description:
      "Modern boys PG with premium rooms and quality food service.",
    features: ["Food", "WiFi", "Verified"],
  },

  {
    id: 11,
    title: "Luxury Apartment",
    category: "Apartment",
    location: "Hyderabad",
    price: "₹30,000",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    description:
      "Designer apartment with spacious rooms and elegant interiors.",
    features: ["Parking", "Pool", "Gym"],
  },

  {
    id: 12,
    title: "Elite Girls PG",
    category: "Girls PG",
    location: "Bangalore",
    price: "₹17,000",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    description:
      "Elite girls PG with premium amenities and secure environment.",
    features: ["WiFi", "Verified", "Food"],
  },

];

const filters = [
  "All",
  "Boys PG",
  "Girls PG",
  "Apartment",
  "Hostel",
];

const Explorer: React.FC = () => {

  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProperties = useMemo(() => {

    if (activeFilter === "All") {
      return properties;
    }

    return properties.filter(
      (property) => property.category === activeFilter
    );

  }, [activeFilter]);

  const openProperty = (id: number) => {

    navigate(`/property/${id}`);

  };

  return (

    <section className="explorer">

      <div className="explorer-container">

        <div className="explorer-header">

          <span className="explorer-badge">
            ✨ Featured Properties
          </span>

          <h2>
            Find Your Perfect Stay
          </h2>

          <p>
            Discover verified premium PGs, apartments and hostels
            with luxury amenities and seamless booking experience.
          </p>

        </div>

        <div className="filter-bar">
                    {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}

        </div>

        {/* ===========================
            PROPERTY GRID
        =========================== */}

        <div className="property-grid">

          {filteredProperties.map((property, index) => (

            <motion.div
              key={property.id}
              className="property-card"
              onClick={() => openProperty(property.id)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -8,
              }}
            >

              {/* IMAGE */}

              <div className="property-image">

                <img
                  src={property.image}
                  alt={property.title}
                />

                <div className="image-overlay"></div>

                <div className="image-top">

                  <span className="category-chip">

                    {property.category}

                  </span>

                  <div className="image-actions">

                    <div className="rating-badge">

                      <FiStar />

                      <span>{property.rating}</span>

                    </div>

                    <button
                      className="favorite-btn"
                      onClick={(e) => e.stopPropagation()}
                    >

                      <FiHeart />

                    </button>

                  </div>

                </div>

              </div>

              {/* CONTENT */}

              <div className="property-content">

                <h3>

                  {property.title}

                </h3>

                <p className="property-description">

                  {property.description}

                </p>

                <div className="amenities">
                                    {property.features.map((feature) => (

                    <span
                      key={feature}
                      className="amenity-pill"
                    >

                      {feature === "Verified" ? (

                        <FiShield />

                      ) : (

                        <FiWifi />

                      )}

                      {feature}

                    </span>

                  ))}

                </div>

                {/* Footer */}

                <div className="property-footer">

                  <div className="price">

                    <strong>

                      {property.price}

                    </strong>

                    <span>

                      / month

                    </span>

                  </div>

                  <div className="location">

                    <FiMapPin />

                    <span>

                      {property.location}

                    </span>

                  </div>

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