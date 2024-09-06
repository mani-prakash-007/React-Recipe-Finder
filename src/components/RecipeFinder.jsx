import React, { useState } from "react";

export const RecipeFinder = () => {
    //States
  const [recipes, setRecipes] = useState;
  
  //Function 
  const handleClick = async() =>{
    
  }

  return (
    <>
      <div className="flex flex-col justify-center w-full">
        <div className="flex justify-center p-5">
          <input
            type="text"
            className="border border-black h-10 px-5 mx-5 w-80 rounded-xl focus:outline-none "
            placeholder="Search for Recipes"
          />
          <button className="mx-5 px-5 rounded-xl active:scale-90 bg-green-700 font-bold text-white text-xl hover:bg-green-900">
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
