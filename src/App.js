import Contact from "./komponen/Contact";
import Footer from "./komponen/Footer";
import Hero from "./komponen/Hero";
import Navbar from "./komponen/Navbar";
import Skills from "./komponen/Skills";
import Tentang from "./komponen/Tentang";
import Work from "./komponen/Work";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills/>
      <Tentang/>
      <Work/>
      <Contact/>
      <Footer/>
  
    </div>
  );
}

export default App;
