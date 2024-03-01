import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config"
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from "@/lib/routes";

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req; //need destructure to easily access
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    //this api routes special const doesnt have necessity for protect the api route 

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) { 
        return null; 
    } //do the build of code in this structure order, make sure we go to /api/auth/providers

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }
    

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login", nextUrl));
    }
    return null;
})

//Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
    //this matcher isnt the auth matcher but works better than the auth
    //founded in clerk.com
    //This middleware will works in any route u choose authorized or private
}