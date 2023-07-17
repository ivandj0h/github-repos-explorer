"use client"

import React, { JSX } from "react";
import {SearchComponent} from "@/components/SearchComponent";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm lg:flex">
        <SearchComponent />
      </div>
    </main>
  )
}

export default HomePage
