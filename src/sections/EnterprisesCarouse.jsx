import astrazeneca from "../assets/empresas/astrazeneca.png";
import pfizer from "../assets/empresas/pfizer.png";
import sinovac from "../assets/empresas/sinovac.png";
import moderna from "../assets/empresas/moderna.png";
 
const EnterprisesCarouse = () => {
  return (
    <div className="overflow-hidden bg-white mt-5">
      <div className="filter grayscale flex w-max carousel opacity-60 py-2 px-2 gap-3 h-12">
        <img className="p-1.5" src={moderna} alt="" />
        <img src={pfizer} alt="" />
        <img className="p-0.5" src={astrazeneca} alt="" />
        <img className="p-1.5" src={sinovac} alt="" />
        <img className="p-1.5" src={moderna} alt="" />
        <img src={pfizer} alt="" />
        <img className="p-0.5" src={astrazeneca} alt="" />
        <img className="p-1.5" src={sinovac} alt="" />
      </div>
    </div>
  );
};

export default EnterprisesCarouse;
