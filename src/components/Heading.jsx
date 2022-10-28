import SettingsIcon from "./Icons/SettingsIcon";

function Heading() {
  return (
    <div className="flex items-center justify-start w-[12rem] h-[3.4rem] xl:w-[28.6rem] xl:h-[4.7rem] rounded gap-4">
      <div className="flex items-center justify-center w-[3.3rem] h-[3.3rem] xl:w-24 xl:h-24 bg-gray-400 rounded">
        <SettingsIcon />
      </div>
      <div className="flex justify-s flex-col lg-4 xl:ml-8">
        <span className="font-extrabold text-[0.8rem] xl:text-2xl">
          SPACE RP
        </span>
        <h1 className="font-extrabold text-[2rem] xl:text-7xl text-blue-400">
          CRAFT
        </h1>
      </div>
    </div>
  );
}

export default Heading;
