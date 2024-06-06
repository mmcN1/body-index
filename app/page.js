"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="w-full bg-[#6B8A7A] p-5">
        <Link className="text-2xl font-extrabold text-[#F5EFE6] " href="/">
          Body App
        </Link>
      </section>
      <section className="font-sans flex flex-col md:flex-row md:justify-around justify-center items-center min-h-[90vh]  p-2  ">
        <section className="w-full mb-10 text-sm md:text-base md:w-1/3 hover:bg-[#DAD3BE] transition-all hover:text-gray-700 duration-500 border-2 border-gray-600 rounded p-4">
          <Link
            href="/Bmi"
            className="flex flex-col justify-center items-center "
          >
            <h1 className="text-base md:text-xl font-bold pb-2 ">
              BMI Introduction
            </h1>
            <button className="border border-teal-50 w-1/2 bg-[#6B8A7A] rounded hover:opacity-75 ">
              Select
            </button>
          </Link>
        </section>
        <section className="w-full mb-10 text-sm md:text-base md:w-1/3 hover:bg-[#DAD3BE] transition-all hover:text-gray-700 duration-500 border-2 border-gray-600 rounded p-4">
          <Link
            href="/Body"
            className="flex flex-col justify-center items-center "
          >
            <h1 className="text-base md:text-xl font-bold pb-2">Body Fat</h1>
            <button className="border border-teal-50 w-1/2 bg-[#6B8A7A] rounded hover:opacity-75 ">
              Select
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
}
