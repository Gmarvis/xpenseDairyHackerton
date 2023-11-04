"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "./Button";

const LoginBtn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <div>
      <Link href="/login">
        <Button
          className="border-black border bg:slate-white text-black rounded-full px-2 py-5 "
          label="login"
          type="submit"
          onClick={handleClick}
        />
      </Link>
    </div>
  );
};

export default LoginBtn;
