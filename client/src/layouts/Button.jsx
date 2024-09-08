import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 px-5 py-1 rounded-full text-white hover:text-blue-200 font-medium"
    >
      {title}
    </button>
  );
};

export default Button;
