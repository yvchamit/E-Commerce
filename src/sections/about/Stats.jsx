const Stats = () => {
  const statItems = [
    { figure: "15K", label: "Happy Customers" },
    { figure: "150K", label: "Monthly Visitors" },
    { figure: "15", label: "Countries Worldwide" },
    { figure: "100+", label: "Top Partners" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-section mx-auto px-8 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {statItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="text-6xl font-bold text-[#252B42]">
                {item.figure}
              </h2>
              <h5 className="text-base font-bold text-[#737373]">
                {item.label}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;