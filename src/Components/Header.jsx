function Header() {
  return (
    <>
      <header className=" flex justify-between items-center px-10 py-8 bg-[#EAF3FA]">
        <div className="flex items-center border-2 border-[#12345B] text-xs md:text-lg rounded-3xl px-1  md:px-2 md:py-1">
          <i className="fa-solid fa-tooth text-[#12345B] text-xs md:text-2xl "></i>
          <p className="text-[#2F6FAE] text-xs md:text-lg font-semibold font-mono">
            SMILE
          </p>
        </div>

        <nav className="text-[#1A2B3D] hover:[#2F6FAE] hidden md:flex gap-6 text-xl font-medium">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#team">Our team</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div>
          <button className="block md:hidden">
            <i className="fa-solid fa-bars" ></i>
          </button>
          <button className="hidden md:block bg-[#12345B] text-[#ffffff]  rounded-4xl text-xs md:text-lg px-4 py-2">
            Book Appointment
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
