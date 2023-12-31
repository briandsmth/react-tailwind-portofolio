import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portofolio />
      <Experience />
      <Contact />
      
      <SocialLinks />
    </div>
  );
}

export default App;
