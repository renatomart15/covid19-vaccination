const ScheduleInformation = ({ infoIcon, infoTitle, infoData }) => {
  return (
    <div className="flex font-semibold gap-2 text-sm items-center md:gap-3">
      <div className="flex items-center">
        <div className="bg-white/6 rounded-md p-1 shadow-black/20 shadow-lg md:p-2">
          <div className="text-(--cyan) text-2xl md:text-3xl">{infoIcon}</div>
        </div>
      </div>

      <div>
        <h3 className="text-white/50 md:text-lg">{infoTitle}</h3>
        <p className="text-white md:text-lg">{infoData}</p>
      </div>
    </div>
  );
};

export default ScheduleInformation;
