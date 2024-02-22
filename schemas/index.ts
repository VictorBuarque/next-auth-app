import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please insert your e-mail"
    }),
    password: z.string().min(1,{
        message: "Please insert your password"
    }), // on login its recommended dont use .min()
});
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please insert your e-mail"
    }),
    password: z.string().min(6,{
        message: "Minimum 6 characters password required"
    }), // on login its recommended dont use .min()
    name: z.string().min(3,{
        message: "Name is required"
    }), // on login its recommended dont use .min()
});

