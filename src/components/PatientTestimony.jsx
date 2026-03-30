const PatientTestimony = ({ photo, name, location, testimony }) => {
  return (
    <div className="group bg-gray-400/40 rounded-3xl px-5 py-6 hover:bg-(--cyan) hover:text-white transition hover:-translate-y-1 hover:shadow-2xl md:px-6 md:py-7 md:max-w-sm select-none">
      <div className="flex items-center gap-4 mb-8">
        <img className="shadow rounded-2xl md:w-16" src={photo} alt={name} />
        <div>
          <p className="font-bold md:text-lg">{name}</p>
          <p className="font-semibold text-sm md:text-base text-gray-700 group-hover:text-white transition text-left">
            {location}
          </p>
        </div>
      </div>
      <p className="text-center text-sm p-2 md:text-base font-medium">"{testimony}"</p>
    </div>
  );
};

export default PatientTestimony;
