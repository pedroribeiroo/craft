import EngineIcon from "./Icons/EngineIcon";
import TimerIcon from "./Icons/TimerIcon";
import WeaponIcon from "./Icons/WeaponIcon";
import WaitIcon from "./Icons/WaitIcon";

import QueueItem from "./QueueItem";

function Queue() {
  return (
    <div className="flex items-center flex-col xl:w-[28rem] xl:h-[38rem] bg-gray-900 rounded border-solid border-2 border-gray-400 gap-5">
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="flex items-center justify-center gap-1 xl:w-[12rem] xl:h-[2.0rem] rounded bg-green-800 border-solid border-2 border-green-200 text-green-200 text-[0.7rem] font-bold ">
          <EngineIcon />
          <span className="mt-[0.2rem]">EM PRODUÇÃO</span>
        </div>
        <div className="flex items-center justify-center gap-1 xl:w-[12rem] xl:h-[2.0rem] rounded border-solid border-2 border-white text-[0.7rem] font-bold">
          <TimerIcon />
          <span className="mt-[0.2rem]">00:20:39</span>
        </div>
      </div>
      <QueueItem>
        <WeaponIcon />
      </QueueItem>
      <div className="flex items-center justify-center gap-1 xl:w-[25rem] xl:h-[2rem] bg-[#221400] rounded border-solid border-2 border-[#FF7A00] text-[0.7rem] text-[#FF7A00] font-bold">
        <WaitIcon />
        <span className="mt-[0.2rem]">AGUARDANDO</span>
      </div>
      <div className="xl:w-[25.9rem] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue-400 scrollbar-track-gray-800 scrollbar-medium">
        <QueueItem>
          <WeaponIcon />
        </QueueItem>
        <QueueItem>
          <WeaponIcon />
        </QueueItem>
        <QueueItem>
          <WeaponIcon />
        </QueueItem>
        <QueueItem>
          <WeaponIcon />
        </QueueItem>
        <QueueItem>
          <WeaponIcon />
        </QueueItem>
        <QueueItem>
          <WeaponIcon />
        </QueueItem>
        <QueueItem>
          <WeaponIcon />
        </QueueItem>
        <QueueItem>
          <WeaponIcon />
        </QueueItem>
        <QueueItem>
          <WeaponIcon />
        </QueueItem>
      </div>
    </div>
  );
}

export default Queue;
