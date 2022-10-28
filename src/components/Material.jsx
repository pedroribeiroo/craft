import CheckIcon from "./Icons/CheckIcon";
import ErrorIcon from "./Icons/ErrorIcon";
import materialImg from "../assets/material.png";

function Material({ name, amount, isSufficient }) {
  return (
    <div className="flex items-start justify-center w-[10rem] h-[5rem] xl:w-[19.5rem] xl:h-[9rem] bg-gray-800 rounded border-solid border-2 border-gray-400">
      <div className="flex items-start justify-center flex-col">
        <div className="flex items-start flex-col ml-4 mt-4">
          <h1 className="font-bold text-[0.3rem] xl:text-base">{name}</h1>
          <p className="font-bold text-[0.2rem] xl:text-sm">
            QUANTIDADE: <span className="text-blue-400">5X</span>
          </p>
        </div>
        <div
          className={
            isSufficient
              ? "flex items-center justify-center w-[5.7rem] h-[1rem] xl:w-40 xl:h-8 ml-4 mt-4 rounded bg-green-800"
              : "flex items-center justify-center w-[5.7rem] h-[1rem] xl:w-40 xl:h-8 ml-4 mt-4 rounded bg-red-1000"
          }
        >
          <span className="text-[0.2rem] xl:text-[0.5rem] font-extrabold mr-1">
            VOCÊ POSSUI {amount}
          </span>
          {isSufficient ? <CheckIcon /> : <ErrorIcon />}
        </div>
      </div>
      <div>
        <img src={materialImg} alt="Spring" />
      </div>
    </div>
  );
}

export default Material;
