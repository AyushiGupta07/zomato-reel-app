import React from "react";
import { Outlet } from "react-router-dom";
import UserRegister from "./UserRegister";

const MainComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center p-5">
          <h1 className="text-3xl font-bold text-red-600">Zomato Reel</h1>
          <p className="mt-2 text-gray-500">
            Create your account to get started
          </p>
        </div>

        <Outlet/>
      </div>
    </div>
  );
};

export default MainComponent;
