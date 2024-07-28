import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CreatePostForm from "@/components/CreatePostForm";
import { ICreatePost } from "@/interfaces/posts.interface";
import { withAuth } from "@/lib/withAuth";
import { createPost } from "@/services/posts/posts.service";
import { Button } from "@mui/material";
import { getServerSession } from "next-auth";
import { title } from "process";

async function CreatePost() {
  return (
    <main className="h-screen md:py-4 w-full flex items-center justify-center">
      <CreatePostForm />
    </main>
  );
}

export default withAuth(CreatePost);
