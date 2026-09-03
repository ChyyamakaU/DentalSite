import { useState } from "react";
import { Link } from "react-router-dom";

function BookNow() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

function handleSubmit (e){

    e.preventDefault ()
}



  return (
    <>
      <section>
        <div className="flex justify-center px-4 py-10">
          <form action="" className="w-full max-w-md py-12">
            <h2 className="text-xl md:text-3xl font-bold text-[#12345B] pb-10 text-center">
              Please Enter your details
            </h2>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="Doctors"
                className="text-sm md:text-lg font-medium text-[#12345B]"
              >
                Title
              </label>

              <select
                name="Title"
                id="Title"
                required
                className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              >
                <option value="">Select a Title</option>
                <option value="Mr">Mr</option>
                <option value="Miss">Miss</option>
                <option value="Mrs">Mrs</option>
              </select>

              <label
                htmlFor="Name"
                className="text-sm md:text-lg font-medium text-[#12345B]"
              >
                Full Name
              </label>

              <input
              value={name}
              onChange={(e)=>setName(e.target.value)}
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              />

              <label
                htmlFor="email"
                className="text-sm md:text-lg font-medium text-[#12345B]"
              >
                Email
              </label>
              <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              />

              <label
                htmlFor="number"
                className="text-sm md:text-lg font-medium text-[#12345B]"
              >
                Phone Number
              </label>
              <input
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
                type="number"
                placeholder="Enter your phone number"
                required
                className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              />

              <label
                htmlFor="Treatment"
                className="text-sm md:text-lg font-medium text-[#12345B]"
              >
                Treatment
              </label>

              <select
                name="Treatment"
                id="Treatment"
                required
                className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              >
                <option value="">Select a Treatment</option>
                <option value="">invisalign</option>
                <option value="">Extraction</option>
                <option value="">General Consultation</option>
                <option value="">implants</option>
                <option value="">Braces</option>
                <option value="">Scaling and polishing</option>
                <option value="veerners">Veerners</option>
                <option value="others">Others</option>
              </select>

              <label
                htmlFor="HMO"
                className="text-sm md:text-lg font-medium text-[#12345B]"
              >
                Do you have a valid HMO
              </label>

              <select
                name="HMO"
                id="HMO"
                required
                className="w-full rounded-4xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#12345B] outline-none  focus:border-[#12345B] focus:ring-0 focus:ring-[#12345B] "
              >

                 <option value="">HMO?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <div className="flex gap-3 text-[#12345B] pt-3">
                <input type="checkbox" required className="w-4"/>
                <h3 className="font-bold text-lg md:textxl"> Privacy & Consent</h3>
              </div>
              <p className="text-xs md:text-sm text-[#12345B]">
              
                By submitting this form, I consent to Smile Clinics collecting
                and using the information I provide to schedule and manage my
                dental appointment. I understand that my information will be
                handled in accordance with the clinic's Privacy Policy and will
                only be used for purposes related to my care and appointment.
              </p>
            </div>

            <Link 
            to ="/success"
            onSubmit={handleSubmit}
              type="submit"
              className="w-full relative top-5 left-20 md:left-36 rounded-4xl bg-[#12345B] px-4 py-3 my-6 font-medium text-white transition hover:bg-[#164b87] "
            >
              Book Now
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}

export default BookNow;
