import Aa from "../assets/DrA.jpg";
import Ba from "../assets/DrB.jpg";

function Team() {
  return (
    <>
      <section>
        <h2 className="text-2xl md:text-4xl py-8 md:py-10 text-center font-semibold text-[#12345B]">
          OUR Team
        </h2>

        <div>
          <div>
            <img className="w-1/6 rounded-2xl " src={Aa} alt="Doctor A" />
            <p>Doctor John Doe</p>
          </div>

          <div>
            <img src={Ba} alt="Doctor B" />
            <p>Doctor Jane Doe</p>
          </div>

          <div>
            <img className="w-1/6 rounded-2xl " src={Aa} alt="Doctor A" />
            <p>Doctor John Doe</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
