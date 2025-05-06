import { useEffect, useCallback, useState } from "react";
import { Input, Button, Select, RTE } from "./index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import databaseService from "../services/database";
import storageService from "../services/storage";

function PostForm({ post }) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      category: post?.category || "breakfast",
      status: post?.status || "active",
      content: post?.content || "",
    },
  });

  const [publishLoader, setPublishLoader] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const publishPost = async (data) => {
    setPublishLoader(true);
    try {
      if (post) {
        // check if image has been uploaded or not by the user:
        const file = data.featured_img[0]
          ? await storageService.uploadFile(data.featured_img[0])
          : null;

        if (file) {
          await storageService.deleteFile(post.featured_img);
        }

        const dbPost = await databaseService.updatePost(post.$id, {
          ...data,
          featured_img: file ? file.$id : undefined,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        const file = await storageService.uploadFile(data.featured_img[0]);
        if (file) {
          const fileId = file.$id;
          const dbPost = await databaseService.createPost({
            ...data,
            featured_img: file.$id,
            userId: userData.$id,
          });

          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setPublishLoader(false);
    }
  };

  const slugTransformation = (value) => {
    if (value && typeof value === "string") {
      return value.trim().toLowerCase().replace(/\s/g, "-");
    }
    return "";
  };

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransformation(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransformation, setValue]);

  return (
    <div className="px-4 py-2 md:px-12 bg-white rounded-2xl h-auto shadow-lg w-full lg:w-250">
      <form onSubmit={handleSubmit(publishPost)}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 my-4 gap-6">
          <div>
            <Input
              type="text"
              label="Title"
              labelClassName="lg:text-lg"
              {...register("title", {
                required: "Please enter a title ",
              })}
            />
            {errors.title && (
              <small className="text-red-500">{errors.title.message}</small>
            )}
          </div>
          <div>
            <Input
              type="text"
              label="Slug"
              labelClassName="lg:text-lg"
              {...register("slug", {
                required: "Please enter a slug",
              })}
              onInput={(e) => {
                setValue("slug", slugTransformation(e.currentTarget.value), {
                  shouldValidate: true,
                });
              }}
            />
            {errors.slug && (
              <small className="text-red-500">{errors.slug.message}</small>
            )}
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 my-4 gap-6">
          <div>
            <Select
              options={["breakfast", "lunch", "dinner", "snacks"]}
              label="Category"
              {...register("category", {
                required: "Please select atleast one category",
              })}
            />
            {errors.category && (
              <small className="text-red-500">{errors.category.message}</small>
            )}
          </div>
          <div>
            <Select
              options={["active", "inactive"]}
              label="Status"
              {...register("status", {
                required: "Please select status",
              })}
            />
            {errors.status && (
              <small className="text-red-500">{errors.status.message}</small>
            )}
          </div>
          <div>
            <Input
              type="file"
              label="Image"
              accept="image/*"
              labelClassName="lg:text-lg"
              className="py-2.5"
              {...register("featured_img", {
                required: !post ? "Please upload an image" : "",
              })}
            />
            {errors.featured_img && (
              <small className="text-red-500">
                {errors.featured_img.message}
              </small>
            )}
          </div>
        </div>
        <div className="my-4">
          <RTE
            label="Content"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
          {errors.content && (
            <small className="text-red-500 mt-1">
              {errors.content.message}
            </small>
          )}
        </div>
        <div className="my-6 flex justify-center">
          <Button
           type="submit"
           text={
            publishLoader ? (<div className="w-4 h-5 sm:w-5 sm:h-4 border-2 border-gray-950 border-b-transparent rounded-full animate-spin"></div>) : 'Publish'
           }
           disabled={
            publishLoader ? true : false
           }
           className="w-full md:w-1/2" />
        </div>
      </form>
    </div>
  );
}

export default PostForm;
