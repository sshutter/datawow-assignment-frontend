"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import { useState } from "react";
import { redirect } from "next/navigation";
import { IRegister } from "@/interfaces/register.interface";
import { register } from "@/services/user/user.service";

export default function Register() {
  const [passwordError, setPasswordError] = useState(false);
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);

  const handleSubmit = async (registerFormData: FormData) => {
    // validate password
    const password = registerFormData.get("password") as string;
    const confirmPassword = registerFormData.get("confirmPassword") as string;

    if (password.length < 6) {
      setPasswordError(true);
    }

    if (password !== confirmPassword) {
      setPasswordNotMatch(true);
    }

    if (passwordError || passwordNotMatch) {
      return;
    }

    const registerForm: IRegister = {
      user: {
        first_name: registerFormData.get("first_name") as string,
        last_name: registerFormData.get("last_name") as string,
        email: registerFormData.get("email") as string,
        password: password,
      },
    };

    await register(registerForm);
    redirect("/");
  };

  return (
    <main className="h-screen md:py-4 w-full flex items-center justify-center">
      <div className="container flex md:flex-row flex-col rounded-lg shadow-2xl m-4">
        <div className="md:w-[40%] w-0 relative md:rounded-l-lg">
          <Image
            src={"/img/register.jpg"}
            alt="Register"
            fill={true}
            className="object-cover rounded-l-lg z-0"
            priority={true}
          />
        </div>
        <div className="md:w-[60%] w-full bg-slate-100 md:rounded-r-lg rounded-lg p-6 flex flex-col justify-center items-center">
          <h1 className="text-4xl pb-10 font-extrabold text-center text-black">
            Register
          </h1>
          <form className="w-full" action={handleSubmit}>
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full md:w-1/2 p-4 space-y-2">
                <label htmlFor="first_name" className="text-xl text-black">
                  First name
                </label>
                <input
                  type="text"
                  required
                  name="first_name"
                  placeholder="First name"
                  className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 space-y-2">
                <label htmlFor="last_name" className="text-xl text-black">
                  Last name
                </label>
                <input
                  type="text"
                  required
                  name="last_name"
                  placeholder="Last name"
                  className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="p-4 space-y-2">
              <label htmlFor="email" className="text-xl text-black">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="example@gmail.com"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>

            <div className="p-4 space-y-2">
              <div className="flex flex-row space-x-4">
                <label className="text-xl text-black">Password</label>
                {passwordError ? (
                  <p className="text-red-700">
                    *** Password must contains 6 characters ***
                  </p>
                ) : null}
                {passwordNotMatch ? (
                  <p className="text-red-700">
                    *** Password does not match ***
                  </p>
                ) : null}
              </div>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex flex-row space-x-4">
                <label className="text-xl text-black">Confirm Password</label>

                {passwordNotMatch ? (
                  <p className="text-red-700">
                    *** Password does not match ***
                  </p>
                ) : null}
              </div>
              <input
                type="password"
                required
                name="confirmPassword"
                placeholder="Confirm Password"
                className="bg-white border-2 border-gray-200 rounded-lg w-full p-2 text-gray-700 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-[40%] font-serif text-white bg-black hover:bg-slate-100 hover:text-black my-2"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
