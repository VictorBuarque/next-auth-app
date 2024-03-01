import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import { LoginSchema } from "../../schemas";
import { getUserByEmail } from "../../data/user";

const nextAuthConfig: NextAuthConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);
        if (validateFields.success) {
          const { email, password } = validateFields.data;
          console.log(validateFields.data);

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null; //This compare who sign in with google or github

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }
        return null;
      }
    })
  ],
};

export default nextAuthConfig;
