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
    const url = `https://api.edamam.com/search?q=${inputValue}&app_id=248a9ca1&app_key=${API_KEY}&form=0to=10`;
    const response = await axios.get(url);
    console.log(response.data);
  };

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
          <div className="border border-black w-80 min-h-156 m-5 rounded-xl shadow-[1px_4px_25px_10px_#a0aec0]"></div>
        </div>
      </div>
    </>
  );
};
