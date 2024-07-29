"use client";

import { IPost, IMySinglePost } from "@/interfaces/posts.interface";
import { deletePost } from "@/services/posts/posts.service";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

export default function MySinglePost({ post }: { post: IPost }) {
  const post_details: IPost = post;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const handleDeleteConfirmation = async (id: string) => {
    // Define what happens when the reservation is deleted
    await deletePost(id);

    router.push("/my_posts");
  };

  return (
    <div className="w-full text-black mt-[50px] p-6 overflow-auto border-b-2">
      <div className="text-4xl font-bold">{post_details.title}</div>
      <div className="py-3">{post_details.body}</div>
      <div className="w-full flex flex-row justify-end">
        <div className="">
          <Button
            variant="outlined"
            className="border-black hover:border-black md:text-black hover:bg-slate-300 mx-2"
            onClick={() => setIsDialogOpen(true)}
          >
            Delete Post
          </Button>
          <Button
            variant="contained"
            className="bg-black hover:bg-slate-700 mx-2"
            onClick={() => {
              router.push(`/my_posts/edit/${post.id}`);
            }}
          >
            Edit Post
          </Button>
          <DeleteDialog
            open={isDialogOpen}
            setOpen={setIsDialogOpen}
            onDelete={handleDeleteConfirmation}
            id={post_details.id}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}
