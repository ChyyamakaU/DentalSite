import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className=" flex justify-between items-center p-10 bg-[#EAF3FA] ">
        <div className="flex items-center border-2 border-[#12345B] text-xs md:text-lg rounded-3xl px-1  md:px-2 md:py-1">
          <i className="fa-solid fa-tooth text-[#12345B] text-xs md:text-2xl "></i>
          <p className="text-[#2F6FAE] text-xs md:text-lg font-semibold font-mono">
            SMILE
          </p>
        </div>

        <nav className="text-[#1A2B3D] hover:[#2F6FAE] hidden md:flex gap-6 text-xl font-medium">
          <Link to="/">Home</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#team">Our team</Link>
          <Link to="/#contact">Contact Us</Link>
        </nav>

        <div>
          <button className="block md:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>

          <Link
            to="/booking"
            className="hidden md:block bg-[#12345B] text-[#ffffff]  rounded-4xl text-xs md:text-lg px-4 py-2"
          >
            Book Appointment
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
