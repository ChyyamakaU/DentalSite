import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <Link
        to="/"
        className="flex gap-2 items-center-safe px-6 py-3 text-xs md:text-sm font-medium text-[#12345B] "
      >
        <i className="fa-solid fa-arrow-left-long"></i>
        <p> Back to Home</p>
      </Link>

      <h2 className="text-xl md:text-3xl text-[#12345B] text-center my-3 md:my-10 font-bold">
        Privacy Policy
      </h2>

      <div className="text-center text-sm md:text-lg mx-5 md:mx-28 my-3 md:my-10 pb-20 text-[#12345B] ">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          provident laboriosam iure, exercitationem ipsa cupiditate nam eius
          repellat, doloribus distinctio harum earum expedita. Unde qui nam sunt
          ipsum provident vero. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Voluptatem neque, cupiditate dolorem odit et
          reprehenderit explicabo nam fugit eius, assumenda, beatae ex quaerat
          laudantium. Minima placeat iusto distinctio dolorem voluptatum.
          psum provident vero. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Voluptatem neque, cupiditate dolorem odit et
          reprehenderit explicabo nam fugit eius, assumenda, beatae ex quaerat
          laudantium. Minima placeat iusto distinctio dolorem voluptatum.
        </p>
      </div>
    </>
  );
}

export default Success;
