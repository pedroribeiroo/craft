import Crafting from "./Crafting";
import Queue from "./Queue";

function Craft() {
  return (
    <div className="flex items-center justify-center w-[47rem] h-[28rem] xl:w-[89rem] xl:h-[53rem] rounded border-solid border-2 border-gray-400">
      <div className="flex items-center justify-center w-[45rem] h-[26rem] xl:w-[85rem] xl:h-[49rem] rounded bg-gray-900">
        <div className="flex items-center justify-center gap-20 w-[42rem] h-[23rem] xl:w-[80rem] xl:h-[44rem] rounded border-solid border-2 border-gray-400">
          <Crafting />
          <Queue />
        </div>
      </div>
    </div>
  );
}

export default Craft;
