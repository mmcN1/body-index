import Image from "next/image";
import React from "react";

const Message = ({ message, resultNum }) => {
  return (
    <main className="flex flex-col items-center animate-[wiggle_1s_ease-out] ">
      <div className="flex flex-col justify-center items-center text-sm w-full  md:w-4/5 bg-slate-400 p-4 rounded ">
        <Image className="w-[100px]" src={message.symbol} alt="Weight" />
        <p>
          {message.brief}: {resultNum}
        </p>
        <p className="text-left">{message.long}</p>
      </div>
      <div className="w-full md:w-9/12 pt-4">
        <h1 className="text-xl font-extrabold">BMI Introduction</h1>
        <p>
          BMI is a measurement of a person's leanness or corpulence based on
          their height and weight, and is intended to quantify tissue mass. It
          is widely used as a general indicator of whether a person has a
          healthy body weight for their height. Specifically, the value obtained
          from the calculation of BMI is used to categorize whether a person is
          underweight, normal weight, overweight, or obese depending on what
          range the value falls between. These ranges of BMI vary based on
          factors such as region and age, and are sometimes further divided into
          subcategories such as severely underweight or very severely obese.
          Being overweight or underweight can have significant health effects,
          so while BMI is an imperfect measure of healthy body weight, it is a
          useful indicator of whether any additional testing or action is
          required. Refer to the table below to see the different categories
          based on BMI that are used by the calculator.
        </p>
      </div>
    </main>
  );
};

export default Message;
