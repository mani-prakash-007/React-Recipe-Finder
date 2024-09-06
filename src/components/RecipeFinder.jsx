import axios from "axios";
import React, { useRef, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

export const RecipeFinder = () => {
  //Reference
  const inputRef = useRef();
  //States
  const [recipes, setRecipes] = useState();

  //Function
  const handleClick = async () => {
    const inputValue = inputRef.current.value;
    if (!inputValue) {
      alert("Enter a Ingredient...");
    }
    const url = `https://api.edamam.com/search?q=${inputValue}&app_id=248a9ca1&app_key=${API_KEY}&form=0to=10`;
    const response = await axios.get(url);
    console.log(response.data);
    setRecipes(response.data);
  };

  console.log("State Data : ", recipes);
  console.log("State Data : ", recipes?.q);
  console.log("State Data hits : ", recipes?.hits);
  return (
    <>
      <div className="flex flex-col justify-center w-full">
        <div className="flex justify-center p-5">
          <input
            ref={inputRef}
            type="text"
            className="border border-black h-10 px-5 mx-5 w-80 rounded-xl focus:outline-none "
            placeholder="Search for Recipes"
          />
          <button
            onClick={handleClick}
            className="mx-5 px-5 rounded-xl active:scale-90 bg-green-700 font-bold text-white text-xl hover:bg-green-900"
          >
            Search
          </button>
        </div>
        <div className="border flex justify-evenly flex-wrap p-5 ">
          {!recipes ? (
            <>
              {" "}
              <h1 className="text-center text-xl font-serif tracking-wider">
                Search for Recipes...
              </h1>
            </>
          ) : recipes?.count === 0 ? (
            <>
              <h1 className="text-center text-xl font-serif">
                No Recipes found for
                <span className="font-bold italic mx-5">"{recipes?.q}"</span>
              </h1>
            </>
          ) : (
            <>
              {recipes.hits.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="border border-black w-96 min-h-156 m-5 rounded-xl shadow-[1px_4px_25px_10px_#a0aec0]"
                  >
                    <img
                      src={data.recipe.image}
                      alt=""
                      className="w-full h-60 rounded-t-lg object-cover"
                    />
                    <div className=" min-h-96 px-7 rounded-b-lg">
                      <div className="flex justify-between items-center">
                        <h1 className="font-bold my-3 text-2xl">
                          {data.recipe.label}
                        </h1>
                        <button
                          onClick={() => {
                            window.open(data.recipe.url, "_blank");
                          }}
                          className="border py-1 px-2 font-medium bg-blue-500 text-white text-lg rounded-xl active:scale-90 hover:bg-blue-700"
                        >
                          {" "}
                          View Recipe
                        </button>
                      </div>
                      <h2 className="font-semibold my-3 text-lg">
                        Ingredients
                      </h2>
                      <ul className="mx-5">
                        {data.recipe.ingredientLines.map(
                          (ingredient, index) => {
                            return (
                              <li key={index} className="my-2">
                                <span className="mr-2 font-medium">
                                  {index + 1}.
                                </span>
                                {ingredient}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

{
  /* <div className="border border-black w-80 min-h-156 m-5 rounded-xl shadow-[1px_4px_25px_10px_#a0aec0]"></div>
   */
}

{
  /* <div className="border border-black w-96 min-h-156 m-5 rounded-xl shadow-[1px_4px_25px_10px_#a0aec0]">
<img
  src=""
  alt=""
  className="w-full border border-red-500 h-60 rounded-t-lg"
/>
<div className="border border-blue-500 min-h-96 px-7 rounded-b-lg">
  <h1 className="font-bold my-3 text-2xl">Recipe Name</h1>
  <h2 className="font-semibold my-3 text-lg">Steps to Cook Dish</h2>
  <ul className="mx-5 mb-10">
    <li>Step - 1</li>
    <li>Step - 2</li>
    <li>Step - 3</li>
    <li>Step - 4</li>
  </ul>
  <button className="border py-1 px-2 "> View Recipe</button>
</div>
</div> */
}
