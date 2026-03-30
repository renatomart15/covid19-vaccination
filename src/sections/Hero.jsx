import vacinaimage from "../assets/vacina-image.png";

const Hero = () => {
  return (
    <section className="px-9 lg:flex lg:mt-12 justify-between">
      <div>
        <p className="text-(--cyan) text-xs font-semibold mb-5  md:mb-7 min-[300px]:pt-10 md:text-base lg:text-lg">
          Get Vaccinated, Boost your Immune System
        </p>
        <div>
          <h1 className="text-white text-2xl font-extrabold mb-5 md:text-3xl md:mb-7 md:w-[55%] lg:w-[90%] lg:text-4xl lg:my-12">
            COVID-19 Vaccination Got Easier With,{" "}
            <span className="text-(--cyan)">Vaccination.ng</span>
          </h1>
          <p className="text-white/70 text-sm font-semibold mb-10 md:text-lg md:w-[65%] lg:w-[90%]">
            Vaccination.ng will help you find the nearest centre for
            vaccination, in all 36 states in Nigeria.
          </p>
        </div>
        <div className="flex justify-between pb-10 text-sm min-[300px]:text-xs md:justify-normal md:gap-6 min-[400px]:text-base md:text-lg">
          <button className="text-white font-semibold bg-(--cyan) py-4 px-6.5 rounded-2xl shadow-black/20 shadow-lg active:scale-95 transition-transform duration-75 min-[300px]:py-3 min-[300px]:px-4 sm:px-5 md:px-6">
            Get Vaccine
          </button>
          <button className="text-white font-semibold bg-[#212b53] border-2 border-(--cyan) py-4 px-6.5 rounded-2xl shadow-black/20 shadow-lg active:scale-95 transition-transform duration-75 min-[300px]:py-3 min-[300px]:px-4 sm:px-5 md:px-6">
            Help Centre
          </button>
        </div>
      </div>

      <div className="md:flex md:mx-auto md:w-[90%] lg:block max-w-165">
        <img src={vacinaimage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
