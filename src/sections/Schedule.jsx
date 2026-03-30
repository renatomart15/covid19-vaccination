// components
import ScheduleInformation from "../components/ScheduleInformation";

// icons
import { MdAccessTime, MdOutlineShield } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";

// images
import astrazeneca from "../assets/empresas/astrazeneca.png";
import pfizer from "../assets/empresas/pfizer.png";
import sinovac from "../assets/empresas/sinovac.png";
import moderna from "../assets/empresas/moderna.png";

const dataSchedules = [
  {
    icon: <HiOutlineLocationMarker />,
    title: "Location",
    data: "Ikeja Lagos, Nigeria",
  },
  {
    icon: <FiCalendar />,
    title: "Date",
    data: "29 February, 2022",
  },
  {
    icon: <MdOutlineShield />,
    title: "Vaccine Type",
    data: "Mordena",
  },
];

const Schedule = () => {
  return (
    <>
      <section className="px-9">
        <div className="flex gap-2 items-center pt-8 pb-6 md:gap-4">
          <div className="bg-white/7 rounded-md p-0.5 shadow-black/20 shadow-lg md:p-2">
            <MdAccessTime className="text-(--cyan) text-2xl md:text-3xl" />
          </div>
          <h2 className="text-white text-sm font-bold md:text-xl">
            Schedule your Vaccination
          </h2>
        </div>

        <div className="bg-white/4 pt-3 rounded-t-2xl">
          <div className="bg-white/5 rounded-t-2xl px-4">
            <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-4">
              <ScheduleInformation
                key={dataSchedules[0].title}
                infoIcon={dataSchedules[0].icon}
                infoTitle={dataSchedules[0].title}
                infoData={dataSchedules[0].data}
              />
              <ScheduleInformation
                key={dataSchedules[1].title}
                infoIcon={dataSchedules[1].icon}
                infoTitle={dataSchedules[1].title}
                infoData={dataSchedules[1].data}
              />
              <ScheduleInformation
                key={dataSchedules[2].title}
                infoIcon={dataSchedules[2].icon}
                infoTitle={dataSchedules[2].title}
                infoData={dataSchedules[2].data}
              />
              <div className="flex lg:justify-center">
                <button className="inline-block text-white font-semibold bg-(--cyan) py-4 px-11 rounded-2xl shadow-black/20 shadow-lg mb-4 active:scale-95 transition-transform duration-75 md:px-25 md:text-lg lg:px-15">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="filter grayscale opacity-50 flex px-6 justify-center items-center gap-4 py-2 min-h-[9vw] md:justify-between md:px-[10vw] md:py-1 md:min-h-[6vw]">
          <img className="min-w-[19vw] h-auto md:min-w-[5vw]" src={moderna} alt="moderna" />
          <img className="min-w-[20vw] h-auto md:min-w-[6vw]" src={pfizer} alt="pfizer" />
          <img className="min-w-[21vw] h-auto md:min-w-[7vw]" src={astrazeneca} alt="astrazeneca" />
          <img className="min-w-[20vw] h-auto md:min-w-[6vw]" src={sinovac} alt="sinovac" />
        </div>
      </div>
    </>
  );
};

export default Schedule;
