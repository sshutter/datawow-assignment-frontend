import { getSession } from "next-auth/react";
import { ILogin } from "@/interfaces/login.interface";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IRegister } from "@/interfaces/register.interface";

const USER_SERVICE_URL = `http://localhost:${
  process.env.NEXT_PUBLIC_BACKEND_PORT || 5001
}/api/v1/user`;

// Login
export const login = async (loginData: ILogin) => {
  try {
    const res = await fetch(`${USER_SERVICE_URL}/sign_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Logout
export const logout = async () => {
  try {
    const session = await getSession();
    if (!session) throw new Error("No session found");

    const res = await fetch(`${USER_SERVICE_URL}/sign_out`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${session?.user.auth_jwt}`,
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Register
export const register = async (registerData: IRegister) => {
  try {
    const res = await fetch(`${USER_SERVICE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Get Me
export const getMe = async (authJwt: string) => {
  try {
    const res = await fetch(`${USER_SERVICE_URL}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${authJwt}`,
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
