import Link from "next/link";

export default function PostCard({
  id,
  title,
  body,
  href,
}: {
  id: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link href={`${href}/${id}`}>
      <div className="bg-slate-200 rounded-lg p-6 w-full my-5 shadow-lg hover:bg-slate-300">
        <div className="text-4xl">{title}</div>
        <div>{body}</div>
      </div>
    </Link>
  );
}
