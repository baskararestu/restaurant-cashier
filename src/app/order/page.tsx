"use client";

import MainCard from "@/components/MainCard";
import React from "react";
import OrderContent from "./OrderContent";

function Order() {
  return (
    <div className="h-full mb-10">
      <MainCard>
        <OrderContent />
      </MainCard>
    </div>
  );
}

export default Order;
