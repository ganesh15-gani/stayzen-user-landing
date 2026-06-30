// src/components/Hero.tsx (Part 1)

import React from "react";
import "../styles/Hero.css";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiSearch,
  FiHeart,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

const title = ["Find", "Your", "Next", "Premium", "Stay"];

const properties = [
  {
    id: 1,
    title: "Luxury PG",
    location: "Hyderabad",
    price: "₹8,999/mo",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Bangalore",
    price: "₹13,499/mo",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
  {
    id: 3,
    title: "Premium Hostel",
    location: "Chennai",
    price: "₹6,999/mo",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
  },
];

const Hero: React.FC = () => {
  return (
    <section className="hero">

      {/* Background Glow */}
      <div className="hero-glow glow1"></div>
      <div className="hero-glow glow2"></div>
      <div className="hero-glow glow3"></div>

      <div className="hero-container">

        {/* ================= LEFT ================= */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="hero-badge">
            <BsStars />
            India's Premium Property Marketplace
          </div>

          <h1 className="hero-title">
            {title.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Discover verified PGs, apartments and premium stays with
            AI-powered recommendations, transparent pricing and
            instant booking.
          </motion.p>

          {/* Search */}

          <motion.div
            className="search-box"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >

            <div className="search-item">
              <FiMapPin />
              <input
                type="text"
                placeholder="Location"
              />
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <select>
                <option>Budget</option>
                <option>₹5k - ₹10k</option>
                <option>₹10k - ₹20k</option>
                <option>₹20k+</option>
              </select>
            </div>

            <div className="divider"></div>

            <div className="search-item">
              <select>
                <option>Sharing</option>
                <option>Single</option>
                <option>Double</option>
                <option>Triple</option>
              </select>
            </div>

            <button className="search-btn">
              <FiSearch />
              Explore
            </button>

          </motion.div>

          {/* Feature Chips */}

          <div className="feature-badges">

            <div className="feature-chip">
              <MdVerified />
              Verified Listings
            </div>

            <div className="feature-chip">
              <BsStars />
              AI Matchmaking
            </div>

            <div className="feature-chip">
              <FiStar />
              Premium Quality
            </div>

          </div>

          {/* Stats */}

          <div className="hero-stats">

            <div>
              <h2>10K+</h2>
              <span>Properties</span>
            </div>

            <div>
              <h2>50K+</h2>
              <span>Happy Users</span>
            </div>

            <div>
              <h2>25+</h2>
              <span>Cities</span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE CONTINUES IN PART 2 */}
                {/* ================= RIGHT ================= */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bento-grid">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                className={`property-card card-${index + 1}`}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                  rotateX: 3,
                  rotateY: -3,
                }}
              >
                <div className="property-image">
                  <img
                    src={property.image}
                    alt={property.title}
                  />

                  <button className="favorite-btn">
                    <FiHeart />
                  </button>

                  <span className="property-price">
                    {property.price}
                  </span>

                  <span className="property-location">
                    <FiMapPin />
                    {property.location}
                  </span>
                </div>

                <div className="property-content">
                  <h3>{property.title}</h3>

                  <div className="property-bottom">
                    <div className="rating">
                      <FiStar />
                      {property.rating}
                    </div>

                    <button className="book-btn">
                      Book Now
                      <FiArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Floating AI Card */}

            <motion.div
              className="floating-card"
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="floating-icon">
                <BsStars />
              </div>

              <div>
                <h4>AI Recommended</h4>
                <p>Perfect Stay Found</p>
              </div>
            </motion.div>

            {/* Verified Card */}

            <motion.div
              className="verified-card"
              animate={{
                y: [10, -10, 10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MdVerified />

              <div>
                <h4>100% Verified</h4>
                <p>Trusted Properties</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;