import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" shadow-md px-4 py-3 rounded flex flex-col items-center gap-4">
        <h1 className="text-4xl text-center font-bold">Oops..</h1>
        <h1 className="text-3xl text-center font-semibold">
          Something went wrong
        </h1>
        <button className="btn btn-warning">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
