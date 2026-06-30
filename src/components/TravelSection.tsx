// ==============================================
// TravelSection.tsx - PART 1
// ==============================================

import React, { useState } from "react";
import "../styles/TravelSection.css";
import { motion } from "framer-motion";

import {
  FiMail,
  FiArrowRight,
  FiMapPin,
} from "react-icons/fi";

import { BsStars } from "react-icons/bs";

interface Destination {
  id: number;
  title: string;
  location: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: "Maldives Escape",
    location: "Indian Ocean",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=80",
  },
  {
    id: 2,
    title: "Santorini Villas",
    location: "Greece",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
  },
  {
    id: 3,
    title: "Swiss Retreat",
    location: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80",
  },
];

const TravelSection: React.FC = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = () => {

    if (!email.trim()) {

      alert("Please enter your email.");

      return;

    }

    alert("🎉 Early Access Registered!");

    setEmail("");

  };

  return (

<section className="travel-section" id="travel">

<div className="travel-overlay"></div>

<div className="travel-container">

<motion.div

className="travel-left"

initial={{ opacity: 0, x: -40 }}

whileInView={{ opacity: 1, x: 0 }}

viewport={{ once: true }}

transition={{ duration: 0.8 }}

>

<div className="travel-badge">

<BsStars />

<span>

Coming Soon : AI Travel Matcher

</span>

</div>

<h2>

Beyond Rentals.

<span>

Explore Curated Experiences.

</span>

</h2>

<p>

Discover luxury villas, premium staycations,
weekend escapes and AI-powered travel
experiences crafted exclusively for StayZen.

</p>

<div className="travel-waitlist">

<div className="travel-input">

<FiMail />

<input

type="email"

placeholder="Enter your email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

</div>

<button

className="travel-btn"

onClick={handleSubmit}

>

Get Early Access

<FiArrowRight />

</button>

</div>

</motion.div>

        {/* ==========================
              RIGHT SIDE
        =========================== */}

        <motion.div
          className="travel-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="travel-grid">

            {destinations.map((item) => (

              <motion.div
                key={item.id}
                className="travel-card"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="travel-card-overlay">

                  <div className="travel-location">

                    <FiMapPin />

                    <span>{item.location}</span>

                  </div>

                  <h3>{item.title}</h3>

                  <button className="explore-btn">

                    Explore Soon

                    <FiArrowRight />

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>

  );

};

export default TravelSection;