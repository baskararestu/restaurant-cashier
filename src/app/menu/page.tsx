"use client";
import MainCard from "@/components/MainCard";
import React from "react";
import MenuContent from "./MenuContent";

function Menu() {
  return (
    <div className="h-full mb-10">
      <MainCard>
        <h3 className="text-lg font-semibold">Menu Makanan</h3>
        <div className="py-3">
          <MenuContent />
        </div>
      </MainCard>
    </div>
  );
}

export default Menu;
