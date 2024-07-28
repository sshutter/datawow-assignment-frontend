import EditPostForm from "@/components/EditPostForm";

export default function editPost({ params }: { params: { pid: string } }) {
  return (
    <main className="h-screen md:py-4 w-full flex items-center justify-center">
      <EditPostForm postId={params.pid} />
    </main>
  );
}
