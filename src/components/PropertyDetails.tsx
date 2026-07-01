// =============================================
// PropertyDetails.tsx - PART 1
// =============================================

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/PropertyDetails.css";

import {
  FiArrowLeft,
  FiMapPin,
  FiStar,
  FiHome,
  FiWifi,
  FiCoffee,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

interface Property {

  id:number;

  title:string;

  location:string;

  price:string;

  rating:number;

  maintenance:string;

  advance:string;

  type:string;

  available:boolean;

  image:string;

  description:string;

  amenities:string[];

  rules:string[];

}

const propertyData:Property[]=[

{

id:1,

title:"Luxury PG",

location:"Hyderabad",

price:"₹8,500 / month",

rating:4.9,

maintenance:"₹500 / month",

advance:"₹10,000",

type:"Boys PG",

available:true,

image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",

description:
"Premium fully furnished PG located near IT companies with modern interiors, high-speed WiFi, housekeeping, laundry service and healthy food.",

amenities:[
"WiFi",
"Housekeeping",
"Parking",
"Laundry",
"Security",
"Food"
],

rules:[
"No Smoking",
"Valid ID Required",
"Visitors till 9 PM",
"Keep Rooms Clean"
]

},

{

id:2,

title:"Elite Apartment",

location:"Bangalore",

price:"₹18,000 / month",

rating:4.8,

maintenance:"₹1,200 / month",

advance:"₹25,000",

type:"Apartment",

available:true,

image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&q=80",

description:
"Luxury apartment with spacious rooms, modular kitchen, covered parking and premium gated community.",

amenities:[
"Gym",
"Swimming Pool",
"Parking",
"Power Backup",
"Lift",
"CCTV"
],

rules:[
"No Pets",
"Family Preferred",
"No Loud Music"
]

},

{

id:3,

title:"Premium Hostel",

location:"Chennai",

price:"₹6,000 / month",

rating:4.7,

maintenance:"Included",

advance:"₹5,000",

type:"Hostel",

available:false,

image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80",

description:
"Affordable premium hostel with clean rooms, study area, free WiFi and nutritious meals.",

amenities:[
"WiFi",
"Study Room",
"Laundry",
"Food"
],

rules:[
"ID Mandatory",
"No Smoking"
]

},

{

id:4,

title:"Modern Studio",

location:"Pune",

price:"₹14,500 / month",

rating:4.9,

maintenance:"₹900 / month",

advance:"₹20,000",

type:"Studio",

available:true,

image:"https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=80",

description:
"Modern studio apartment with premium interiors and smart home facilities.",

amenities:[
"WiFi",
"Smart Lock",
"Kitchen",
"Parking",
"CCTV"
],

rules:[
"No Parties",
"Pets Allowed"
]

}

];

const PropertyDetails:React.FC=()=>{

const {id}=useParams();

const navigate=useNavigate();

const property=propertyData.find(

item=>item.id===Number(id)

);

if(!property){

return(

<div className="property-not-found">

<h2>Property Not Found</h2>

<button onClick={()=>navigate("/")}>

Go Back

</button>

</div>

);

}

return(

<section className="property-details">

<div className="property-container">

<motion.div

className="property-header"

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

transition={{duration:.6}}

>

<button

className="back-btn"

onClick={()=>navigate(-1)}

>

<FiArrowLeft/>

Back

</button>

<span className="property-type">

{property.type}

</span>

</motion.div>

{/* ===== PART 2 STARTS HERE ===== */}
      {/* =====================================
              MAIN CONTENT
      ===================================== */}

      <div className="property-grid">

        {/*=========================
              LEFT SIDE
        =========================*/}

        <motion.div
          className="property-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .2 }}
        >

          <div className="property-image-wrapper">

            <img
              src={property.image}
              alt={property.title}
            />

            <span
              className={
                property.available
                  ? "status available"
                  : "status unavailable"
              }
            >
              {property.available ? "Available" : "Occupied"}
            </span>

          </div>

          <div className="property-info">

            <div className="title-row">

              <h1>{property.title}</h1>

              <div className="rating-box">

                <FiStar />

                <span>{property.rating}</span>

              </div>

            </div>

            <div className="location-row">

              <FiMapPin />

              <span>{property.location}</span>

            </div>

            <div className="price-card">

              <h2>{property.price}</h2>

              <span>Starting Price</span>

            </div>

            <p className="description">

              {property.description}

            </p>

            {/*=========================
                  PROPERTY INFO
            =========================*/}

            <div className="info-grid">

              <div className="info-card">

                <FiHome />

                <div>

                  <span>Property Type</span>

                  <h4>{property.type}</h4>

                </div>

              </div>

              <div className="info-card">

                <FiShield />

                <div>

                  <span>Maintenance</span>

                  <h4>{property.maintenance}</h4>

                </div>

              </div>

              <div className="info-card">

                <FiCheckCircle />

                <div>

                  <span>Advance</span>

                  <h4>{property.advance}</h4>

                </div>

              </div>

            </div>

            {/*=========================
                  AMENITIES
            =========================*/}

            <div className="amenities">

              <h3>Amenities</h3>

              <div className="amenities-grid">

                {property.amenities.map((item, index) => (

                  <div
                    className="amenity-card"
                    key={index}
                  >

                    <FiWifi />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

            {/*=========================
                    RULES
            =========================*/}

            <div className="rules">

              <h3>Property Rules</h3>

              <ul>

                {property.rules.map((rule, index) => (

                  <li key={index}>

                    <FiCoffee />

                    <span>{rule}</span>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </motion.div>

        {/*=========================
              RIGHT SIDE
        =========================*/}

        <motion.aside
          className="booking-sidebar"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .3 }}
        >

          <div className="booking-card">

            <h3>Book This Property</h3>

            <p>

              Fill in your details and our team
              will contact you shortly.

            </p>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
            />

            <button className="book-btn">

              Book Now

            </button>

            <button className="enquiry-btn">

              Send Enquiry

            </button>

          </div>

        </motion.aside>

      </div>

    </div>

  </section>

  );

};

export default PropertyDetails;