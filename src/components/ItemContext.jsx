import { createContext, useState } from "react";

export const ItemContext = createContext();

function ItemProvider({ children }) {
  const [itemCrafting, setItem] = useState();

  function handleChangeItem(item) {
    setItem(item);
  }

  return (
    <ItemContext.Provider
      value={{ itemCrafting, onChangeItem: handleChangeItem }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export default ItemProvider;
