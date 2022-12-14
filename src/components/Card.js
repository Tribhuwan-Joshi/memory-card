import React from "react";
export default function Card({ url, name, shuffle, updateScore,handleCardClick }) {

  
  return (
    <>
     
      <div onClick={shuffle}  className="border-2 rounded-md  border-white  bg-slate-200 flex flex-col cursor-pointer hover:relative hover:bottom-2">
        {" "}
        <img
          src={url} 
          onClick={handleCardClick}
          className="h-full w-full  object-cover"
          alt="tree"
        />{" "}
        <p className="bg-black border-t-2 border-black text-center font-semibold font-sans text-lg text-slate-200 ">
          {name}
        </p>{" "}
      </div>
    </>
  );
}
