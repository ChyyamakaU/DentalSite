import HeroImage from "../assets/Hero.jpg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
    <section className="bg-gray-100 scroll-mt-5" id="home">
      <div className="flex justify-between gap-5 px-10 md:py-24 ">
        <img src={HeroImage} className="hidden md:block object-contain rounded-3xl w-3/6" alt="" />

        <div className="text-center pt-20 ">
          <h1 className="text-3xl md:text-6xl font-semibold text-[#12345B] ">Dental Care for Healthy Smiles</h1>

          <p className="text-lg md:text-2xl pt-5 text-[#26282b]">Experience stress free dentistry focuced <br /> on your long term oral health</p>
        
         <Link to="/booking" className=" bg-[#12345B] text-[#ffffff]  rounded-4xl text-xs md:text-lg px-4 py-2 relative top-3 md:top-8">
            Book Appointment
          </Link>
        
        </div>

      </div>
      
      </section>
    </>
  );
}

export default Hero;
