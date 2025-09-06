import React, { useState } from "react";
import { useUserApplication } from "../../../context/ApplicationsInput";

const AddApplicationModal = ({ isVisible, onClose }) => {
  const { addApplication } = useUserApplication();

  const INITIAL_FORM_STATE = {
    company: "",
    jobPosition: "",
    dateApplied: "",
    status: "",
    salary: "",
    location: "",
  };

  const APPLICATION_STATUSES = ["Applied", "Interview", "Offer", "Rejected"];

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [error, setError] = useState("");

  if (!isVisible) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSaveApplication = () => {
    if (
      !formData.company ||
      !formData.jobPosition ||
      !formData.dateApplied ||
      !formData.status ||
      !formData.salary ||
      !formData.location
    ) {
      setError("Please fill in all fields");
      return;
    }

    addApplication(formData);

    setFormData(INITIAL_FORM_STATE);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/25 backdrop-blur-[2px] flex justify-center items-center z-9999">
      <div className="w-[500px] h-[700px] bg-white rounded-xl flex flex-col px-6 py-7 text-[#222222] shadow-md justify-between">
        <div>
          <h1 className="font-bold text-2xl">Add New Application</h1>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        {/* Input Fields */}
        <div className="w-full flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold">
              Company <span className="text-red-500">*</span>
            </span>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              placeholder="e.g., John"
              className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold">
              Position Title <span className="text-red-500">*</span>
            </span>
            <input
              name="jobPosition"
              value={formData.jobPosition}
              onChange={handleChange}
              type="text"
              placeholder="e.g., Front-end Developer"
              className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold">
              Date Applied <span className="text-red-500">*</span>
            </span>
            <input
              name="dateApplied"
              value={formData.dateApplied}
              onChange={handleChange}
              type="date"
              className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg text-[#222222]"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Status</span>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              defaultValue="Status"
              className="select w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg text-[#222222]"
            >
              <option value="" disabled>
                Select status
              </option>
              {APPLICATION_STATUSES.map((status) => (
                <option className="text-black" key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Salary</span>
            <input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              type="text"
              placeholder="e.g., $120,000 - $300,000"
              className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Location</span>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text"
              placeholder="e.g., Remote, California"
              className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg"
            />
          </label>
        </div>
        {/* Buttons */}
        <div className="w-full flex flex-row items-center justify-end gap-2">
          <button
            onClick={() => onClose()}
            className="py-3 px-5 rounded-lg border-1 border-neutral-200 cursor-pointer hover:bg-red-400 hover:text-white font-semibold text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveApplication}
            className="py-3 px-5 rounded-lg border-1 border-neutral-200 bg-[#222222] text-white hover:bg-blue-500 cursor-pointer font-semibold text-sm"
          >
            Save Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddApplicationModal;
