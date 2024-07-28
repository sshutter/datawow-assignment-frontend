import { ICreatePost, IUpdatePost } from "@/interfaces/posts.interface";
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

// Get my posts
export const getMyPosts = async () => {
  try {
    const session = await getSession();
    if (!session) throw new Error("No session found");

    const res = await fetch(`${API_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${session?.user.auth_jwt}`,
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Get my single post
export const getMySinglePost = async (id: string) => {
  try {
    const session = await getSession();
    if (!session) throw new Error("No session found");

    const res = await fetch(`${API_URL}/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${session?.user.auth_jwt}`,
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Update post
export const updatePost = async (updatePostData: IUpdatePost, id: string) => {
  try {
    const session = await getSession();
    if (!session) throw new Error("No session found");

    const res = await fetch(`${API_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${session?.user.auth_jwt}`,
      },
      body: JSON.stringify(updatePostData),
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Delete post
export const deletePost = async (id: string) => {
  try {
    const session = await getSession();
    if (!session) throw new Error("No session found");

    const res = await fetch(`${API_URL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${session?.user.auth_jwt}`,
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
