import { useState } from "react";
import { Link } from "react-router-dom";


function Booking() {
  const doctors = [
    {
      name: "John Doe",
      availableDates: ["2026-10-05", "2026-09-08", "2026-09-10"],
      availableTimes: ["09:00", "10:00", "11:00", "13:00", "15:00", "16:00"],
    },
    {
      name: "Jane Doe",
      availableDates: ["2026-09-04", "2026-09-10", "2026-09-12"],
      availableTimes: ["9:30", "11:50", "12:50", "14:00", "15:00", "16:00"],
    },
    {
      name: "James Doe",
      availableDates: ["2026-09-03", "2026-09-06", "2026-09-09"],
      availableTimes: ["09:00", "10:30", "11:30", "13:30", "14:30", "15:30"],
    },
  ];

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [AvailableTime, setAvailableTime] = useState([]);
  const [time, setTime] = useState("");

  function DocAvailability(selectedDoctor, selectedDate) {
    if (selectedDoctor === "") {
      setAvailabilityMessage("Please select a doctor");
      setAvailableTime([]);
      setTime("");
    } else if (selectedDate === "") {
      setAvailabilityMessage("Please select a date");
      setAvailableTime([]);
      setTime("");
    } else {
      const selectedDoc = doctors.find((doc) => doc.name === selectedDoctor);

      if (selectedDoc.availableDates.includes(selectedDate)) {
        setAvailabilityMessage("Doctor is available, please select time");

        setAvailableTime(selectedDoc.availableTimes);
      } else {
        setAvailabilityMessage("Doctor is not available on this date");
        setAvailableTime([]);
        setTime("");
      }
    }
  }

  function handleDocChange(e) {
    const selectedDoctor = e.target.value;
    setDoctor(selectedDoctor);
    if (date !== "") {
      DocAvailability(selectedDoctor, date);
    } else {
      setAvailabilityMessage("");
      setAvailableTime([]);
      setTime("");
    }
  }

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    DocAvailability(doctor, selectedDate);
  }

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
                onChange={handleDocChange}
                name="Doctors"
                id="Doctors"
                required
                className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              >
                <option value="">Select a dentist</option>
                <option value="John Doe">John Doe</option>
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
                onChange={handleDateChange}
                type="date"
                name="Date"
                id="Date"
                required
                className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              />
            </div>

            {availabilityMessage !== "" && (
              <p className="mt-4 text-sm text-[#12345B]">
                {availabilityMessage}
              </p>
            )}

            {AvailableTime.length > 0 && (
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Time"
                  className="text-sm md:text-lg font-medium text-[#12345B]"
                >
                  Time
                </label>

                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  name="Time"
                  id="Time"
                  required
                  className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
                >
                  <option value="">Select preferredTime</option>

                  {AvailableTime.map((theTime) => (
                    <option value={theTime} key={theTime}>
                      {theTime}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {time !== "" && (
              <Link
              to= '/booknow'
                type="submit"
                className="w-full relative top-10 left-8 md:left-20 rounded-4xl bg-[#12345B] px-4 py-3 my-6 font-medium text-white transition hover:bg-[#164b87] "
              >
                Continue to Booking page
              </Link>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Booking;
