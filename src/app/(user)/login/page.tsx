"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (loginForm: FormData) => {
    try {
      const res = await signIn("credentials", {
        email: loginForm.get("email") as string,
        password: loginForm.get("password") as string,
        redirect: false,
      });

      if (res?.error) {
        setError(true);
        return;
      }

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="container flex md:flex-row flex-col rounded-lg shadow-2xl m-4">
        <div className="md:w-[40%] w-0 relative md:rounded-l-lg">
          <Image
            src={"/img/login.jpg"}
            alt="Login"
            sizes="100%"
            fill={true}
            className="object-cover rounded-l-lg"
            priority={true}
          />
        </div>
        <div className="md:w-[60%] w-full bg-slate-100 md:rounded-r-lg rounded-lg p-6 flex flex-col justify-center items-center">
          <h1 className="text-4xl pb-10 font-extrabold text-center text-black">
            Login
          </h1>
          <form className="w-full" action={handleSubmit}>
            <div className="p-4 space-y-2">
              <label htmlFor="email" className="text-xl text-black">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="p-4 space-y-2">
              <label className="text-xl text-black">Password</label>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
            {error ? (
              <div className="p-4 text-red-500 text-start">
                Invalid Email or Password
              </div>
            ) : null}
            <div className="text-black px-4 text-end">
              <span>
                Do not have an account?{" "}
                <Link
                  href="/register"
                  className="font-extrabold underline hover:text-blue-700"
                >
                  Register
                </Link>
              </span>
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-[40%] font-serif text-white bg-black hover:bg-slate-100 hover:text-black my-2"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
