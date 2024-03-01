/**
 *An array of routes that are acessible to the public
 *routes without auth
 *@type{string[]}
 */
export const publicRoutes = [
    "/",
];

/**
 *An array of routes that are used for authentication
 *routes with auth
 *@type{string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
];
/**
 *The prefix for API authentication routes
 *Routes that start with this prefix are used for API authenciation purposes.
 *@type{string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 *The default redirect path after loggin in
 *@type{string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";