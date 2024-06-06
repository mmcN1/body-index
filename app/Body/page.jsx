"use client";

import React from "react";
import { useState } from "react";
import InputForm from "./components/InputForm";
import Button from "./components/Button";
import Link from "next/link";
import Message from "./components/Message";

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
  const [bodyFat, setBodyFat] = useState({ lean: 0, fat: 0 });
  const [message, setMessage] = useState({
    brief: null,
    long: null,
    percentage: null,
  });

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
      bodyFatPercentage = 1.2 * resultNum + 0.23 * age - 16.2;
    } else if (gender === "female") {
      bodyFatPercentage = 1.2 * resultNum + 0.23 * age - 5.4;
    } else {
      throw new Error('Invalid gender specified. Use "male" or "female".');
    }

    if (bodyFatPercentage < 14) {
      setMessage({
        brief: "Athletes",
        long: "Your body is extremely lean and fit! This level is typically achieved by athletes or individuals on a strict training program. You are displaying an impressive performance level. This low body fat percentage can make you more energetic and agile.",
        percentage: bodyFatPercentage.toFixed(2),
      });
    } else if (bodyFatPercentage < 18) {
      setMessage({
        brief: "Fitness",
        long: "You have a fit and healthy body fat percentage. You're very close to what many people aim for! This percentage makes you both aesthetically and functionally strong. Maintaining your energy will help you reach your goals more easily.",
        percentage: bodyFatPercentage.toFixed(2),
      });
    } else if (bodyFatPercentage < 25) {
      setMessage({
        brief: "Average",
        long: "You have a healthy and balanced body fat percentage. This level is key to overall health and well-being. This level of body fat is common for many people. With a slightly more active lifestyle and balanced diet, you can lower this percentage.",
        percentage: bodyFatPercentage.toFixed(2),
      });
    }

    setBodyFat({
      lean: weight - (weight * bodyFatPercentage.toFixed(2)) / 100,
      fat: (weight * bodyFatPercentage.toFixed(2)) / 100,
    });
  };
  console.log(bodyFat.fat);
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
        Body Fat
        {submitForm && (
          <div
            className={`w-full md:w-4/5 bg-[#DAD3BE] p-2 rounded ${
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
        {!submitForm && <Message message={message} bodyFat={bodyFat} />}
      </section>
    </main>
  );
}
