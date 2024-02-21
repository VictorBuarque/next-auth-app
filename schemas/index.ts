import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please insert your e-mail"
    }),
    password: z.string().min(1,{
        message: "Please insert your password"
    }), // on login its recommended dont use .min()
});