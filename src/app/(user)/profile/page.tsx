import { withAuth } from "@/lib/withAuth";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button, Link } from "@mui/material";
import { getMe } from "@/services/users/users.service";

async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  const res = await getMe(session.user.auth_jwt);
  console.log(res);
  return (
    <main className="flex flex-col h-full py-4 justify-center items-center">
      <h1 className="text-5xl font-black text-primary text-center py-5">
        My Profile
      </h1>
      <div>
        <p className="text-xl font-semibold text-black text-center py-5">
          First name: {res.user.first_name}
        </p>
        <p className="text-xl font-semibold text-black text-center py-5">
          Last name: {res.user.last_name}
        </p>
        <p className="text-xl font-semibold text-black text-center py-5">
          Email: {res.user.email}
        </p>
      </div>
    </main>
  );
}

export default withAuth(Profile);
