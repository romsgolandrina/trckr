import React from "react";
import InputField from "../components/InputField";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row p-4">
      <div className="w-[50%] flex flex-col items-center justify-between py-7">
        <h1 className="text-4xl text-black font-bold tracking-wide font-ubuntu">
          trckr.
        </h1>
        <div className="text-black font-montserrat flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-5xl font-normal">Get Started</h1>
            <p className="text-lg font-light">
              Just a few details and we’re ready to go.
            </p>
          </div>
          <div className="">
            <InputField />
          </div>
        </div>
        <div className="">
          <h1 className="text-gray-700 text-sm font-montserrat">
            ©2025 Jhon Rommel Golandrina. All rights reserved.
          </h1>
        </div>
      </div>
      <div className="w-[50%] bg-[url(/src/assets/flat-mountains.svg)] bg-no-repeat bg-cover bg-center rounded-2xl rounded-bl-[100px]"></div>
    </div>
  );
};

export default LoginPage;
