import { useContext } from "react";
import { ItemContext } from "./ItemContext";

function Item({ item, children }) {
  const { onChangeItem } = useContext(ItemContext);

  function handleItem() {
    onChangeItem(item);
  }

  return (
    <div
      onClick={handleItem}
      className="flex items-center justify-start w-[14.5rem] h-[1.9rem] xl:w-[27rem] xl:h-[3.7rem] bg-gray-800 rounded gap-4 mb-4 cursor-pointer"
    >
      <div className="flex items-center justify-center w-1 h-1 xl:w-8 xl:h-8 bg-gray-400 rounded ml-8">
        {children}
      </div>
      <span className="font-extrabold text-[0.4rem] xl:text-lg">{`${item.type} | ${item.name}`}</span>
    </div>
  );
}

export default Item;
