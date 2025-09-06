import React from "react";
import { useUserApplication } from "../../context/ApplicationsInput";

const DataTable = () => {
  const { jobTrack, deleteApplication, updateApplication } =
    useUserApplication();

  const STATUS_COLORS = {
    Rejected: "bg-red-500 text-white",
    Interview: "bg-blue-500 text-white",
    Applied: "bg-gray-200 text-gray-800",
    Offer: "bg-green-500 text-white",
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
    if (alert("Successfully updated the Application!")) {
      updateApplication(index);
    }
  };

  // Display/Edit/Delete Data
  const getApplicationData = (application) => ({
    company: application.company || application.Company || "",
    position: application.jobPosition || application.Position || "",
    dateApplied: application.dateApplied || application.DateApplied || "",
    status: application.status || application.Status || "",
    salary: application.salary || application.Salary || "",
    location: application.location || application.Location || "",
  });

  // Show "No Data" message when there are no applications
  if (!jobTrack || jobTrack.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <div className="mb-4">
            <svg
              className="w-16 h-16 mx-auto text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No Applications Found
          </h3>
          <p className="text-gray-500 text-sm">
            Start tracking your job applications by adding your first one!
          </p>
        </div>
      </div>
    );
  }

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
            {jobTrack.map((application, index) => {
              const data = getApplicationData(application);
              return (
                <tr key={index}>
                  <td className="flex flex-col gap-1">
                    <span className="font-medium">{data.position}</span>
                    <span className="text-[12px] text-gray-600">
                      {data.company}
                    </span>
                  </td>
                  <td>{formatDate(data.dateApplied)}</td>
                  <td>
                    <span
                      className={`py-1 px-3 rounded-xl text-sm font-medium ${
                        STATUS_COLORS[data.status] || "bg-gray-500 text-white"
                      }`}
                    >
                      {data.status}
                    </span>
                  </td>
                  <td>{data.salary}</td>
                  <td>{data.location}</td>
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
                  </td>
                </tr>
              );
            })}
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
