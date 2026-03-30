import { useState } from "react";
import getYourVaccineImage from "../assets/get-your-vaccine-image.png";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const paises = [
  { nome: "Brasil", code: "br", ddi: "+55" },
  { nome: "Nigéria", code: "ng", ddi: "+234" },
  { nome: "Estados Unidos", code: "us", ddi: "+1" },
  { nome: "Portugal", code: "pt", ddi: "+351" },
];

const GetYourVaccine = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(paises[0]);

  const getFlagUrl = (code) => `https://flagcdn.com/w40/${code}.png`;

  return (
    <section
      id="schedule"
      className="p-9 lg:flex justify-between items-center lg:gap-6 lg:py-3"
    >
      <div className="lg:max-w-200">
        <h2 className="font-bold text-2xl mb-5 text-center md:text-3xl md:text-left lg:text-4xl lg:w-[60%]">
          Get your vaccine registration today
        </h2>
        <img
          src={getYourVaccineImage}
          className="mb-10 md:w-[40%] md:min-w-70 lg:hidden"
          alt="Get your Vaccine Image"
        />
        <form>
          <label className="flex flex-col gap-3 mb-6">
            <span className="font-semibold text-sm md:text-base">
              Patient's Full Name
            </span>
            <input
              className="bg-gray-300 py-3 px-6 rounded-xl placeholder:text-gray-500 placeholder:text-sm text-sm md:text-base md:placeholder:text-base"
              type="text"
              placeholder="Full name"
            />
          </label>
          <p className="font-semibold text-sm mb-2 md:text-base">
            Mobile Number
          </p>
          <p className="flex flex-col gap-3 text-sm mb-3 md:text-base text-gray-600 font-medium">
            Notifications for appointment and reminders will be sent to this
            provided number
          </p>
          <div className="md:flex md:justify-between lg:gap-4">
            <div>
              <div className="flex">
                <div
                  className={`flex items-center bg-gray-300 rounded-tl-xl ${!isOpen && "rounded-bl-xl"} px-4 md:px-6 md:py-1 gap-2 cursor-pointer select-none`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img
                    className="rounded-md items-center w-12 md:w-18"
                    src={getFlagUrl(selected.code)}
                    alt={selected.nome}
                  />
                  {isOpen && <FaChevronUp className="text-gray-500 text-5xl" />}
                  {!isOpen && (
                    <FaChevronDown className="text-gray-500 text-5xl" />
                  )}
                </div>
                <div className="flex items-center bg-gray-300">
                  <div className="bg-gray-400 w-1 rounded-2xl h-[80%]"></div>
                </div>
                <input
                  className="bg-gray-300 py-3 px-6 w-full rounded-tr-xl rounded-br-xl placeholder:text-gray-500 placeholder:text-sm text-sm md:text-base md:placeholder:text-base md:pr-[15vw]"
                  type="text"
                  placeholder="Phone number"
                />
              </div>
              {/* Opções da lista */}
              <div className="relative">
                <AnimatePresence>
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.1 }}
                      className="absolute flex flex-col py-2 rounded-b-2xl bg-gray-300 z-1"
                    >
                      {paises.map((pais) => (
                        <li
                          className="active:bg-gray-500 px-4 py-2 md:px-6"
                          key={pais.nome}
                          onClick={() => {
                            setSelected(pais);
                            setIsOpen(false);
                          }}
                        >
                          <img
                            className="rounded-md items-center md:w-12"
                            src={getFlagUrl(pais.code)}
                            alt={pais.nome}
                          />
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="text-white font-semibold bg-(--cyan) py-4 px-11 rounded-2xl active:scale-95 transition-transform duration-75 mb-15 mt-5 md:mt-0 md:mb-0 md:px-15 disabled:bg-gray-400/60 disabled:text-gray-500/60 disabled:active:scale-100"
                type="button"
                disabled={isOpen}
              >
                Verify
              </button>
            </div>
          </div>
          <button
            className="block text-white font-semibold bg-(--cyan) py-4 w-full rounded-2xl mb-4 active:scale-95 transition-transform duration-75 md:mt-6 disabled:bg-gray-400/60 disabled:text-gray-500/60 disabled:active:scale-100 z-0"
            type="button"
            disabled={isOpen}
          >
            Submit
          </button>
          <div className="flex justify-between text-sm md:justify-around md:mt-5">
            <p className="font-semibold text-gray-500 md:text-base">
              Already registered?
            </p>
            <a className="text-(--cyan) font-semibold md:text-base cursor-pointer">
              Check yout status
            </a>
          </div>
        </form>
      </div>
      <img
        src={getYourVaccineImage}
        className="hidden mb-10 md:w-[55%] lg:block lg:max-w-90"
        alt="Get your Vaccine Image"
      />
    </section>
  );
};

export default GetYourVaccine;
