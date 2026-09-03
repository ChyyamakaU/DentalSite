function Booking() {




  
  return (
    <>
      <section>
        <div className="flex justify-center px-4 py-10">
          <form action="" className="w-full max-w-md py-12">
            <h2 className="text-xl md:text-3xl font-bold text-[#12345B] pb-10 text-center">
              Book an Appointment
            </h2>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="Doctors"
                className="text-sm md:text-lg font-medium text-[#12345B]"
              >
                Preferred Dentist
              </label>

              <select
                name="Doctors"
                id="Doctors"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              >
                <option value="">Select a dentist</option>
                <option value="John">John Doe</option>
                <option value="Jane">Jane Doe</option>
                <option value="James">James Doe</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="Date"
                className="text-sm  md:text-lg font-medium text-[#12345B]"
              >
                Date
              </label>

              <input
                type="date"
                name="Date"
                id="Date"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              />
            </div>

          
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Time"
                className="text-sm md:text-lg font-medium text-[#12345B]"
              >
                Time
              </label>

              <input
                type="time"
                name="Time"
                id="Time"
                required
               className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#12345B] px-4 py-3 font-medium text-white transition hover:bg-[#164b87]"
            >
              Check Availability
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Booking;
