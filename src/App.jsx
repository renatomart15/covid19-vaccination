import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import Schedule from "./sections/Schedule";
import CheckResult from "./sections/CheckResult";
import WhyGetVaccineted from "./sections/WhyGetVaccineted";
import GetYourVaccine from "./sections/GetYourVaccine";
import CovidSymptoms from "./sections/CovidSymptoms";
import PatientsThink from "./sections/PatientsThink";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <div className="bg-[url('./assets/background.png')] bg-cover">
        <NavBar />
        <Hero />
        <Schedule />
        <CheckResult />
      </div>
      <div className="bg-[url('./assets/background.png')] bg-cover">
        <WhyGetVaccineted />
      </div>
      <GetYourVaccine />
      <div className="bg-[url('./assets/background.png')] bg-cover">
        <CovidSymptoms />
      </div>
      <PatientsThink />
      <Footer />
    </>
  );
}

export default App;
