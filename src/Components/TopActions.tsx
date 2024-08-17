import React from "react";

const TopActions: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row justify-between items-center bg-gradient-to-br from-green-200 via-green-200 to-red-200 px-3 py-2 ">
      <div className="flex gap-2 items-center">
        <small>বাংলাদেশ জাতীয় তথ্য বাতায়ন</small>
        <select
          name="search"
          id="search"
          className="text-xs border border-red-500 bg-transparent p-1 rounded"
        >
          <option value="">অফিসের ধরন</option>
        </select>
        <button className="btn rounded btn-xs myPrimaryBtn">Go</button>
      </div>
      <div className="flex gap-2 items-center">
        <form>
          <input
            type="text"
            className="border border-red-500 bg-transparent mr-2 p-1 rounded"
          />
          <button type="submit" className="btn rounded btn-xs myPrimaryBtn">
            Search
          </button>
        </form>
        <button className="btn btn-xs myPrimaryBtn rounded">English</button>
      </div>
    </div>
  );
};

export default TopActions;
