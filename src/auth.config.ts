import { getUserByEmail, getUserById } from "@/lib/data/user";
import { LoginSchema } from "@/schemas/index";
import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
    providers: [Credentials({
        async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials);

            if (validatedFields.success) {
                const { email, password } = validatedFields.data;

                const user = await getUserByEmail(email)
                if (!user || !user.password) {
                    console.log("NO user LoL!!")
                    return null
                }

                const passwordMatch = await bcrypt.compare(
                    password,
                    user.password
                )

                console.log("Login Successfull")

                if (passwordMatch) return user
            }

            return null
        },
    })],
    callbacks: {
        async session({ token, session, user }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }

            if (token.role && session.user) {
                session.user.role = token.role as "User" | "Admin";
            }

            return session
        },
        async jwt({ token }) {
            if (!token.sub) return token

            const existingUser = await getUserById(token.sub)
            if (!existingUser) return token

            token.role = existingUser.role

            return token
        }
    },
} satisfies NextAuthConfig