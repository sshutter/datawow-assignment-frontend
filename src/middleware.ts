export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/my_posts", "/my_posts/:path*"],
};
