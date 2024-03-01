"use server";
import * as z from 'zod';
import { signIn } from '@/lib/auth';
import { LoginSchema } from "../schemas";
import { DEFAULT_LOGIN_REDIRECT, publicRoutes } from '@/lib/routes';
import { AuthError } from 'next-auth';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password } = validateFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
            //THIS WILL BE THE REDIRECT WITH LOGIN
        })
        return {success: "Login"} 
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials"};
                default:
                    return { error: "Unexpected error, something went wrong!" }
            }
        }
        throw error;
    }

};