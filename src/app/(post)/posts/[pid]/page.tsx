"use client";

import SinglePost from "@/components/SinglePost";
import { ISinglePost } from "@/interfaces/posts.interface";
import { getSinglePost } from "@/services/posts/posts.service";
import { useState, useEffect } from "react";

export default function Post({ params }: { params: { pid: string } }) {
  const [post, setPost] = useState<ISinglePost | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getSinglePost(params.pid);
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
      <SinglePost post={post.post} user={post.user} />
    </>
  );
}
