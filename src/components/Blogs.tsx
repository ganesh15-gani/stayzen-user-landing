// src/components/Blogs.tsx (Part 1)

import React from "react";
import "../styles/Blogs.css";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiClock,
  FiTrendingUp,
} from "react-icons/fi";
import { BsStars } from "react-icons/bs";

interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    category: "AI Trends",
    title:
      "How AI is Revolutionizing Premium Property Discovery",
    description:
      "Discover how intelligent recommendation systems are helping users find verified premium stays faster than ever before.",
    readTime: "5 min read",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    category: "Luxury Living",
    title:
      "Why Co-Living Spaces Are Becoming the Future of Urban Living",
    description:
      "Explore modern co-living experiences designed for students, professionals, and digital nomads.",
    readTime: "4 min read",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    category: "Property Guide",
    title:
      "10 Smart Tips Before Booking Your Next Premium Stay",
    description:
      "Everything you should verify before confirming your booking to ensure safety, comfort, and affordability.",
    readTime: "6 min read",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const Blogs: React.FC = () => {
  return (
    <section className="blogs" id="blogs">

      <div className="blogs-container">

        {/* Header */}

        <motion.div
          className="blogs-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="blogs-badge">

            <BsStars />

            AI Powered Knowledge Hub

          </div>

          <h2>

            Insights &
            <span> Curated Living</span>

          </h2>

          <p>

            Stay ahead with AI-powered real estate insights,
            premium lifestyle articles, market trends,
            expert guides, and curated living experiences.

          </p>

        </motion.div>

        {/* Blog Cards Start In Part 2 */}
                {/* ===========================
            BLOG GRID
        =========================== */}

        <div className="blogs-grid">

          {blogs.map((blog, index) => (

            <motion.article
              key={blog.id}
              className="blog-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -10 }}
            >

              {/* Image */}

              <div className="blog-image">

                <img
                  src={blog.image}
                  alt={blog.title}
                />

                <div className="blog-category">

                  <FiTrendingUp />

                  {blog.category}

                </div>

              </div>

              {/* Content */}

              <div className="blog-content">

                <div className="blog-meta">

                  <span>

                    <FiClock />

                    {blog.readTime}

                  </span>

                </div>

                <h3>

                  {blog.title}

                </h3>

                <p>

                  {blog.description}

                </p>

                <button className="read-more">

                  Read Article

                  <FiArrowUpRight />

                </button>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Blogs;