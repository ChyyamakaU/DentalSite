function Footer() {
  return (
    <>
      <footer className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <div className="flex items-center border-2 border-[#12345B] text-xs md:text-lg rounded-3xl px-1  md:px-2 md:py-1">
            <i className="fa-solid fa-tooth text-[#12345B] text-xs md:text-2xl "></i>
            <p className="text-[#2F6FAE] text-xs md:text-lg font-semibold font-mono">
              SMILE
            </p>
          </div>

          <p>Get Your Smile back</p>
        </div>

        <div>
          <h3>Contact</h3>

          <div className="flex gap-1 text-sm items-center ">
            <i class="fa-solid fa-phone"></i>
            <p>08123456789</p>
          </div>

          <div className="flex gap-1 text-sm items-center ">
            <i class="fa-regular fa-envelope"></i>
            <p>enquiries@smileclinics.com</p>
          </div>

          <div className="flex gap-1 text-sm items-center ">
            <i class="fa-solid fa-location-dot"></i>
            <p>XYZ Street, Jos</p>
          </div>
        </div>

        <div>
          <h3>Opening Hours</h3>
          <div>
            <p>Monday- Friday: 9:00am to 5:00pm</p>
            <p>Saturday: 11:00am to 2:00pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>


        <div>
          <h3>Social Handles</h3>

          <div>
            
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
