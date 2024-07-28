import { ICreatePost } from "@/interfaces/posts.interface";
import { getSession } from "next-auth/react";

const API_URL = `http://localhost:${
  process.env.NEXT_PUBLIC_BACKEND_PORT || 5001
}/api/v1/user`;

// Get all posts
export const getAllPosts = async () => {
  try {
    const res = await fetch(`${API_URL}/all_posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Get single post
export const getSinglePost = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/all_posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Create post
export const createPost = async (postData: ICreatePost) => {
  try {
    const session = await getSession();
    if (!session) throw new Error("No session found");
    const res = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${session?.user.auth_jwt}`,
      },
      body: JSON.stringify(postData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
