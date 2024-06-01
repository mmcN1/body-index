"use client";

import React from "react";
import { useState } from "react";
import InputForm from "./components/InputForm";
import Button from "./components/Button";
import Link from "next/link";

export default function Page() {
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
  const [bodyFat, setBodyFat] = useState(0);
  

  const handleSubmit = () => {
    const { height, weight, neck, waist, age, gender } = person;
    if (height && weight && neck && waist && age && gender) {
      setIsVisible(true);
      setTimeout(() => {
        setSubmitForm(false);
      }, 2000);
    }
    function log10(x) {
      return Math.log(x) / Math.LN10;
    }

    let bodyFatPercentage;

    if (gender === "male") {
      bodyFatPercentage = (1.20 * resultNum) + (0.23 * age) - 16.2
    } else if (gender === "female") {
      bodyFatPercentage = (1.20 * resultNum) + (0.23 * age) - 5.4
    } else {
      throw new Error('Invalid gender specified. Use "male" or "female".');
    }

    setBodyFat( weight - ((weight * bodyFatPercentage.toFixed(2)) / 100))
  
    
  };

  

  const cmToMeter = person.height / 100;

  const result = person.weight / (cmToMeter * cmToMeter);
  let integerPart = Math.trunc(result);
  let fractionalPart = result - integerPart;
  fractionalPart = fractionalPart.toFixed(1);
  const resultNum = parseFloat(integerPart) + parseFloat(fractionalPart);

  const handleChange = (value, input) => {
    setPerson((prevValue) => ({
      ...prevValue,
      [value]: input,
    }));
  };
  return (
    <main className="w-full">
      <section className="w-full bg-[#6B8A7A] p-5">
        <Link className="text-2xl font-extrabold text-[#F5EFE6] " href="/">
          Body App
        </Link>
      </section>
      <section className="font-sans flex  flex-col items-center p-2 animate-[wiggle_1s_ease-out]">
        {submitForm && (
          <div
            className={`w-4/5 bg-[#DAD3BE] p-2 rounded ${
              isVisible && "animate-end"
            }`}
          >
            <section className="grid grid-cols-1 gap-8 md:gap-24 md:grid-cols-2 p-10">
              <InputForm handleChange={handleChange} person={person} />
            </section>

            <Button
              handleSubmit={handleSubmit}
              submitForm={submitForm}
              isVisible={isVisible}
            />
          </div>
        )}
        {!submitForm && (
          <section className="animate-[wiggle_4s_ease-in-out]" >
          <p >Bmi: {resultNum}</p>
          <p>Body Fat : {bodyFat.toFixed(1)}</p>
          </section>
        )}
      </section>
    </main>
  );
}
