import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserInput";
import { useAppLoading } from "../App";

const InputField = () => {
  const { userData, setUserData } = useUser();
  const { startAppLoading } = useAppLoading(); // Get the loading function
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleStartTracking = () => {
    if (!userData.firstName || !userData.lastName || !userData.position) {
      setError("Please fill in all fields");
      return;
    }

    // Trigger the app loading
    startAppLoading();

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-4 transition-all duration-500 ease-in-out">
      <label className="flex flex-col gap-1">
        <span className="text-sm">First Name</span>
        <input
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          type="text"
          placeholder="e.g., John"
          className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm">Last Name</span>
        <input
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          type="text"
          placeholder="e.g., Doe"
          className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg"
        />
      </label>
      <label className="flex flex-col gap-1 mb-10">
        <span className="text-sm">Position Applied For</span>
        <input
          name="position"
          value={userData.position}
          onChange={handleChange}
          type="text"
          placeholder="e.g., Front-End Developer"
          className="input input-md w-[450px] bg-gray-200 focus:border-gray-400 focus:outline-none rounded-lg"
        />
      </label>
      {error && (
        <span className="bg-amber-100 text-red-500 text-sm py-2 px-4 border-1 border-neutral-200 rounded-lg font-montserrat">
          {error}
        </span>
      )}
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
