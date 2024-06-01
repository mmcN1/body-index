"use client";

import React from "react";
import { useState } from "react";
import InputForm from "./components/InputForm";
import Button from "./components/Button";
import IntegerPercients from "./IntegerPercients";
import Link from "next/link";

export default function Page() {
  const [submitForm, setSubmitForm] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [person, setPerson] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "",
  });

  const handleSubmit = () => {
    const { height, weight, age, gender } = person;
    if (height && weight && age && gender) {
      setIsVisible(true);
      setTimeout(() => {
        setSubmitForm(false);
      }, 2000);
    }
    const ageData = IntegerPercients[gender][age.toString()];

    if (age < 18) {
      if (resultNum < ageData["5th"]) {
        console.log("Zayıf");
      } else if (resultNum < ageData["85th"]) {
        console.log("Normal");
      } else if (resultNum < ageData["95th"]) {
        console.log("Kilolu");
      } else {
        console.log("Obez");
      }
    } else {
      console.log("Oldu");
    }
  };
  const cmToMeter = person.height / 100;

  const result = person.weight / (cmToMeter * cmToMeter);

  let integerPart = Math.trunc(result);
  let fractionalPart = result - integerPart;
  fractionalPart = fractionalPart.toFixed(1);
  let resultNum = parseFloat(integerPart) + parseFloat(fractionalPart);

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
          <p className="animate-[wiggle_4s_ease-in-out] ">bmi: {resultNum}</p>
        )}
      </section>
    </main>
  );
}
