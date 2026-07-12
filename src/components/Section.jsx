const Section = () => {
  return (
    <div className="relative top-30 ">
      <div className="flex flex-col gap-10 ">
        <div className="w-full h-10 border red_white rounded-2xl ">
          <h2 className="text-white font-bold text-center text-2xl sm:text-3xl  ">
            Best Deals For Students
          </h2>
        </div>
        <div className="w-full h-10 border red_white rounded-2xl">
          <h2 className="text-white font-bold text-center text-2xl sm:text-3xl">
            Free Test Tier
          </h2>
        </div>
        <div className="w-full h-10 border red_white rounded-2xl">
          <h2 className="text-white font-bold text-center text-2xl sm:text-3xl">
            Check The Available test
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section;
