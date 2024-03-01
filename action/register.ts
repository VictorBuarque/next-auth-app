"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "../schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "../data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) { 
    return { error: "Email already registered" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
        name,
        email,
        password: hashedPassword  //Never forget this for password encryption
    }
  });

  // TODO: Implementar o envio do token de verificação

  return { success: "Registered with success" };
};
