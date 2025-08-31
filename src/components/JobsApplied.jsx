import React from "react";
import { FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa6";
import { BsBarChartFill } from "react-icons/bs";
import { BiSolidPieChartAlt2 } from "react-icons/bi";

const JobsApplied = () => {
  const totalApplication = [
    { label: "Today", value: "2", logo: FaRegCalendar },
    { label: "This Week", value: "10", logo: FaRegCalendarCheck },
    { label: "This Month", value: "40", logo: BsBarChartFill },
    { label: "Total", value: "50", logo: BiSolidPieChartAlt2 },
  ];

  return (
    <div className="w-full h-full flex flex-col text-[#222222]">
      <div className="w-full text-xl font-bold">Jobs Applied</div>
      <div className="flex-1 flex flex-row items-center ">
        {totalApplication.map(({ label, value, logo: Logo }) => (
          <div
            key={value}
            className="w-full h-full flex gap-2 items-center justify-center"
          >
            <div className="w-40 flex flex-col gap-2 items-center justify-center p-7 rounded-2xl shadow-md border-1 border-neutral-200">
              <Logo size={25} />
              <p className="text-base text-neutral-400">{label}</p>
              <h1 className="text-2xl font-semibold">{value}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsApplied;
