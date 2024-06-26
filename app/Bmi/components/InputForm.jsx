import React from "react";

const InputForm = ({ handleChange, person }) => {
  return (
    <>
      <label>
        <h1 className="flex ml-7">Height (cm)</h1>
        <div className="flex flex-col items-center">
          <input
            className="p-2 rounded text-gray-800 w-4/5  md:w-full ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1 "
            type="number"
            onChange={(event) => handleChange("height", event.target.value)}
            inputMode="numeric"
          />
        </div>
      </label>
      <label>
        <h1 className="flex ml-7">Weight (kg)</h1>
        <div className="flex flex-col items-center">
          <input
            className="p-2 rounded text-gray-800 w-4/5 md:w-full ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1"
            type="number"
            onChange={(event) => handleChange("weight", event.target.value)}
            inputMode="numeric"
          />
        </div>
      </label>
      <label>
        <h1 className="flex ml-7">Age</h1>
        <div className="flex flex-col items-center">
          <input
            className="p-2  rounded w-4/5 md:w-full text-gray-800 ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1"
            type="number"
            onChange={(event) => handleChange("age", event.target.value)}
            inputMode="numeric"
          />
        </div>
      </label>
      <label>
        <h1 className="flex ml-7">Gender</h1>
        <div className="flex items-center  ">
          <input
            className={`p-2 rounded w-4/5 text-gray-800 ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1 ${
              person.gender === "male" ? "bg-[#6B8A7A] text-[#DAD3BE]" : ""
            }`}
            type="button"
            value="male"
            name="gender"
            onClick={() => handleChange("gender", "male")}
          />
          <input
            className={`p-2 rounded w-4/5 text-gray-800 ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1 ${
              person.gender === "female" ? "bg-[#6B8A7A] text-[#DAD3BE]" : ""
            }`}
            type="button"
            value="female"
            name="gender"
            onClick={() => handleChange("gender", "female")}
          />
        </div>
      </label>
    </>
  );
};

export default InputForm;
