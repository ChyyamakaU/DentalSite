function Services() {
  return (
    <>
      <section className="bg-gray-100 py-10 scroll-mt-5" id="services">
        <h2 className="text-2xl md:text-4xl py-8 md:py-10 text-center font-semibold text-[#12345B]">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:px-10 gap-5 bg-[#EAF3FA] py-7 md:py-12 ">
          <div className="text-center shadow-2xl rounded-3xl p-7 mx-4">
            <h3 className="text-lg md:text-xl font-semibold  text-[#12345B] pb-2 ">
              General Dentistry
            </h3>
            <p className="text-sm px-6  text-[#26282b]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              autem sunt odit totam. Harum qui tenetur beatae perferendis vit
            </p>

            <div className="text-[#12345B] flex items-center text-xs md:text-sm py-2 gap-1 justify-center  ">
              <p>Learn More</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div className="text-center shadow-2xl rounded-3xl p-7 mx-4">
            <h3 className="text-xl font-semibold  text-[#12345B] pb-2">
              Cosmetic Dentistry
            </h3>
            <p className="text-sm px-6  text-[#26282b]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              autem sunt odit totam. Harum qui tenetur beatae perferendis vit
            </p>
            <div className="text-[#12345B] flex items-center text-xs md:text-sm py-2 gap-1 justify-center  ">
              <p>Learn More</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div className="text-center shadow-2xl rounded-3xl p-7 mx-4">
            <h3 className="text-xl font-semibold text-[#12345B] pb-2">
              Othodontics
            </h3>
            <p className="text-sm px-6 text-[#26282b]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              autem sunt odit totam. Harum qui tenetur beatae perferendis vit
            </p>
            <div className="text-[#12345B] flex items-center text-xs md:text-sm py-2 gap-1 justify-center  ">
              <p>Learn More</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div className="text-center shadow-2xl rounded-3xl p-7 mx-4">
            <h3 className="text-xl font-semibold text-[#12345B] pb-2">
              Preventive Care
            </h3>
            <p className="text-sm px-6 text-[#26282b]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              autem sunt odit totam. Harum qui tenetur beatae perferendis vit
            </p>
            <div className="text-[#12345B] flex items-center text-xs md:text-sm py-2 gap-1 justify-center  ">
              <p>Learn More</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
