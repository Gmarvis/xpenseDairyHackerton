import Button from "@/atom/Button";
import Input from "@/atom/input";
import React, { useState } from "react";

const Signin = () => {
  const [formdata, setFormdata] = useState();

  const handleClick = () => {};

  return (
    <div className="w-[25%] flex flex-col gap-8">
      <div>
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
          label="Login"
          className="bg-green-600 text-white py-3"
          type="submit"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Signin;
