import Button from "@/atom/Button";
import Input from "@/atom/input";
import React from "react";
import { BsFacebook, BsMessenger, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <p>XpenceDiary</p>
        <p>
          Start tracking your expences today and see <br /> the difference
          XpenceDiary can make in your financial <br /> life!{" "}
        </p>
      </div>
      <div>
        <p>Subscribe to our newsletter for the lates updates</p>
        <div className="border border-green rounded w-[40%]">
          <Input
            placeholder="email"
            name="example@gmail.com"
            type="text"
            value="email"
            className="border border-none  outline-none w-full placeholder:text-gray-400 placeholder:px-4"
          />
          <Button
            label="Subscribe"
            type="submit"
            onClick={handleClick}
            className="bg-green-300 px-2 py-6 text-white"
          />
        </div>
        <div>
          <BsFacebook />
          <FaInstagramSquare />
          <BsMessenger />
          <BsLinkedin />
          <BsGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
