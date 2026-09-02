import Aa from "../assets/DrA.jpg";
import Ba from "../assets/DrB.jpg";

function Team() {
  return (
    <>
      <section className="bg-gray-100 ">
        <h2 className="text-2xl md:text-4xl py-8 md:py-10 text-center font-semibold text-[#12345B]">
          OUR Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-12">
          <div>
            <img className=" rounded-2xl " src={Aa} alt="Doctor A" />
            <p className="text-sm md:text-lg font-semibold text-center text-[#12345B] py-1">
              Doctor John Doe
            </p>
            <p className="text-[#26282b] text-center">General and cosmetics surgery</p>

            <button className=" bg-[#12345B] text-[#ffffff] ml-32 rounded-lg text-xs md:text-lg px-4 py-1 my-2">
              View Full Profile
            </button>
          </div>

          <div>
            <img className="rounded-2xl "  src={Ba} alt="Doctor B" />
            <p className="text-sm md:text-lg font-semibold text-center text-[#12345B] py-1">
              Doctor Jane Doe
            </p>
            <p className="text-[#26282b] text-center">General and cosmetics surgery</p>

            <button className=" bg-[#12345B] text-[#ffffff] ml-32 rounded-lg text-xs md:text-lg px-4 py-1 my-2">
              View Full Profile
            </button>
          </div>

          <div>
            <img className="rounded-2xl " src={Aa} alt="Doctor A" />
            <p className="text-sm md:text-lg font-semibold text-center text-[#12345B] py-1">
              Doctor James Doe
            </p>
            <p className="text-[#26282b] text-center">General and cosmetics surgery</p>

            <button className=" bg-[#12345B] text-[#ffffff] ml-32 rounded-lg text-xs md:text-lg px-4 py-1 my-2">
              View Full Profile
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
