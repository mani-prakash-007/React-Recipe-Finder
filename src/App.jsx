import { RecipeFinder } from "./components/RecipeFinder";

function App() {
  return (
    <>
      <div className="my-20">
        <h1 className="font-bold text-4xl text-center">Recipe Finder</h1>
        <div className="flex justify-center my-10 mx-auto">
          <RecipeFinder />
        </div>
      </div>
    </>
  );
}

export default App;
