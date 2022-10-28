import { useContext } from "react";
import { CraftContext } from "./CraftContext";
import ArchiveIcon from "./Icons/ArchiveIcon";
import WeaponIcon from "./Icons/WeaponIcon";
import Item from "./Item";

function ItemsList() {
  const craft = useContext(CraftContext);

  return (
    <div className="flex items-center justify-center w-[18rem] h-[28rem] xl:w-[35rem] xl:h-[53rem] rounded border-solid border-2 border-gray-400">
      <div className="flex items-center flex-col w-[16rem] h-[26rem] xl:w-[31rem] xl:h-[49rem] rounded bg-gray-900">
        <div className="p-8">
          <div className="flex items-center justify-start w-[15rem] h-[2.5rem] xl:w-[28.6rem] xl:h-[4.7rem] bg-gray-800 rounded gap-4">
            <div className="flex items-center justify-center w-[1.4rem] h-[1.4rem] bg-gray-400 rounded ml-8">
              <ArchiveIcon />
            </div>
            <div className="flex justify-s flex-col">
              <h1 className="font-extrabold text-[0.4rem] xl:text-lg">
                ITENS DE CRAFT
              </h1>
              <span className="font-medium text-[0.3rem] xl:text-sm text-gray-200">
                Selecione o item que deseja craftar
              </span>
            </div>
          </div>
        </div>
        <div className="w-[15rem] xl:w-[28.6rem] h-[41rem] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue-400 scrollbar-track-gray-800 scrollbar-medium">
          {craft.map(
            (item) =>
              item.perm && (
                <Item key={item.id} item={item}>
                  <WeaponIcon />
                </Item>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemsList;
