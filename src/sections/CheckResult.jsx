import { useState } from "react";

const CheckResult = () => {
  const [name, setName] = useState("Okeowo");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="checkresult" className="px-9 mt-15 pb-10 md:mt-20 md:pb-20">
      <div className="bg-white/2 text-white rounded-lg">
        <h2 className="bg-white/3 text-white text-xs font-semibold rounded-t-3xl py-5 text-center md:text-xl lg:text-left px-16">
          Check your COVID-19 result on our Database
        </h2>
        <form
          className="px-6 text-sm md:flex md:justify-center md:flex-col md:px-30 lg:flex-row lg:items-center lg:gap-5 lg:px-16 lg:mt-5"
          onSubmit={handleSubmit}
        >
          <input
            className="border-2 transition duration-500 border-white/10 placeholder:text-white/40 outline-0 focus:outline-(--cyan) focus:border-(--cyan) w-full rounded-xl p-3 mt-5 shadow-black/10 shadow-lg md:placeholder:text-base md:text-base md:p-4 lg:mt-0"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-2 transition duration-500 border-white/10 placeholder:text-white/40 outline-0 focus:outline-(--cyan) focus:border-(--cyan) w-full rounded-xl p-3 mt-4 shadow-black/10 shadow-lg md:placeholder:text-base md:text-base md:p-4 lg:mt-0"
            type="text"
            placeholder="NIK Number"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <div>
            <button className="text-(--cyan) block mt-4 border-2 border-(--cyan) rounded-xl py-3 px-12 font-semibold bg-white/6 shadow-black/20 shadow-lg active:scale-95 transition-transform duration-75 md:text-base lg:mt-0 lg:py-4">
              Check
            </button>
          </div>
        </form>
        <div className="text-(--cyan) px-6 mt-10 pb-7 md:px-20 lg:px-16 lg:mt-5">
          <div className="bg-white/4 rounded-2xl text-xs text-center font-semibold py-3 shadow-black/20 shadow-lg md:flex md:gap-1 md:justify-center md:text-sm">
            <p>Need a certificate for your COVID-19 result?</p>
            <p>
              Please, click <span className="underline">here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckResult;
