"use client";

import MainCard from "@/components/MainCard";
import React from "react";
import PenjualanContent from "./PenjualanContent";

function Penjualan() {
  return (
    <div className="h-full mb-10">
      <MainCard>
        <PenjualanContent />
      </MainCard>
    </div>
  );
}

export default Penjualan;
