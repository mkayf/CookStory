import { Container, Button } from "../components";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import databaseService from "../services/database";
import storageService from "../services/storage";
import { toast } from "react-toastify";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (id) {
      setLoader(true);
      databaseService.getPost(id).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoader(false);
      })
    } else {
      navigate("/");
    }
  }, [id]);


  const deletePost = async () => {
    setDeleteLoading(true);
    try {
      const status = await databaseService.deletePost(post.$id);
      if (status) {
        const deleteFile = await storageService.deleteFile(post.featured_img);
        if (deleteFile) {
          toast("Post deleted successfully.", {
            type: "success",
            position: "bottom-right",
          });
          navigate("/");
        } else {
          toast("Couldn't delete image file at the moment. Please try again.", {
            type: "error",
            position: "bottom-right",
          });
        }
      } else {
        toast("Couldn't delete post at the moment. Please try again.", {
          type: "error",
          position: "bottom-right",
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setDeleteLoading(false);
    }
  };



  return post ? (
    <Container className="my-6 ">
      <div className="flex justify-end">
      {isAuthor && (
          <div className="my-4 flex gap-4">
            <Button
              type="button"
              text="Edit"
              onClick={() => navigate(`/editpost/${post.$id}`)}
            />
            <Button
              type="button"
              text={
                deleteLoading ? (
                  <div className="w-4 h-4 sm:w-4 sm:h-4 border-2 border-gray-950 border-b-transparent rounded-full animate-spin"></div>
                ) : 'Delete'
              }
              className="outline-2 outline-[#A8C66C] !bg-transparent"
              onClick={deletePost}
              disabled={
                deleteLoading ? true : false
              }
            />
          </div>
        )}
      </div>
      <div className="flex justify-center">
      <div className="w-[700px] lg:pr-4">
        <div className="w-full h-[400px] my-4">
          <img
            src={storageService.getFilePreview(post.featured_img)}
            className="w-full h-full rounded-xl"
            alt={post.title}
          />
        </div>
        <div className="my-4">
          <p className="text-md poppins-regular">Author: <span className="italic">{post.user_name}</span></p>
        </div>  
        <div className="my-4 mt-8">
          <h2 className="poppins-semibold text-2xl md:text-3xl">
            {post.title}
          </h2>
        </div>
        
        <div className="my-4">
          <div className="poppins-regular">{parse(post.content)}</div>
        </div>
      </div>
      </div>
    </Container>
  ) : null;
}

export default Post;
