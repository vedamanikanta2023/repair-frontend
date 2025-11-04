import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log("✅ Middleware hit:", req.nextUrl.pathname);
  },
  {
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/userdetails/:path*", "/updateuserdetails/:path*", "/"],
};