import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import NavSection from "../components/NavSection";
import { Link } from "react-scroll";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const sections = [
  { sectionId: "home", menuOption: "Home" },
  { sectionId: "services", menuOption: "Services" },
  { sectionId: "schedule", menuOption: "Schedule" },
  { sectionId: "contactus", menuOption: "Contact us" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header id="home">
        <nav className="h-40 flex justify-between items-center text-white px-9 pt-8 min-[300px]:h-20 md:h-20">
          <div>
            <h1 className="text-xl font-bold md:text-2xl">Vaccination.ng</h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-0.5 w-21 mt-0.5 rounded-2xl bg-(--cyan) md:w-25 xl:w-40 lg:h-1"
            ></motion.div>
          </div>
          <button
            className={`${isOpen ? "bg-(--cyan)" : "bg-white/15"}  ${isOpen ? "rounded-t-lg" : "rounded-lg"} p-1 shadow-black/20 shadow-lg h-12 w-12 flex items-center justify-center lg:hidden transition duration-500`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoClose className="h-9 w-9" />
            ) : (
              <HiMenuAlt3 className="h-9 w-9" />
            )}
          </button>
          <ul className="hidden lg:flex gap-10">
            {sections.map((section) => (
              <NavSection
                key={section.menuOption}
                sectionId={section.sectionId}
                sectionOption={section.menuOption}
              />
            ))}
          </ul>
          <Link
            to="checkresult"
            smooth={true}
            duration={500}
            spy={true}
            className="hidden text-(--cyan) lg:block text-lg px-4 rounded-xl py-3 mb-2 font-semibold bg-white/5 cursor-pointer shadow-2xl"
          >
            Check Status
          </Link>
        </nav>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex text-white absolute right-0 w-full lg:hidden"
          >
            <nav className="list-none bg-(--cyan) w-full pt-3 pb-1">
              <ul>
                {sections.map((section) => (
                  <NavSection
                    key={section.menuOption}
                    sectionId={section.sectionId}
                    sectionOption={section.menuOption}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
