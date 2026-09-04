import { Link } from "react-router-dom";

function Success() {
  return (
    <>

    <section >
      <Link to="/" className="flex gap-2 items-center-safe px-6 py-3 font-medium text-[#12345B] ">
      <i className="fa-solid fa-arrow-left-long"></i>
       <p> Back to Home</p>
      </Link>

      <h2 className="text-xl md:text-5xl text-[#12345B] text-center my-10 md:my-20 font-bold">
        Your appointment is officially booked.
      </h2>

      <div className="text-center text-sm md:text-2xl my-8 md:my-20 text-[#12345B] font-semibold font-serif">
        <p>Well, that was seamless wasn't it? </p>

        <p>Now keep that smile sparkling until we see you!</p>
      </div>

    
      </section>
    </>
  );
}

export default Success;
