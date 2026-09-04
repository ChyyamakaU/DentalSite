import group from "../assets/group.jpg";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <section className="bg-gray-100 pt-20 md:pt-0 scroll-mt-5" id="home">
        <h2 className="text-2xl md:text-4xl text-center md:py-5 font-semibold text-[#12345B]">
          OUR STORY
        </h2>
        <div className="flex justify-between gap-20 px-10 py-5 md:py-12 ">
         

          <div className="text-center  ">
            <h1 className="text-xl md:text-4xl pt-5 txt-xs text-center font-semibold text-[#12345B]">
              More than just a dental clinic.
            </h1>

            <div className="text-sm md:text-lg text-[#26282b] pt-5">
              <p>
                At SMILE, we believe a visit to the dentist should feel
                comfortable, and welcoming. Our team is committed to providing
                thoughtful, personalised dental care in a calm and friendly
                environment. Whether you're here for a routine check-up, a
                treatment you've been putting off, or simply want to keep your
                smile healthy, we're here to make the experience as smooth as
                possible.
              </p>
            </div>

            <Link
              to="/booking"
              className=" bg-[#12345B] text-[#ffffff]  rounded-4xl text-xs md:text-lg px-4 py-2 relative top-3 md:top-8"
            >
              Book Appointment
            </Link>
          </div>

           <img
            src={group}
            className="hidden md:block object-contain rounded-3xl w-3/6"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default About;
