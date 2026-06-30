// src/components/Footer.tsx
// ======================================
// Footer.tsx - Part 1
// ======================================

import React from "react";
import "../styles/Footer.css";
import { motion } from "framer-motion";

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const discoverLinks = [
  "Featured Stays",
  "Coliving Spaces",
  "Rentals",
  "Travel Hub",
];

const companyLinks = [
  "AI Blogs",
  "Market Analytics",
  "Press Center",
];

const legalLinks = [
  "Terms & Conditions",
  "Privacy Guidelines",
  "24/7 Support Hub Desk",
];

const Footer: React.FC = () => {

  return (

<footer className="footer">

<div className="footer-container">

<motion.div

className="footer-grid"

initial={{ opacity:0, y:40 }}

whileInView={{ opacity:1, y:0 }}

viewport={{ once:true }}

transition={{ duration:.8 }}

>

{/* =====================================
        BRAND COLUMN
===================================== */}

<div className="footer-brand">

<div className="footer-logo">

<span className="logo-green">

Stay

</span>

<span className="logo-blue">

Zen

</span>

</div>

<p>

AI-Driven Curated Living Spaces

crafted for modern students,

professionals and travelers.

</p>

<div className="footer-social">

<a href="#">

<FiFacebook />

</a>

<a href="#">

<FiInstagram />

</a>

<a href="#">

<FiLinkedin />

</a>

<a href="#">

<FiTwitter />

</a>

</div>

</div>

{/* =====================================
        DISCOVER COLUMN
===================================== */}

<div className="footer-column">

<h4>

DISCOVER

</h4>

<ul>

{discoverLinks.map((item,index)=>(

<li key={index}>

<a href="#">

{item}

</a>

</li>

))}

</ul>

</div>

{/* ===== Footer Part 2 Starts Here ===== */}
        {/* =====================================
              COMPANY COLUMN
        ====================================== */}

        <div className="footer-column">

          <h4>

            COMPANY

          </h4>

          <ul>

            {companyLinks.map((item, index) => (

              <li key={index}>

                <a href="#">

                  {item}

                </a>

              </li>

            ))}

          </ul>

        </div>

        {/* =====================================
              LEGAL COLUMN
        ====================================== */}

        <div className="footer-column">

          <h4>

            LEGAL

          </h4>

          <ul>

            {legalLinks.map((item, index) => (

              <li key={index}>

                <a href="#">

                  {item}

                </a>

              </li>

            ))}

          </ul>

        </div>

      </motion.div>

      {/* ===============================
            FOOTER BOTTOM
      =============================== */}

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >

        <p>

          © {new Date().getFullYear()} StayZen.
          All Rights Reserved.

        </p>

        <div className="footer-bottom-links">

          <a href="#">

            Privacy

          </a>

          <span>•</span>

          <a href="#">

            Terms

          </a>

          <span>•</span>

          <a href="#">

            Support

          </a>

        </div>

      </motion.div>

    </div>

  </footer>

  );

};

export default Footer;