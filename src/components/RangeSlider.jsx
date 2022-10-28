import { useState } from "react";
import MaxIcon from "./Icons/MaxIcon";
import MinIcon from "./Icons/MinIcon";

const RangeSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex items-center mt-4">
      <div className="flex items-center justify-center gap-2 w-[34.8rem] h-[2.7rem] bg-blue-600 rounded-lg border-solid border-2 border-blue-400">
        <div className="flex items-center justify-center w-6 h-6 bg-gray-800 rounded">
          <MinIcon />
        </div>
        <input
          type="range"
          className="w-[29rem] h-[0.3rem] bg-gray-800 rounded-lg cursor-pointer"
          min="0"
          max="100"
          defaultValue="0"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className="flex items-center justify-center w-6 h-6 bg-gray-800 rounded">
          <MaxIcon />
        </div>
      </div>
      <div className="flex items-center justify-center w-[4.3rem] h-[2.7rem] ml-4 rounded-lg bg-gray-800 border-solid border-2 border-blue-400">
        <h1 className="font-extrabold text-lg">{value}</h1>
      </div>
    </div>
  );
};

export default RangeSlider;
