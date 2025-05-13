import React from "react";
import { useNavigate } from "react-router-dom";
import storageService from "../services/storage";
import parse from 'html-react-parser'


function PostCard({post}) {

  const id = post?.$id;
  const imageId = post?.featured_img;
  const navigate = useNavigate();

  return (
    <div className="h-90 bg-white rounded-2xl p-4 flex flex-col items-start justify-center gap-4 shadow-md">
      <div className="h-full w-full overflow-hidden">
      <img src={storageService.getFilePreview(imageId)} alt={post?.title}
        className="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div className="">
        <p className="poppins-semibold">{post?.title}</p>
      </div>
      <button onClick={() => navigate(`/post/${id}`)} className=" bg-[#A8C66C] poppins-regular text-sm p-2 px-4 rounded-lg hover:bg-[#8ea75d] transition-colors cursor-pointer">
        View Recipe
      </button>
    </div>
  );
}

export default PostCard;
