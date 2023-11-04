import Button from "@/atom/Button";
import Input from "@/atom/input";
import React, { useState } from "react";

const Signup = () => {
  const [formdata, setFormdata] = useState();

  const handleClick = () => {};

  return (
    <div>
      <div>
        <Input
          placeholder="username"
          name="username"
          type="text"
          value="username"
          className=""
        />
        <Input
          placeholder="email"
          name="email"
          type="text"
          value="email"
          className=""
        />
        <Input
          placeholder="password"
          name="password"
          type="text"
          value="password"
          className=""
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
