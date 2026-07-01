import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explorer from "./components/Explorer";
import Blogs from "./components/Blogs";
import SupportHub from "./components/SupportHub";
import TravelSection from "./components/TravelSection";
import Footer from "./components/Footer";

import PropertyDetails from "./components/PropertyDetails";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Explorer />
    <Blogs />
    <SupportHub />
    <TravelSection />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/property/:id"
        element={<PropertyDetails />}
      />

    </Routes>
  );
};

export default App;