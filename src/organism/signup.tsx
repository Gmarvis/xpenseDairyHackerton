import Button from "@/atom/Button";
import Input from "@/atom/input";
import React, { useState } from "react";

const Signup = () => {
  const [formdata, setFormdata] = useState();

  const handleClick = () => {};

  return (
    <div>
      <div className="w-[25%] ">
        <Input
          placeholder="username"
          name="username"
          type="text"
          value="username"
          className="border-b-4 w-full placeholder:text-gray-400"
        />
        <Input
          placeholder="email"
          name="email"
          type="text"
          value="email"
          className="border-b-4 w-full placeholder:text-gray-400"
        />
        <Input
          placeholder="password"
          name="password"
          type="text"
          value="password"
          className="border-b-4 w-full placeholder:text-gray-400"
        />
      </div>
      <div>
        <Button
          label="Sign Me Up"
          className="bg-green-600 text-white py-3"
          type="submit"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Signup;
