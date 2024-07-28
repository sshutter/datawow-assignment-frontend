"use client";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ICreatePost } from "@/interfaces/posts.interface";
import { createPost } from "@/services/posts/posts.service";
import { Button } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { title } from "process";

export default function CreatePostForm() {
  const handleSubmit = async (createPostFormData: FormData) => {
    const createPostForm: ICreatePost = {
      post: {
        title: createPostFormData.get("title") as string,
        body: createPostFormData.get("body") as string,
      },
    };

    await createPost(createPostForm);
    redirect("/");
  };

  return (
    <div className="container flex md:flex-row flex-col rounded-lg shadow-2xl m-4">
      <div className="w-full bg-slate-100 md:rounded-r-lg rounded-lg p-6 flex flex-col justify-center items-center">
        <h1 className="text-4xl pb-10 font-extrabold text-center text-black">
          Create new post
        </h1>
        <form className="w-full" action={handleSubmit}>
          <div className="flex flex-col w-full">
            <div className="w-full p-4 space-y-2">
              <label htmlFor="title" className="text-xl text-black">
                Title
              </label>
              <input
                type="text"
                required
                name="title"
                placeholder="Title"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="w-full p-4 space-y-2">
              <label htmlFor="body" className="text-xl text-black">
                Body
              </label>
              <textarea
                id="body"
                required
                name="body"
                placeholder="Body"
                rows={4}
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-[40%] font-serif text-white bg-black hover:bg-slate-100 hover:text-black my-2"
            >
              Create Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
