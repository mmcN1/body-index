"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  //remove this code line
  const [submitForm, setSubmitForm] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [person, setPerson] = useState({
    height: "",
    weight: "",
    neck: "",
    waist: "",
    age: "",
    gender: "",
  });

  const handleSubmit = () => {
    const { height, weight, neck, waist, age, gender } = person;
    if (height && weight && neck && waist && age && gender) {
      setIsVisible(true);
      setTimeout(() => {
        setSubmitForm(false);
      }, 2000);
    }
  };
  const cmToMeter = person.height / 100;

  const result = person.weight / (cmToMeter * cmToMeter);

  const handleChange = (value, input) => {
    setPerson((prevValue) => ({
      ...prevValue,
      [value]: input,
    }));
  };
  return (
    <main>
      <section className="w-full bg-[#6B8A7A] p-5">
        <Link className="text-2xl font-extrabold text-[#F5EFE6] " href="/">
          Body App
        </Link>
      </section>
      <section className="font-sans flex flex-col lg:flex-row justify-around items-center min-h-screen p-2">
        <section className="w-full mb-2 text-sm lg:text-base lg:w-1/3 hover:bg-[#DAD3BE] transition-all hover:text-gray-700 duration-500 border-2 border-gray-600 rounded p-4">
          <Link
            href="/Bmi"
            className="flex flex-col justify-center items-center "
          >
            <h1 className="text-xl font-bold p-2 ">BMI Introduction</h1>
            <p className="pb-4 text-left">
              BMI is a measurement of a person's leanness or corpulence based on
              their height and weight, and is intended to quantify tissue mass.
              It is widely used as a general indicator of whether a person has a
              healthy body weight for their height. Specifically, the value
              obtained from the calculation of BMI is used to categorize whether
              a person is underweight, normal weight, overweight, or obese
              depending on what range the value falls between. These ranges of
              BMI vary based on factors such as region and age, and are
              sometimes further divided into subcategories such as severely
              underweight or very severely obese. Refer to the table below to
              see the different categories based on BMI that are used by the
              calculator.
            </p>
            <button className="border border-teal-50 w-1/2 bg-[#6B8A7A] rounded hover:opacity-75 ">
              Select
            </button>
          </Link>
        </section>
        <section className="w-full mb-2 text-sm lg:text-base lg:w-1/3 hover:bg-[#DAD3BE] transition-all hover:text-gray-700 duration-500 border-2 border-gray-600 rounded p-4">
          <Link
            href="/Body"
            className="flex flex-col justify-center items-center "
          >
            <h1 className="text-xl font-bold p-2">Body Fat</h1>
            <p className="pb-4 text-left">
              This body fat calculator is a tool designed to help you estimate
              what percentage of your total body weight is body fat. If you have
              ever wondered what is your body fat percentage, this is a perfect
              place to find out. We will explain to you in detail not only what
              is the importance of this information but also how to calculate
              your body fat (including some alternative methods for measuring
              it) and give you some general guidelines regarding reducing your
              body fat. We strive to make our Omni calculators as accurate and
              reliable as possible. However, this tool cannot in any way replace
              a doctor's assessment. If you are concerned about a health
              problem, please consult your doctor.
            </p>
            <button className="border border-teal-50 w-1/2 bg-[#6B8A7A] rounded hover:opacity-75 ">
              Select
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
}
