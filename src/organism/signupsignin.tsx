"use client";
import Signin from "@/pages /signin";
import Signup from "@/pages /signup";
import React, { useState } from "react";

const Signupsignin = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Signup />);

  const handleButtonClick = (component: any) => {
    setSelectedComponent(component);
  };

  return (
    <div className=" flex flex-row min-h-screen justify-center items-center">
      <p
        className="pr-4 text-[17px] font-bold text-slate-600 focus:underline cursor-pointer"
        onClick={() => handleButtonClick(<Signup />)}
      >
        Sign Up
      </p>
      <p
        className="pr-4 text-[17px] font-bold text-slate-600 focus:underline cursor-pointer"
        onClick={() => handleButtonClick(<Signin />)}
      >
        Login
      </p>
      {selectedComponent}
    </div>
  );
};

export default Signupsignin;
