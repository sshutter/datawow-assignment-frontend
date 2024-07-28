"use client";

import { logout } from "@/services/user/user.service";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

export default function Logout() {
  const handleLogout = async () => {
    try {
      await logout();
      await signOut({ redirect: true, callbackUrl: "/" });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="container w-[40%] flex flex-col rounded-lg shadow-2xl p-4 bg-slate-100 items-center">
        <h1 className="text-4xl pb-10 font-extrabold text-center text-black">
          Logout
        </h1>
        <p className="text-xl pb-10 font-medium text-center text-black">
          Are you sure you want to log out?
        </p>
        <Button
          onClick={handleLogout}
          className="w-[40%] font-serif text-white bg-black hover:bg-slate-100 hover:text-black my-2"
        >
          Log Out
        </Button>
      </div>
    </main>
  );
}
