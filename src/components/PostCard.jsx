import React from "react";

function PostCard() {
  return (
    <div className="h-90 bg-white rounded-2xl p-4 flex flex-col items-start justify-center gap-4 shadow-md">
      <div className="h-full w-full overflow-hidden">
      <img src='https://media.istockphoto.com/id/901354116/photo/traditional-italian-pasta-alla-norma-with-eggplant-tomato-cheese-and-basil.jpg?s=612x612&w=0&k=20&c=SIZvs4HVWT0ICi9-nP8w9TUhj3U8EksujdLyNUVpCY8=' alt=''
        className="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div className="">
        <p className="poppins-semibold">Card title</p>
        <p className="poppins-regular text-[#4B4B4B] text-sm">4 popular types of cards in UI design.</p>
      </div>
      <button className=" bg-[#A8C66C] poppins-regular text-sm p-2 px-4 rounded-lg hover:bg-[#8ea75d] transition-colors cursor-pointer">
        View Recipe
      </button>
    </div>
  );
}

export default PostCard;
