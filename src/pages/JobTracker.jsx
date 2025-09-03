import React from "react";
import AddFilterSearch from "../components/Job Tracker/AddFilterSearch";
import DataTable from "../components/Job Tracker/DataTable";

const JobTracker = () => {
  const ApplicationSent = [
    { Label: "Total Applied", Value: "3" },
    { Label: "Interview", Value: "2" },
    { Label: "Offers", Value: "0" },
  ];

  return (
    <div className="w-full h-full flex flex-col text-[#222222] gap-3">
      {/* Header */}
      <div className="w-full h-[15%] flex flex-row items-center justify-between border-1 border-neutral-200 px-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">📋 Job Applications Tracker</h1>
        <div className="flex flex-row gap-2">
          {ApplicationSent.map(({ Label, Value }) => (
            <div className="flex flex-col items-center justify-center rounded-xl py-3 px-8 bg-neutral-100 gap-1">
              <h1 className="text-2xl font-bold">{Value}</h1>
              <p className="text-sm">{Label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Add, Export & Search */}
      <div className="w-full h-[6%]">
        <AddFilterSearch />
      </div>
      {/* Data table */}
      <div className="w-full h-[84%] ">
        <DataTable />
      </div>
    </div>
  );
};

export default JobTracker;
