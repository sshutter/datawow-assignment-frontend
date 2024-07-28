import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import LoggedInMenu from "./LoggedInDropdown";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-[50px] bg-white fixed top-0 right-0 left-0 z-10 flex flex-row items-center justify-center border-b-2">
      <Link href="/" className="h-[70%] w-auto">
        <Image
          className="h-full w-auto"
          src={"/logo.svg"}
          alt="Logo"
          width={0}
          height={0}
        />
      </Link>
      {session ? (
        <div className="flex items-center absolute right-0 h-full px-2 text-black no-underline hover:underline">
          <LoggedInMenu userName={`${session.user.first_name}`} />
        </div>
      ) : (
        <Link
          href="/api/auth/signin"
          className="flex items-center absolute right-0 h-full px-2 text-black no-underline hover:underline"
        >
          <div className="justify-end flex flex-row w-full h-auto space-x-6">
            Sign-In
          </div>
        </Link>
      )}
    </div>
  );
}
