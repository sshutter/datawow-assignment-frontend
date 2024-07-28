import Link from "next/link";

export default function PostCard({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body: string;
}) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="bg-slate-200 rounded-lg p-6 w-full my-5 shadow-lg hover:bg-slate-300">
        <div className="text-4xl">{title}</div>
        <div>{body}</div>
      </div>
    </Link>
  );
}
