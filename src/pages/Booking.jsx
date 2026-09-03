import { useState } from "react";
function Booking() {
  const doctors = [
    {
      name: "John Doe",
      availableDates: ["2026-09-05", "2026-09-08", "2026-09-10"],
      availableTimes: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
    },
    {
      name: "Jane Doe",
      availableDates: ["2026-09-04", "2026-09-10", "2026-09-12"],
      availableTimes: [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "15:00",
        "16:00",
      ],
    },
    {
      name: "James Doe",
      availableDates: ["2026-09-03", "2026-09-06", "2026-09-09"],
      availableTimes: [
        "09:00",
        "10:00",
        "11:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
      ],
    },
  ];

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [time, setTime] = useState([]);

  function DocAvailability() {
    if (doctor === "") {
      setAvailabilityMessage("Please select a doctor");
    } else if (date === "") {
      setAvailabilityMessage("Please select a date");
    } else {
      const selectedDoc = doctors.find((doc) => doc.name === doctor);

      if (selectedDoc.availableDates.includes(date)) {
        setAvailabilityMessage("Doctor is available, please select time");
        setTime(selectedDoc.availableTimes);
      } else {
        setAvailabilityMessage("Doctor is not available on this date");
        setTime([]);
      }
    }
  }
  DocAvailability();

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
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                name="Doctors"
                id="Doctors"
                required
                className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              >
                <option value="">Select a dentist</option>
                <option value="John Doee">John Doe</option>
                <option value="Jane Doe">Jane Doe</option>
                <option value="James Doe">James Doe</option>
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
                value={date}
                onClick={(e) => setDate(e.target.value)}
                type="date"
                name="Date"
                id="Date"
                required
                className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              />
            </div>

            {time.length > 0 && (
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Time"
                  className="text-sm md:text-lg font-medium text-[#12345B]"
                >
                  Time
                </label>

                <select
                  name="Doctors"
                  id="Doctors"
                  required
                  className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
                >
                  <option value="">Select a dentist</option>

                  {time.map((theTime) => (
                    <option value={theTime} key={theTime}>
                      {theTime}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-4xl bg-[#12345B] px-4 py-3 my-6 font-medium text-white transition hover:bg-[#164b87] "
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
