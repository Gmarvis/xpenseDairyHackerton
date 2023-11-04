import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "statistics",
    path: "/statistics",
    icon: <BsBarChart />,
  },
  {
    name: "profile",
    path: "/profile",
    icon: <FaUser />,
  },
];

const Dashboard = () => {
  return (
    <div className="bg-slate-200 h-full absolute w-full">
      <div className="h-56 bg-primary absolute w-full p-5">
        <div>
          <div className="mb-3 flex justify-between text-white">
            <div className="flex gap-20 items-center">
              <h1 className="font-bold text-white font-serif text-lg">
                Xpence<span className="text-gray-500">Dairy</span>
              </h1>
              <p>Monday 16/11/2023</p>
            </div>
            <div>
              <p>john doe</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-white relative h-[90vh] w-[10vw] p-2">
              <div className="flex flex-col items-center gap-5">
                {links.map((link, index) => (
                  <Link
                    className="flex flex-col items-center border bottom-1 w-[100%] h-[5rem] justify-center"
                    href={link.path}
                    key={index}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
