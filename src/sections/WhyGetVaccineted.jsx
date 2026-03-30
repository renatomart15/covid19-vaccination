import React from "react";
import { MdOutlineShield } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RxPeople } from "react-icons/rx";
import { FaTemperatureEmpty } from "react-icons/fa6";

const WhyGetVaccineted = () => {
  return (
    <section id="services" className="px-9 py-10">
      <div className="lg:flex justify-between">
        <h2 className="text-white font-bold text-2xl mb-3 md:text-3xl lg:text-4xl lg:w-[50%]">
          Why get vaccineted today?
        </h2>
        <p className="text-white/70 text-sm mb-9 md:text-base">
          Magna adipiscing at elit at ornare lectus nibh lorem. <br />
          Ac, sed ac lorem pellentesque vestibulum risus matti. <br />
          In molestie condimentum malesuada non.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10 lg:justify-between">
        <div className="bg-white/10 rounded-3xl p-5 rounded-tr-[80px] md:w-[60%] lg:max-w-[35%]">
          <MdOutlineShield className="text-(--cyan) bg-white/6 rounded-xl text-5xl p-1 mb-4 shadow-black/10 shadow-lg md:p-2 md:text-7xl" />
          <h3 className="text-(--cyan) font-semibold text-sm mb-5 md:text-xl md:w-[70%]">
            Protects your immune system against viruses
          </h3>
          <p className="text-white text-sm mb-6 md:text-base">
            Velit ut consectetur mauris, orci amet, faucibus. Sit turpis fringilla
            ipsum pretium, dictum. Dolor eget vel nulla lorem ac.
          </p>
          <p className="text-(--cyan) flex gap-1 items-center text-sm font-semibold md:text-base cursor-pointer">
            Read more{" "}
            <IoMdArrowRoundForward className="text-lg md:text-2xl" />{" "}
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-8 md:flex-row lg:gap-10 lg:mt-0 lg:items-end">
          <div className="border-3 border-white/40 rounded-4xl p-4 w-[64%] max-w-85 flex flex-col gap-5 md:p-7 lg:h-65 justify-between">
            <div>
              <RxPeople className="text-white bg-white/5 p-2 mb-2 text-5xl rounded-xl shadow-black/10 shadow-lg md:p-3 md:text-6xl" />
              <h3 className="text-white font-bold text-sm md:text-xl">
                Minimize the spread of the Virus
              </h3>
            </div>
            <p className="text-white/50 flex gap-1 items-center text-sm font-semibold md:text-base cursor-pointer">
              Read more <IoMdArrowRoundForward className="text-base" />
            </p>
          </div>
          <div className="border-3 border-white/40 rounded-4xl p-4 w-[64%] max-w-85 flex flex-col gap-5 md:p-7 lg:h-65 justify-between">
            <div>
              <FaTemperatureEmpty className="text-white bg-white/5 p-2 mb-2 text-5xl rounded-xl shadow-black/10 shadow-lg md:p-3 md:text-6xl" />
              <h3 className="text-white font-bold text-sm md:text-xl">
                Protect yourself
              </h3>
            </div>
            <p className="text-white/50 flex gap-1 items-center text-sm font-semibold md:text-base cursor-pointer">
              Read more <IoMdArrowRoundForward className="text-base" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGetVaccineted;
