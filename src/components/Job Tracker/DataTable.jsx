import React from "react";
import { useUserApplication } from "../../context/ApplicationsInput"; // Adjust path as needed

const DataTable = () => {
  const { jobTrack, deleteApplication } = useUserApplication();

  // Fallback data if no applications exist yet
  const fallbackApplications = [
    {
      company: "Google",
      jobPosition: "Software Engineer",
      dateApplied: "2025-09-01",
      status: "Interview",
      salary: "$150,000 - $200,000",
      location: "Remote",
    },
    {
      company: "Amazon AWS",
      jobPosition: "Front-end Developer",
      dateApplied: "2025-09-01",
      status: "Applied",
      salary: "$120,000 - $300,000",
      location: "NYC",
    },
    {
      company: "Oracle",
      jobPosition: "QA Engineer",
      dateApplied: "2025-08-27",
      status: "Offer",
      salary: "$90,000 - $100,000",
      location: "LA California",
    },
    {
      company: "Riot Games",
      jobPosition: "Game Developer",
      dateApplied: "2025-04-10",
      status: "Rejected",
      salary: "$190,000 - $300,000",
      location: "China",
    },
  ];

  // Use context data if available, otherwise show fallback
  const displayApplications =
    jobTrack.length > 0 ? jobTrack : fallbackApplications;

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

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      deleteApplication(index);
    }
  };

  const handleEdit = (index) => {
    // TODO: Implement edit functionality
    console.log("Edit application at index:", index);
    alert("Edit functionality coming soon!");
  };

  return (
    <div className="w-full h-full flex flex-col gap-3">
      {/* Show context status */}
      <div className="text-sm text-gray-600 mb-2">
        {jobTrack.length > 0 ? (
          <span className="text-green-600">
            ✅ Showing {jobTrack.length} applications from your data
          </span>
        ) : (
          <span className="text-blue-600">
            ℹ️ Showing sample data - add applications to see your own data
          </span>
        )}
      </div>

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
            {displayApplications.map((application, index) => {
              // Handle both old format (Capital case) and new format (camelCase)
              const company = application.company || application.Company;
              const position = application.jobPosition || application.Position;
              const dateApplied =
                application.dateApplied || application.DateApplied;
              const status = application.status || application.Status;
              const salary = application.salary || application.Salary;
              const location = application.location || application.Location;

              return (
                <tr key={index}>
                  <td className="flex flex-col gap-1">
                    <span className="font-medium">{position}</span>
                    <span className="text-[12px] text-gray-600">{company}</span>
                  </td>
                  <td>{formatDate(dateApplied)}</td>
                  <td>
                    <span
                      className={`py-1 px-3 rounded-xl text-sm font-medium ${getStatusClasses(
                        status
                      )}`}
                    >
                      {status}
                    </span>
                  </td>
                  <td>{salary}</td>
                  <td>{location}</td>
                  <td className="flex flex-row gap-2">
                    {jobTrack.length > 0 && (
                      <>
                        <button
                          onClick={() => handleEdit(index)}
                          className="p-2 rounded-sm bg-neutral-100 hover:bg-blue-100 transition-colors"
                          title="Edit application"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="p-2 rounded-sm bg-neutral-100 hover:bg-red-100 transition-colors"
                          title="Delete application"
                        >
                          🗑️
                        </button>
                      </>
                    )}
                    {jobTrack.length === 0 && (
                      <span className="text-xs text-gray-400 px-2 py-1">
                        Sample data
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Statistics */}
      {jobTrack.length > 0 && (
        <div className="flex gap-4 text-sm">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Applied: {jobTrack.filter((app) => app.status === "Applied").length}
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            Interview:{" "}
            {jobTrack.filter((app) => app.status === "Interview").length}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
            Offer: {jobTrack.filter((app) => app.status === "Offer").length}
          </span>
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded">
            Rejected:{" "}
            {jobTrack.filter((app) => app.status === "Rejected").length}
          </span>
        </div>
      )}

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
