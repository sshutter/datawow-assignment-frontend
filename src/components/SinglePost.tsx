import { IUsersPostDetails } from "@/interfaces/login.interface";
import { IPost, ISinglePost } from "@/interfaces/posts.interface";

export default function SinglePost({
  post,
  user,
}: {
  post: IPost;
  user: IUsersPostDetails;
}) {
  const post_details: IPost = post;
  const user_details: IUsersPostDetails = user;

  const created_at = new Date(post_details.created_at).toLocaleString();
  const updated_at = new Date(post_details.updated_at).toLocaleString();

  return (
    <div className="w-full text-black mt-[50px] p-6 overflow-auto border-b-2">
      <div className="text-4xl font-bold">{post_details.title}</div>
      <div className="py-3">{post_details.body}</div>
      <div className="text-sm mt-2 text-end">
        Posted by: {user_details.first_name} {user_details.last_name} (
        {user_details.email})
        <p>
          <span>Created at: {created_at}, </span>
          <span>Updated at: {updated_at}</span>
        </p>
      </div>
    </div>
  );
}
