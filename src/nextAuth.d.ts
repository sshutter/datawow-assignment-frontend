import nextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      first_name: string;
      last_name: string;
      auth_jwt: string;
    };
  }
}
