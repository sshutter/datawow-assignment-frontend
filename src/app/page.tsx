"use client";

import PostCard from "@/components/PostCard";
import { IAllPosts } from "@/interfaces/posts.interface";
import { getAllPosts } from "@/services/posts/posts.service";
import { Suspense, useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import AllPosts from "@/components/AllPosts";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState<IAllPosts | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllPosts();
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
        <AllPosts posts={posts} />
      </Suspense>
      <div className="fixed bottom-0 w-full flex justify-center p-4 bg-transparent shadow-md">
        <Link
          href="/create_post"
          className="w-auto text-white rounded-full bg-black px-5 py-3"
        >
          Post something
        </Link>
      </div>
    </main>
  );
}
