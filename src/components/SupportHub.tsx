import React, { useState } from "react";
import "../styles/SupportHub.css";
import { motion } from "framer-motion";

import {
  FiMessageCircle,
  FiVideo,
  FiHelpCircle,
  FiArrowRight,
} from "react-icons/fi";

import { BsWhatsapp } from "react-icons/bs";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FiMessageCircle />,
    title: "AI Chatbots",
    description: "24/7 intelligent conversations",
  },
  {
    icon: <FiVideo />,
    title: "Interactive Videos",
    description: "Guided property walkthroughs",
  },
  {
    icon: <FiHelpCircle />,
    title: "Instant FAQs",
    description: "Quick answers anytime",
  },
];

const SupportHub: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Demo login state
  const isLoggedIn = false;

  const handleWhatsApp = () => {
    if (!isLoggedIn) {
      setShowModal(true);
      return;
    }

    window.open(
      "https://wa.me/919999999999",
      "_blank"
    );
  };

  return (
    <section className="support-hub" id="support">

      <div className="support-container">

        {/* LEFT SIDE */}

        <motion.div
          className="support-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="support-badge">
            AI Powered Support
          </div>

          <h2>
            Intelligent Support,
            <span> Redefined.</span>
          </h2>

          <p>
            Need help finding the perfect stay?
            Our AI assistant, smart FAQs and
            interactive support are available
            24/7 to guide you instantly.
          </p>

          <div className="feature-list">

            {features.map((feature, index) => (

              <div
                className="feature-item"
                key={index}
              >

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div>

                  <h4>{feature.title}</h4>

                  <span>
                    {feature.description}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT SIDE STARTS IN PART 2 */}
                {/* ===========================
            RIGHT SIDE
        =========================== */}

        <motion.div
          className="support-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="support-card">

            <div className="support-glow"></div>

            <h3>
              Need Immediate Assistance?
            </h3>

            <p>
              Connect instantly with our AI-powered
              support team through WhatsApp or
              browse our premium knowledge base
              for quick answers.
            </p>

            <div className="support-actions">

              <button
                className="whatsapp-btn"
                onClick={handleWhatsApp}
              >
                <BsWhatsapp />
                Connect on WhatsApp
              </button>

              <button className="knowledge-btn">
                Browse Knowledge Base
                <FiArrowRight />
              </button>

            </div>

          </div>

        </motion.div>

      </div>

      {/* ===========================
          LOGIN MODAL
      =========================== */}

      {showModal && (
        <div className="login-overlay">

          <motion.div
            className="login-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >

            <h2>Sign In Required</h2>

            <p>
              Please sign in to continue
              to WhatsApp Support.
            </p>

            <div className="modal-buttons">

              <button
                className="login-btn"
                onClick={() => {
                  setShowModal(false);
                  alert("Demo Login Successful");
                }}
              >
                Sign In
              </button>

              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

            </div>

          </motion.div>

        </div>
      )}

    </section>
  );
};

export default SupportHub;