import React from "react";
import covidSymptoms from "../assets/covid-symptoms.png";

const CovidSymptoms = () => {
  return (
    <section>
      <div className="pt-7 px-9 lg:pt-8">
        <p className="text-white font-semibold text-center mb-2 md:text-lg lg:text-xl">
          Covid-19 Prevention
        </p>
        <h2 className="text-center text-white font-bold text-2xl mb-2 md:text-3xl">
          <span className="text-(--cyan) lg:text-4xl">COVID-19</span> Symptoms
        </h2>
        <div className="lg:flex lg:justify-center">
          <p className="text-center text-white/70 text-sm mb-5 md:text-base md:px-30 md:my-8 lg:text-lg lg:w-[70%]">
            Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis
            aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet
            augue arcu donec neque.
          </p>
        </div>
      </div>
      <div className="px-1 flex justify-center ">
        <img
          className="md:w-[90%] lg:w-[70%]"
          src={covidSymptoms}
          alt="Covid Symptoms"
        />
      </div>
    </section>
  );
};

export default CovidSymptoms;
