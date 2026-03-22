import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Programs from "./components/programs";
import Pricing from "./components/pricing";
import Trainers from "./components/trainers";
import Testimonials from "./components/testimonials";
import Contact from "./components/contacts";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Programs />
      <Pricing />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;