"use client";

import { menus } from "@/lib/data";
import React from "react";

function ButtonReset() {
  const handleClick = () => {
    localStorage.setItem("menuData", JSON.stringify(menus));
    window.location.reload();
  };

  return (
    <button className="btn h-16 w-[8.5rem]" onClick={handleClick}>
      Reset
    </button>
  );
}

export default ButtonReset;
