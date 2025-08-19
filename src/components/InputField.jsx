import React from "react";
import { useNavigate } from "react-router-dom";

const InputField = () => {
  const navigate = useNavigate();
  const handleStartTracking = () => navigate("/dashboard");

  return (
    <div className="flex flex-col gap-4 transition-all duration-500 ease-in-out">
      <label className="flex flex-col gap-1">
        <span className="text-sm">Full Name</span>
        <input
          type="text"
          placeholder="e.g., John Doe"
          className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm">Position Applied For</span>
        <input
          type="text"
          placeholder="e.g., Front-End Developer"
          className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg"
        />
      </label>
      <label className="flex flex-col gap-1 mb-10">
        <span className="text-sm">Target Company (Optional)</span>
        <input
          type="text"
          placeholder="e.g., Roms Corporation"
          className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg"
        />
      </label>
      <button
        onClick={handleStartTracking}
        className="btn btn-md w-[450px] rounded-lg bg-[#1B2122] border-0 hover:bg-[#384244]"
      >
        Start Tracking
      </button>
    </div>
  );
};

export default InputField;
