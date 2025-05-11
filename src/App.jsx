import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import GoalsSection from './components/GoalsSection';
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";


function App() {
  return (
    <div className=" h-[800px] relative bg-cover bg-center bg-no-repeat bg-gradient-to-r from-[#70CBF3] via-[#12A3E3] to-[#0A5A7D]">
      
      <div className="h-full bg-[url('/src/assets/5.svg')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <HomeSection />
      </div>

      <div className="h-[760px]  m-0 p-0">
      <AboutSection />
      </div>

      <div className="h-[900px]">
      <GoalsSection />
      </div>

  
      <div className="h-[750px] ">
        <ServicesSection />
      </div>

      <div className="">
        <ContactSection />
        <FooterSection />
      </div>

    </div>
    
  );
}

export default App;