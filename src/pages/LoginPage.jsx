import React from "react";
import InputField from "../components/InputField";
import image1 from "../assets/image1.avif";

const LoginPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full min-h-screen bg-white flex flex-row p-4 gap-12">
      {/* Left section of the page */}
      <div className="w-[50%] flex flex-col py-7">
        <h1 className="text-4xl text-left mb-[165px] text-black font-bold tracking-wide font-ubuntu pl-7">
          trckr.
        </h1>
        <div className="flex flex-col justify-between h-full">
          <div className="text-black font-montserrat flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-5xl font-normal">Get Started</h1>
              <p className="text-lg font-light">
                Just a few details and we’re ready to go.
              </p>
            </div>
            <div>
              <InputField />
            </div>
          </div>
          <div>
            <h1 className="text-gray-700 text-sm font-montserrat text-center bottom-0">
              ©2025 Jhon Rommel Golandrina. All rights reserved.
            </h1>
          </div>
        </div>
      </div>
      {/* Right section of the page*/}
      <div className="w-[50%] bg-white flex flex-col items-center justify-center">
        <img src={image1} alt="vacants" className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
