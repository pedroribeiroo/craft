import { useContext } from "react";
import ResourceIcon from "./Icons/ResourceIcon";
import { ItemContext } from "./ItemContext";
import Material from "./Material";
import RangeSlider from "./RangeSlider";

function Crafting() {
  const { itemCrafting } = useContext(ItemContext);
  return (
    <div>
      {itemCrafting ? (
        <>
          <div className="font-extrabold">
            <h2 className="text-blue-400 text-[0.8rem] xl:text-[1.5rem]">
              {itemCrafting.type}
            </h2>
            <h1 className="text-[2rem] xl:text-6xl">{itemCrafting.name}</h1>
            <p className="text-[0.5rem] xl:text-sm">
              <span className="text-blue-400">TEMPO:</span> {itemCrafting.time}{" "}
              MINUTOS.
            </p>
          </div>
          <div className="flex items-center justify-start mt-8 w-[21rem] h-[1.6rem] xl:w-[40rem] xl:h-12 bg-gray-800">
            <div className="flex items-center justify-center w-[0.9rem] h-[0.9rem] xl:w-[1.8rem] xl:h-[1.8rem] ml-6 bg-gray-400">
              <ResourceIcon />
            </div>
            <p className="ml-4 font-extrabold text-[0.4rem] xl:text-lg">
              RECURSOS <span className="text-blue-400">NECESSÁRIOS</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {itemCrafting.resources.map((material) => (
              <Material
                key={material.name}
                name={material.name}
                amount={material.amount}
                isSufficient={material.isSufficient}
              />
            ))}
          </div>
          <RangeSlider />
          <div
            className="flex items-center justify-center w-[21rem] h-[1.4rem] xl:w-[40rem] xl:h-[2.7rem] mt-4 rounded-lg font-extrabold 
          text-[0.5rem] xl:text-lg bg-green-800 border-solid border-2 border-green-200 cursor-pointer"
          >
            <button>CRAFTAR</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Crafting;
