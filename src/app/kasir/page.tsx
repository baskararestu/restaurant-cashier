"use client";

import MainCard from "@/components/MainCard";
import React from "react";
import KasirContent from "./KasirContent";

function Kasir() {
  return (
    <div>
      <MainCard>
        <h2 className="text-xl font-bold">Pembayaran</h2>
        <div className="py-3">
          <KasirContent />
        </div>
      </MainCard>
    </div>
  );
}

export default Kasir;
