import TabMenu from "@/components/TabMenu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Headers from "@/components/Headers";
import ButtonReset from "@/components/ButtonReset";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant Cashier",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex min-h-screen flex-col items-center pt-14">
          <Headers />
          <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-5 lg:gap-24">
            <TabMenu />
            <ButtonReset />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
