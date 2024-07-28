"use client";

import MySinglePost from "@/components/MySinglePost";
import { IMySinglePost } from "@/interfaces/posts.interface";
import { getMySinglePost } from "@/services/posts/posts.service";
import { useState, useEffect } from "react";

export default function Post({ params }: { params: { pid: string } }) {
  const [post, setPost] = useState<IMySinglePost | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getMySinglePost(params.pid);
        setPost(posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  if (!post) {
    return <p className="text-black">No post with id {params.pid}</p>;
  }

  return (
    <>
      <MySinglePost post={post.post} />
    </>
  );
}
