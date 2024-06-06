import React from "react";

const Message = ({ bodyFat, message }) => {
  return (
    <div className="flex flex-col items-center animate-[wiggle_1s_ease-out]">
      <section className="flex flex-col justify-center items-center text-sm w-full  md:w-4/5 bg-slate-400 p-4 rounded ">
        <p className="text-xl font-extrabold">{message.brief}</p>
        <p>{message.long}</p>
        <div className="flex flex-col p-4">
          <p>Lean Mass : {bodyFat.lean.toFixed(1)}</p>
          <p>Fat Mass: {bodyFat.fat.toFixed(1)}</p>
          <p>Fat Percentagle: %{message.percentage}</p>
        </div>
      </section>
      <div className="w-full md:w-9/12 pt-4">
        <h1 className="text-xl font-extrabold">Body Fat</h1>
        <p>
          The scientific term for body fat is "adipose tissue." Adipose tissue
          serves a number of important functions. Its primary purpose is to
          store lipids from which the body creates energy. In addition, it
          secretes a number of important hormones, and provides the body with
          some cushioning as well as insulation.
        </p>
      </div>
    </div>
  );
};

export default Message;
