import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export function withAuth(Components: any) {
  return async function WithAuth(props: any) {
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect("/login");
      return null;
    }

    return <Components {...props} />;
  };
}
