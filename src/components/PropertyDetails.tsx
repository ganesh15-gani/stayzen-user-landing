import React, { useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import {
  FiArrowLeft,
  FiMapPin,
  FiStar,
  FiWifi,
  FiShield,
  FiHome,
  FiPhone,
  FiSend,
  FiCheck,
  FiHeart,
  FiShare2,
  FiCalendar,
  FiClock,
  FiUsers,
  FiDroplet,
  FiCoffee,
  FiMonitor,
  FiWind,
} from "react-icons/fi";

import "../styles/PropertyDetails.css";

interface Property {
  id: number;
  title: string;
  category: string;
  location: string;
  price: string;
  rating: number;
  available: boolean;
  maintenance: string;
  deposit: string;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
}

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Boys PG",
    category: "Boys PG",
    location: "Hyderabad",
    price: "₹15,000 / month",
    rating: 4.9,
    available: true,
    maintenance: "₹1,500 / month",
    deposit: "₹30,000 (Refundable)",

    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600",

    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600",
    ],

    description:
      "Experience luxury living with premium interiors, high-speed WiFi, daily housekeeping, hygienic food, CCTV security and modern amenities designed for students and professionals.",

    amenities: [
      "High Speed WiFi",
      "Power Backup",
      "Laundry",
      "Gym",
      "Parking",
      "Lift",
      "Food",
      "Housekeeping",
    ],
  },

  {
    id: 2,
    title: "Elite Apartment",
    category: "Apartment",
    location: "Bangalore",
    price: "₹22,000 / month",
    rating: 4.8,
    available: true,
    maintenance: "₹2,000 / month",
    deposit: "₹45,000 (Refundable)",

    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600",

    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600",
    ],

    description:
      "Beautiful apartment featuring spacious bedrooms, elegant interiors, premium furnishing, secure parking and luxury lifestyle amenities.",

    amenities: [
      "Parking",
      "Swimming Pool",
      "Gym",
      "Lift",
      "WiFi",
      "Security",
      "Power Backup",
      "Club House",
    ],
  },

  {
    id: 3,
    title: "Luxury Girls PG",
    category: "Girls PG",
    location: "Hyderabad",
    price: "₹14,000 / month",
    rating: 4.9,
    available: true,
    maintenance: "₹1,000 / month",
    deposit: "₹25,000 (Refundable)",

    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600",

    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600",
    ],

    description:
      "Safe and comfortable girls PG with biometric security, premium food, housekeeping, study area and peaceful environment.",

    amenities: [
      "WiFi",
      "Laundry",
      "Gym",
      "Food",
      "Lift",
      "Security",
      "Housekeeping",
      "Power Backup",
    ],
  },
];
const PropertyDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const property = useMemo(() => {
    return properties.find((item) => item.id === Number(id));
  }, [id]);

  if (!property) {
    return (
      <section className="property-not-found">
        <h2>Property Not Found</h2>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </section>
    );
  }

  const [selectedImage, setSelectedImage] = useState<string>(
    property.gallery[0]
  );

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setMobile("");
      setMessage("");
    }, 2500);
  };

  return (
    <section className="property-details">

      <div className="property-wrapper">

        {/* LEFT SIDE */}

        <div className="property-left">

          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft />
            <span>Back</span>
          </button>

          <div className="hero-image">

            <img
              src={selectedImage}
              alt={property.title}
            />

            <div className="image-overlay">

              <span className="property-category">
                {property.category}
              </span>

              <div className="image-actions">

                <button>
                  <FiHeart />
                </button>

                <button>
                  <FiShare2 />
                </button>

              </div>

            </div>

          </div>

          <div className="gallery">

            {property.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className={
                  selectedImage === image ? "active" : ""
                }
                onClick={() => setSelectedImage(image)}
              />
            ))}

          </div>

          <div className="property-info">

            <div className="title-row">

              <div>

                <h1>{property.title}</h1>

                <p className="location">

                  <FiMapPin />

                  {property.location}

                </p>

              </div>

              <div className="rating-box">

                <FiStar />

                <span>{property.rating}</span>

              </div>

            </div>

            <h2 className="price">
              {property.price}
            </h2>

            <p className="description">
              {property.description}
            </p>

            <div className="quick-info">

              <div className="quick-card">
                <FiHome />
                <span>Fully Furnished</span>
              </div>

              <div className="quick-card">
                <FiShield />
                <span>24/7 Security</span>
              </div>

              <div className="quick-card">
                <FiWifi />
                <span>Free WiFi</span>
              </div>

              <div className="quick-card">
                <FiUsers />
                <span>Professional Stay</span>
              </div>

            </div>
                        {/* Specifications */}

            <div className="details-section">

              <h3>Property Specifications</h3>

              <div className="spec-grid">

                <div className="spec-card">
                  <FiHome />
                  <h4>Room Type</h4>
                  <span>Private / Shared</span>
                </div>

                <div className="spec-card">
                  <FiCalendar />
                  <h4>Available From</h4>
                  <span>Immediate</span>
                </div>

                <div className="spec-card">
                  <FiClock />
                  <h4>Stay Duration</h4>
                  <span>Monthly</span>
                </div>

                <div className="spec-card">
                  <FiUsers />
                  <h4>Occupancy</h4>
                  <span>1 - 3 Members</span>
                </div>

                <div className="spec-card">
                  <FiShield />
                  <h4>Security Deposit</h4>
                  <span>{property.deposit}</span>
                </div>

                <div className="spec-card">
                  <FiCoffee />
                  <h4>Maintenance</h4>
                  <span>{property.maintenance}</span>
                </div>

              </div>

            </div>

            {/* Amenities */}

            <div className="details-section">

              <h3>Premium Amenities</h3>

              <div className="amenities-grid">

                {property.amenities.map((item) => (

                  <div
                    key={item}
                    className="amenity-item"
                  >
                    <FiCheck />
                    <span>{item}</span>
                  </div>

                ))}

              </div>

            </div>

            {/* Highlights */}

            <div className="details-section">

              <h3>Property Highlights</h3>

              <div className="highlight-grid">

                <div className="highlight-card">
                  <FiWind />
                  <span>Air Conditioned Rooms</span>
                </div>

                <div className="highlight-card">
                  <FiMonitor />
                  <span>Study & Work Space</span>
                </div>

                <div className="highlight-card">
                  <FiDroplet />
                  <span>24×7 Water Supply</span>
                </div>

                <div className="highlight-card">
                  <FiWifi />
                  <span>Unlimited High-Speed Internet</span>
                </div>

              </div>

            </div>

            {/* Rules */}

            <div className="details-section">

              <h3>Rules & Guidelines</h3>

              <ul className="rules-list">

                <li>No Smoking Inside Property</li>

                <li>Government ID Proof Mandatory</li>

                <li>Visitors Allowed Until 9:00 PM</li>

                <li>Pets Are Not Allowed</li>

                <li>Maintain Cleanliness In Common Areas</li>

                <li>Follow Community Guidelines</li>

              </ul>

            </div>

            {/* Owner Details */}

            <div className="owner-card">

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Owner"
              />

              <div>

                <h3>Property Owner</h3>

                <p>Rahul Sharma</p>

                <span>Verified StayZen Partner</span>

              </div>

              <button className="call-owner">

                <FiPhone />

                Call

              </button>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <aside className="property-right">

          <div className="booking-card">

            <div className="booking-top">

              <h2>{property.price}</h2>

              <span
                className={
                  property.available
                    ? "status available"
                    : "status unavailable"
                }
              >
                {property.available
                  ? "Available"
                  : "Unavailable"}
              </span>

            </div>
                        <form
              className="booking-form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />

              <textarea
                rows={5}
                placeholder="Tell us your requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                className="book-btn"
              >
                <FiSend />
                {property.available
                  ? "Book Now"
                  : "Notify Me"}
              </button>

              {submitted && (
                <p className="success-message">
                  ✅ Your enquiry has been submitted successfully.
                </p>
              )}
            </form>

            <div className="booking-features">

              <div className="feature">
                <FiCheck />
                <span>Instant Confirmation</span>
              </div>

              <div className="feature">
                <FiShield />
                <span>100% Verified Property</span>
              </div>

              <div className="feature">
                <FiPhone />
                <span>24/7 Customer Support</span>
              </div>

              <div className="feature">
                <FiWifi />
                <span>Premium Amenities Included</span>
              </div>

            </div>

          </div>

        </aside>

      </div>

      {/* Similar Properties */}

      <section className="similar-properties">

        <h2>You May Also Like</h2>

        <div className="similar-grid">

          {properties
            .filter((item) => item.id !== property.id)
            .slice(0, 3)
            .map((item) => (

              <Link
                key={item.id}
                to={`/property/${item.id}`}
                className="similar-card"
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="similar-content">

                  <h3>{item.title}</h3>

                  <p>
                    <FiMapPin />
                    {item.location}
                  </p>

                  <div className="similar-bottom">

                    <span>{item.price}</span>

                    <div className="rating">
                      <FiStar />
                      {item.rating}
                    </div>

                  </div>

                </div>

              </Link>

            ))}

        </div>

      </section>

    </section>

  );
};

export default PropertyDetails;