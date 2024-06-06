"use client";

import React from "react";
import { useState } from "react";
import InputForm from "./components/InputForm";
import Button from "./components/Button";
import Link from "next/link";
import Message from "./components/Message";
import Thin from "../Images/thin.png";
import Normal from "../Images/exercise.png";
import Fat from "../Images/fat.png";
import Obesity from "../Images/obesity.png";

export default function Page() {
  const [submitForm, setSubmitForm] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [person, setPerson] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "",
  });
  const [message, setMessage] = useState({
    brief: null,
    long: null,
    symbol: null,
  });

  const handleSubmit = () => {
    const { height, weight, age, gender } = person;
    if (height && weight && age && gender) {
      setIsVisible(true);
      setTimeout(() => {
        setSubmitForm(false);
      }, 2000);
    }

    if (age < 18) {
      if (resultNum < 16) {
        setMessage({
          brief: "UnderWeight",
          long: "Your body mass index is low, indicating that you are under a healthy weight. You should aim to gain weight through a balanced and nutritious diet. Additionally, consulting a healthcare professional to create a personalized nutrition plan can be beneficial. It's important to maintain your energy levels and overall health. Remember to monitor your healthy weight gain with regular check-ups.",
          symbol: Thin,
        });
      } else if (resultNum < 23) {
        setMessage({
          brief: "Normal Weight",
          long: "Your body mass index is within a healthy range, indicating that you are at an ideal weight. Continue with balanced nutrition and regular exercise to maintain this healthy state. This will support your long-term health and overall quality of life. It's important to maintain your healthy habits. Congratulations on maintaining a healthy lifestyle!",
          symbol: Normal,
        });
      } else if (resultNum > 23) {
        setMessage({
          brief: "OverWeight",
          long: "Your body mass index is high, indicating that you are above a healthy weight. You should aim to manage your weight through a healthy diet and regular physical activity. Weight control is important for heart health and overall quality of life. Small but consistent changes can make a big difference. Consider seeking support from a nutritionist or dietitian.",
          symbol: Fat,
        });
      } else {
        setMessage({
          brief: "Obesity",
          long: "Your body mass index is low, indicating that you are under a healthy weight. You should aim to gain weight through a balanced and nutritious diet. Additionally, consulting a healthcare professional to create a personalized nutrition plan can be beneficial. It's important to maintain your energy levels and overall health. Remember to monitor your healthy weight gain with regular check-ups.",
          symbol: Obesity,
        });
      }
    } else {
      if(resultNum < 16) {
        setMessage({
          brief: "Your thin",
          long: "Your body mass index is in the obese category, indicating that you carry significant health risks. It's important to start a diet and exercise program to protect your health. Getting support from a professional healthcare provider to create a personalized plan can be beneficial. Obesity increases the risk of heart disease, diabetes, and other serious health issues. You can reduce this risk with healthy lifestyle changes.",
          symbol: Obesity,
        });
      }
      else if (resultNum < 20) {
        setMessage({
          brief: "UnderWeight",
          long: "Your body mass index is low, indicating that you are under a healthy weight. You should aim to gain weight through a balanced and nutritious diet. Additionally, consulting a healthcare professional to create a personalized nutrition plan can be beneficial. It's important to maintain your energy levels and overall health. Remember to monitor your healthy weight gain with regular check-ups.",
          symbol: Thin,
        });
      } else if (resultNum < 25) {
        setMessage({
          brief: "Normal Weight",
          long: "Your body mass index is within a healthy range, indicating that you are at an ideal weight. Continue with balanced nutrition and regular exercise to maintain this healthy state. This will support your long-term health and overall quality of life. It's important to maintain your healthy habits. Congratulations on maintaining a healthy lifestyle!",
          symbol: Normal,
        });
      } else if (resultNum < 30) {
        setMessage({
          brief: "OverWeight",
          long: "Your body mass index is high, indicating that you are above a healthy weight. You should aim to manage your weight through a healthy diet and regular physical activity. Weight control is important for heart health and overall quality of life. Small but consistent changes can make a big difference. Consider seeking support from a nutritionist or dietitian.",
          symbol: Fat,
        });
      } else {
        setMessage({
          brief: "Obesity",
          long: "Your body mass index is in the obese category, indicating that you carry significant health risks. It's important to start a diet and exercise program to protect your health. Getting support from a professional healthcare provider to create a personalized plan can be beneficial. Obesity increases the risk of heart disease, diabetes, and other serious health issues. You can reduce this risk with healthy lifestyle changes.",
          symbol: Obesity,
        });
      }
    }
  };
  const cmToMeter = person.height / 100;

  const result = person.weight / (cmToMeter * cmToMeter);

  let integerPart = Math.trunc(result);
  let fractionalPart = result - integerPart;
  fractionalPart = fractionalPart.toFixed(1);
  let resultNum = parseFloat(integerPart) + parseFloat(fractionalPart);
  console.log(resultNum);

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
        BMI
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
        {!submitForm && <Message message={message} resultNum={resultNum} />}
      </section>
    </main>
  );
}
