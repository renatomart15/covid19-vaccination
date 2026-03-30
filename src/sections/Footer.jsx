import {
  SlSocialYoutube,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialFacebook,
} from "react-icons/sl";

import { LuSend } from "react-icons/lu";

import { motion } from "motion/react";
import { Link } from "react-scroll";

const sections = [
  { sectionId: "home", menuOption: "Home" },
  { sectionId: "services", menuOption: "Services" },
  { sectionId: "schedule", menuOption: "Schedule" },
  { sectionId: "contactus", menuOption: "Contact us" },
];

const Footer = () => {
  return (
    <section id="contactus" className="relative mt-30 select-none">
      <div className="absolute left-1/2 -translate-x-1/2 -top-25 w-[85%] rounded-2xl bg-gray-400/24 px-3 py-7 lg:w-[70%]">
        <div className="text-white bg-(--cyan) p-5 rounded-2xl">
          <h2 className="text-xl font-bold text-center mb-1 md:text-2xl lg:text-4xl">
            Get a quote
          </h2>
          <p className="text-xs text-white text-center mb-5 md:text-base lg:text-lg lg:py-4">
            Please do enter your email address below
          </p>
          <div className="flex    justify-center">
            <input
              type="email"
              placeholder="lenux.ng@gmail.com"
              className="bg-white text-xs placeholder:text-xs w-[80%] py-3 px-6 rounded-tl-3xl rounded-bl-3xl text-black md:placeholder:text-base md:text-base md:w-[60%] lg:w-[50%] lg:placeholder:text-lg lg:text-lg shadow-2xl "
            />
            <button className="w-[20%] pr-2 bg-[#0b153C] rounded-tr-3xl rounded-br-3xl flex items-center justify-center text-xl md:text-2xl lg:text-3xl shadow-2xl">
              <LuSend />
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-[url('./assets/background.png')] pt-35 px-8 pb-6">
        <div className="lg:flex lg:justify-between lg:pt-25 lg:pb-5 lg:items-center">
          <div className="md:mt-5">
            <p className="text-base text-white font-bold md:text-lg lg:text-xl">
              Vaccination.ng
            </p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-0.5 w-22 mt-0.5 rounded-2xl bg-(--cyan) lg:h-1"
            ></motion.div>
          </div>
          <nav>
            <ul className="text-white font-semibold flex flex-col gap-2 text-sm py-6 md:py-10 md:flex-row md:gap-5 md:text-base lg:text-lg lg:gap-8">
              {sections.map((sectionOption) => (
                <Link
                  to={sectionOption.sectionId}
                  smooth={true}
                  duration={500}
                  spy={true}
                >
                  <span className="hover:text-(--cyan) cursor-pointer transition">
                    {sectionOption.menuOption}
                  </span>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2 text-white text-xl items-center md:text-2xl md:gap-4 lg:text-3xl lg:gap-5">
            <a
              className="cursor-pointer hover:text-(--cyan) transition"
              href="https://www.youtube.com/"
              target="_blank"
            >
              <SlSocialYoutube />
            </a>
            <a
              className="cursor-pointer hover:text-(--cyan) transition"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <SlSocialInstagram />
            </a>
            <a
              className="cursor-pointer hover:text-(--cyan) transition"
              href="https://x.com/home"
              target="_blank"
            >
              <SlSocialTwitter />
            </a>
            <a
              className="cursor-pointer hover:text-(--cyan) transition"
              href="https://www.facebook.com/?locale=pt_BR"
              target="_blank"
            >
              <SlSocialFacebook />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
