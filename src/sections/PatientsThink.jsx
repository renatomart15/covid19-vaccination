import oyindamola from "../assets/patientsPhotos/oyindamola.png";
import okeowo from "../assets/patientsPhotos/okeowo.png";
import kafaru from "../assets/patientsPhotos/kafaru.png";
import PatientTestimony from "../components/PatientTestimony";

import { motion } from "motion/react";

const patientsTestimonys = [
  {
    patientPhoto: oyindamola,
    name: "Oyindamola Maja",
    loc: "Badagry, Lagos",
    testimony:
      "Been stressing about a close centreto get the covid-19 vaccine, until i tried Vaccination.ng",
  },
  {
    patientPhoto: okeowo,
    name: "Okeowo Lekan",
    loc: "Ikeja, Lagos",
    testimony:
      "Been stressing about a close centreto get the covid-19 vaccine, until i tried Vaccination.ng",
  },
  {
    patientPhoto: kafaru,
    name: "Kafaru Temitope",
    loc: "Obanikoro, Lagos",
    testimony:
      "Been stressing about a close centreto get the covid-19 vaccine, until i tried Vaccination.ng",
  },
];

const PatientsThink = () => {
  return (
    <section className="text-center py-8 px-8 bg-[url('./assets/vaccines-background.png')] bg-auto bg-no-repeat bg-center">
      <h2 className="text-(--cyan) font-bold mb-4 md:text-lg lg:text-xl">
        FEEDBACK
      </h2>
      <h3 className="font-bold text-2xl mb-4 md:text-3xl lg:text-4xl">
        What our Patients Think
      </h3>
      <div className="lg:flex lg:justify-center">
        <p className="text-sm mb-4 px-7 font-semibold text-gray-800 md:text-base md:mb-10 lg:text-lg lg:w-[50%] lg:py-7">
          Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis
          aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue
          arcu ue.
        </p>
      </div>
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {patientsTestimonys.map((testimony) => (
            <motion.li
              key={testimony.name}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8 }}
            >
              <PatientTestimony
                photo={testimony.patientPhoto}
                name={testimony.name}
                location={testimony.loc}
                testimony={testimony.testimony}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PatientsThink;
