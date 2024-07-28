import { ILogin } from "@/interfaces/login.interface";
import { useRouter } from "next/router";

const API_BASE_URL = `http://localhost:${
  process.env.NEXT_PUBLIC_BACKEND_PORT || 5001
}/api/v1/user`;

export const login = async (loginData: ILogin) => {
  try {
    const res = await fetch(`${API_BASE_URL}/sign_in`, {
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
