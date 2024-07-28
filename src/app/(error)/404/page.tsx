import { Link } from "@mui/material";

export default function NotFound() {
  return (
    <main className="flex flex-col h-screen py-4 justify-center items-center">
      <h1 className="text-5xl font-black text-black text-center py-5">
        404: Not found
      </h1>
      <Link href="/" className="underline text-black hover:text-blue-600">
        Go to home page
      </Link>
    </main>
  );
}
