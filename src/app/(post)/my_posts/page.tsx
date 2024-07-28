"use client";

import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import Link from "next/link";
import AllPosts from "@/components/AllPosts";
import { IAllPosts } from "@/interfaces/posts.interface";
import { useState, useEffect } from "react";
import { getMyPosts } from "@/services/posts/posts.service";

export default function MyPosts() {
  const [posts, setPosts] = useState<IAllPosts | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getMyPosts();
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  if (!posts) {
    return <p className="text-black">No posts available</p>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense
        fallback={
          <div className="items-center justify-center w-full text-black text-center">
            Loading...
            <LinearProgress color="inherit" />
          </div>
        }
      >
        <AllPosts posts={posts} href={"/my_posts"} />
      </Suspense>
    </main>
  );
}
