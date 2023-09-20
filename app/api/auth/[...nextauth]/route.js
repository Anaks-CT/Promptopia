import { createNewUser, findUserByEmail } from "@helper/userCRUD";
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {  
    async session({ session }) {
      const sessionUser = await findUserByEmail(session.user.email);

      session.user.id = sessionUser._id.toString();
      return session
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        // check if a user already exist
        const userExists = await findUserByEmail(profile.email);

        // if user doesn't exist, create new user
        if (!userExists) await createNewUser(profile);

        return true
      } catch (error) {
        console.log(error);
        return false
      }
    },
  },
});

export { handler as GET, handler as POST };
