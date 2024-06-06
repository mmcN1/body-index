import React from "react";

const Button = ({ handleSubmit }) => {
  return (
    <div className="flex justify-center">
      <input
        type="submit"
        className={` w-36 p-2 bg-[#6B8A7A] hover:scale-105 transition-all rounded`}
        onClick={handleSubmit}
        value="Submit"
      />
    </div>
  );
};

export default Button;
