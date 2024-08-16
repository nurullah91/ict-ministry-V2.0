import React from "react";

const TopActions: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-green-500 via-red-500 to-green-500 px-3 py-2 ">
      <div className="flex gap-2 items-center">
        <small>বাংলাদেশ জাতীয় তথ্য বাতায়ন</small>
        <select
          name="search"
          id="search"
          className="text-xs border bg-transparent p-1"
        >
          <option value="">অফিসের ধরন</option>
        </select>
        <button className="btn rounded btn-xs">Go</button>
      </div>
      <div className="flex gap-2 items-center">
        <form>
          <input type="text" className="border bg-transparent mr-2 p-1" />
          <button type="submit" className="btn rounded btn-xs">
            Search
          </button>
        </form>
        <button className="btn btn-xs rounded">English</button>
      </div>
    </div>
  );
};

export default TopActions;
