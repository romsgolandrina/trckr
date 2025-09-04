import React from "react";

const DataTable = () => {
  const Applications = [
    {
      Company: "Google",
      Position: "Software Engineer",
      DateApplied: "Sep 1, 2025",
      Status: "Interview",
      Salary: "$150,000 - $200,000",
      Location: "Remote",
    },
    {
      Company: "Amazon AWS",
      Position: "Front-end Developer",
      DateApplied: "Sep 1, 2025",
      Status: "Applied",
      Salary: "$120,000 - $300,000",
      Location: "NYC",
    },
    {
      Company: "Oracle",
      Position: "QA Engineer",
      DateApplied: "Aug 27, 2025",
      Status: "Offer",
      Salary: "$90,000 - $100,000",
      Location: "LA California",
    },
    {
      Company: "Riot Games",
      Position: "Game Developer",
      DateApplied: "Apr 10, 2025",
      Status: "Rejected",
      Salary: "$190,000 - $300,000",
      Location: "China",
    },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case "Rejected":
        return "bg-red-500 text-white";
      case "Interview":
        return "bg-blue-500 text-white";
      case "Applied":
        return "bg-gray-200 text-[#222222]";
      case "Offer":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-gray-700";
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-3">
      {/* Table */}
      <div className="overflow-x-auto rounded-box border-1 border-neutral-300 rounded-lg shadow-md">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-neutral-600 border-b-1 border-neutral-300 bg-neutral-200">
              <th>Company & Position</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th>Salary</th>
              <th>Location</th>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Applications.map(
              ({
                Company,
                Position,
                DateApplied,
                Status,
                Salary,
                Location,
              }) => (
                <tr>
                  <td className="flex flex-col gap-1">
                    {Position}
                    <span className="text-[12px]">{Company}</span>
                  </td>
                  <td>{DateApplied}</td>
                  <td>
                    <span
                      className={`py-1 px-3 rounded-xl text-sm ${getStatusClasses(
                        Status
                      )}`}
                    >
                      {Status}
                    </span>
                  </td>
                  <td>{Salary}</td>
                  <td>{Location}</td>
                  <td className="flex flex-row gap-2">
                    <button className="p-2 rounded-sm bg-neutral-100">
                      ✏️
                    </button>
                    <button className="p-2 rounded-sm bg-neutral-100">
                      🗑️
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="w-full flex flex-row items-center justify-end">
        <div className="join [&_.btn]:bg-neutral-100 [&_.btn]:text-[#222222] [&_.btn]:border-1 [&_.btn]:border-neutral-300  [&_.btn]:shadow-none">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
