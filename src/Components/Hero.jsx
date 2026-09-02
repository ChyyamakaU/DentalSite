import HeroImage from "../assets/Hero.jpg";

function Hero() {
  return (
    <>
    <section className="bg-gray-100">
      <div className="flex justify-between gap-5 px-10 md:py-24 ">
        <img src={HeroImage} className="hidden md:block rounded-3xl w-3/6" alt="" />

        <div className="text-center pt-20 ">
          <h1 className="text-3xl md:text-6xl font-semibold ">Dental Care for Healthy Smiles</h1>

          <p className="text-lg md:text-2xl pt-5 text-[]">Experience stress free dentistry focuced <br /> on your long term oral health</p>
        </div>


      </div>
      </section>
    </>
  );
}

export default Hero;
