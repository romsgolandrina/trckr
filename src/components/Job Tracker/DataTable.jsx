import React, { useState, useMemo } from "react";
import { useUserApplication } from "../../context/ApplicationsInput";
import Swal from "sweetalert2";

const DataTable = () => {
  const { jobTrack, deleteApplication, updateApplication } =
    useUserApplication();
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const STATUS_COLORS = {
    Rejected: "bg-red-500 text-white",
    Interview: "bg-blue-500 text-white",
    Applied: "bg-gray-200 text-gray-800",
    Offer: "bg-green-500 text-white",
  };

  // Calculate pagination values
  const totalItems = jobTrack?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page data
  const paginatedData = useMemo(() => {
    if (!jobTrack || jobTrack.length === 0) return [];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return jobTrack.slice(startIndex, endIndex);
  }, [jobTrack, currentPage, itemsPerPage]);

  // Reset to page 1 if current page exceeds total pages (after deletion)
  React.useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleDelete = (displayIndex) => {
    const actualIndex = (currentPage - 1) * itemsPerPage + displayIndex;
    Swal.fire({
      title: "Are you sure?",
      text: "This application will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteApplication(actualIndex);
        Swal.fire("Deleted!", "Your application has been deleted.", "success");
      }
    });
  };

  const handleEditStart = (displayIndex) => {
    const actualIndex = (currentPage - 1) * itemsPerPage + displayIndex;
    const application = jobTrack[actualIndex];
    setEditingIndex(displayIndex); // Use display index for UI state
    setEditForm({
      company: application.company || "",
      jobPosition: application.jobPosition || "",
      dateApplied: application.dateApplied || "",
      status: application.status || "",
      salary: application.salary || "",
      location: application.location || "",
      actualIndex, // Store actual index for saving
    });
  };

  const handleEditSave = () => {
    if (editingIndex !== null && editForm.actualIndex !== undefined) {
      updateApplication(editForm.actualIndex, editForm);
      setEditingIndex(null);
      setEditForm({});
    }
  };

  const handleEditCancel = () => {
    setEditingIndex(null);
    setEditForm({});
  };

  const handleInputChange = (field, value) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  // Pagination helpers
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setEditingIndex(null); // Clear editing when changing pages
    }
  };

  const getVisiblePages = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const pages = [];

    // Always show first page
    if (totalPages > 0) pages.push(1);

    // Calculate start and end of visible range
    let start = Math.max(2, currentPage - delta);
    let end = Math.min(totalPages - 1, currentPage + delta);

    // Add ellipsis after first page if needed
    if (start > 2) {
      pages.push("...");
    }

    // Add visible pages
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis before last page if needed
    if (end < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page (if more than 1 page)
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  // Display/Edit/Delete Data
  const getApplicationData = (application) => ({
    company: application.company || "",
    position: application.jobPosition || "",
    dateApplied: application.dateApplied || "",
    status: application.status || "",
    salary: application.salary || "",
    location: application.location || "",
  });

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
      {/* Results info */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
          applications
        </span>
        <span>
          Page {currentPage} of {totalPages}
        </span>
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
            {paginatedData.map((application, displayIndex) => {
              const data = getApplicationData(application);
              const isEditing = editingIndex === displayIndex;

              return (
                <tr
                  key={displayIndex}
                  className={isEditing ? "bg-blue-50" : ""}
                >
                  <td className="flex flex-col gap-1">
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          value={editForm.jobPosition}
                          onChange={(e) =>
                            handleInputChange("jobPosition", e.target.value)
                          }
                          className="font-medium border-1 border-neutral-400 rounded px-2 py-1 text-sm"
                          placeholder="Job Position"
                        />
                        <input
                          type="text"
                          value={editForm.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className="text-xs  border-1 border-neutral-400 rounded px-2 py-1"
                          placeholder="Company"
                        />
                      </>
                    ) : (
                      <>
                        <span className="font-medium">{data.position}</span>
                        <span className="text-xs">{data.company}</span>
                      </>
                    )}
                  </td>

                  <td>
                    {isEditing ? (
                      <input
                        type="date"
                        value={editForm.dateApplied}
                        onChange={(e) =>
                          handleInputChange("dateApplied", e.target.value)
                        }
                        className="border-1 border-neutral-400 rounded px-2 py-1 text-sm w-full"
                      />
                    ) : (
                      formatDate(data.dateApplied)
                    )}
                  </td>

                  <td>
                    {isEditing ? (
                      <select
                        value={editForm.status}
                        onChange={(e) =>
                          handleInputChange("status", e.target.value)
                        }
                        className="border-1 border-neutral-400 rounded px-2 py-1 text-sm w-full"
                      >
                        <option value="">Select Status</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    ) : (
                      <span
                        className={`py-1 px-3 rounded-xl text-sm font-medium ${
                          STATUS_COLORS[data.status] || "bg-gray-500 text-white"
                        }`}
                      >
                        {data.status}
                      </span>
                    )}
                  </td>

                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.salary}
                        onChange={(e) =>
                          handleInputChange("salary", e.target.value)
                        }
                        className="border-1 border-neutral-400 rounded px-2 py-1 text-sm w-full"
                        placeholder="Salary"
                      />
                    ) : (
                      data.salary
                    )}
                  </td>

                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) =>
                          handleInputChange("location", e.target.value)
                        }
                        className="border-1 border-neutral-400 rounded px-2 py-1 text-sm w-full"
                        placeholder="Location"
                      />
                    ) : (
                      data.location
                    )}
                  </td>

                  <td>
                    <div className="flex gap-2">
                      {isEditing ? (
                        <>
                          <button
                            onClick={handleEditSave}
                            className="p-2 rounded bg-green-100 hover:bg-green-200 transition-colors cursor-pointer"
                            title="Save changes"
                          >
                            ✅
                          </button>
                          <button
                            onClick={handleEditCancel}
                            className="p-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                            title="Cancel editing"
                          >
                            ❌
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditStart(displayIndex)}
                            className="p-2 rounded bg-neutral-100 hover:bg-blue-100 transition-colors cursor-pointer"
                            title="Edit application"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => handleDelete(displayIndex)}
                            className="p-2 rounded bg-neutral-100 hover:bg-red-100 transition-colors cursor-pointer"
                            title="Delete application"
                          >
                            🗑️
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="btn btn-sm bg-neutral-100 text-[#222222] border-1 border-neutral-300 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="btn btn-sm bg-neutral-100 text-[#222222] border-1 border-neutral-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>

          <div className="join [&_.btn]:bg-neutral-100 [&_.btn]:text-[#222222] [&_.btn]:border-1 [&_.btn]:border-neutral-300 [&_.btn]:shadow-none">
            {getVisiblePages().map((page, index) =>
              page === "..." ? (
                <span key={index} className="join-item btn btn-disabled">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => goToPage(page)}
                  className={`join-item btn ${
                    currentPage === page
                      ? "btn-active bg-blue-500 text-white"
                      : ""
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
