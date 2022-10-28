import Craft from "./components/Craft";
import CraftProvider from "./components/CraftContext";
import Heading from "./components/Heading";
import ItemProvider from "./components/ItemContext";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black text-white">
      <div className="flex items-start justify-center flex-col gap-16">
        <Heading />
        <div className="flex items-center justify-center gap-8">
          <CraftProvider>
            <ItemProvider>
              <ItemsList />
              <Craft />
            </ItemProvider>
          </CraftProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
