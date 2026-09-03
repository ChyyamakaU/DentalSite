import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="grid grid-cols-1 md:grid-cols-5 gap-10 px-6 md:px-10 bg-[#12345B] py-8 md:py-16 scroll-mt-5"
        id="contact"
      >
        <div>
          <div className="flex items-center border-2 border-[#99a8b8] text-xs w-28 md:text-lg rounded-3xl px-1  md:px-2 md:py-1">
            <i className="fa-solid fa-tooth text-[#9bb7d4] text-xs md:text-2xl "></i>
            <p className="text-[#2F6FAE] text-xs md:text-lg font-semibold font-mono">
              SMILE
            </p>
          </div>

          <p className="text-[#DCE6EF] pt-1 md:pt3">Get Your Smile back</p>
        </div>

        <div>
          <h3 className="text-[#FFFFFF] font-semibold text-lg md:text-xl">Quick Links</h3>

          <nav className="text-[#DCE6EF] text-sm md:text-lg flex flex-col pt-3">
            <Link to="/" className="pb-1">Home</Link>
            <Link to="/#services"className="pb-1">Services</Link>
            <Link to="/#team"className="pb-1">Our team</Link>
            <Link to="/#About" className="pb-1">About Us</Link>
            <Link to ="/privacy"className="pb-1">Privacy</Link>
            <Link to ="/Terms">Terms and Conditions</Link>

            <p>Our Blog</p>
          </nav>
        </div>

        <div>
          <h3 className="text-[#FFFFFF] font-semibold text-sm md:text-xl pb-3">
            Contact
          </h3>

          <div className="flex gap-1 text-sm md:text-lg items-center text-[#DCE6EF] pb-1">
            <i class="fa-solid fa-phone"></i>
            <p>08123456789</p>
          </div>

          <div className="flex gap-1 text-sm md:text-lg items-center text-[#DCE6EF] pb-1 ">
            <i class="fa-regular fa-envelope"></i>
            <p>enquiries@smileclinics.com</p>
          </div>

          <div className="flex gap-1 text-sm md:text-lg items-center text-[#DCE6EF]">
            <i class="fa-solid fa-location-dot"></i>
            <p>XYZ Street, Jos</p>
          </div>
        </div>

        <div>
          <h3 className="text-[#FFFFFF] font-semibold text-sm md:text-xl pb-3">
            Opening Hours
          </h3>
          <div className="text-[#DCE6EF] text-sm md:text-lg ">
            <p className="pb-1">Monday- Friday: 9:00am to 5:00pm</p>
            <p className="pb-1">Saturday: 11:00am to 2:00pm</p>
            <p className="pb-1">Sunday: Closed</p>
          </div>
        </div>

        <div>
          <h3 className="text-[#FFFFFF] font-semibold text-sm md:text-xl pb-3">
            Social Handles
          </h3>

          <div className="text-xs md:text-sm flex gap-2 mt-2">
            <i className="fa-brands fa-facebook text-blue-800"></i>
            <i className="fa-brands fa-x-twitter text-[#000000]"></i>
            <i className="fa-brands fa-youtube text-red-600"></i>
            <i className="fa-brands fa-instagram text-pink-400"></i>
            <i className="fa-brands fa-linkedin text-blue-700"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
