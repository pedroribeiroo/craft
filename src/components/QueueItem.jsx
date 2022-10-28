import { useContext } from "react";
import { ItemContext } from "./ItemContext";

import RemoveIcon from "./Icons/RemoveIcon";

function QueueItem({ children }) {
  const { itemCrafting } = useContext(ItemContext);

  return (
    <div>
      {itemCrafting ? (
        <>
          <div className="flex items-center justify-between w-[14.5rem] h-[1.9rem] xl:w-[24.8rem] xl:h-[3.7rem] bg-gray-800 rounded gap-4 mb-4">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center w-1 h-1 xl:w-8 xl:h-8 bg-gray-400 rounded ml-8">
                {children}
              </div>
              <span className="font-extrabold text-[0.4rem] xl:text-lg">{`${itemCrafting.type} | ${itemCrafting.name}`}</span>
            </div>
            <div className="flex items-center justify-center mr-4 xl:w-7 xl:h-7 bg-red-1000 rounded border-solid border-2 border-red-400 cursor-pointer">
              <RemoveIcon />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default QueueItem;
