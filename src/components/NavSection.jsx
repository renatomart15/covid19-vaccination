import { Link } from "react-scroll";
import { useState } from "react";

const NavSection = ({ sectionOption, sectionId, onClick }) => {
  const [active, setActive] = useState(sectionId === "home");
  
  return (
    <li className="cursor-pointer">
      <Link
        to={sectionId}
        smooth={true}
        duration={500}
        spy={true}
        onSetActive={() => setActive(true)}
        onSetInactive={() => setActive(false)}
        onClick={onClick}
        className="font-normal text-lg flex flex-col items-center transition-all"
      >
        <span className={active ? "text-white font-semibold" : "text-white/70"}>
          {sectionOption}
        </span>

        <div
          className={`w-2 h-2 mt-1 rounded-full ${
            active ? "bg-(--cyan)" : "bg-transparent"
          }`}
        ></div>
      </Link>
    </li>
  );
};

export default NavSection;
