import PostCard from "@/components/PostCard";
import { IAllPosts, IPost } from "@/interfaces/posts.interface";

export default async function AllPosts({ posts }: { posts: IAllPosts }) {
  const postReady = await posts;
  console.log(postReady);
  return (
    <div className="text-black w-full">
      {postReady.posts.map((post: IPost) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}
