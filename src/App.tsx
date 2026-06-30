
import Blogs from './components/Blogs'
import Explorer from './components/Explorer'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SupportHub from './components/SupportHub'
import TravelSection from './components/TravelSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explorer />
      <Blogs />
      <SupportHub />
      <TravelSection />
      <Footer />
    </div>
  )
}

export default App
