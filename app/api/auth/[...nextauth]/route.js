import mongoose from 'mongoose'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import connectDB from '@/db/connectDB'
import User from '@/models/User'

export const authoptions= NextAuth({
  providers: [
    
    GitHubProvider({
        clientId:process.env.GITHUB_ID,
        clientSecret:process.env.GITHUB_SECRET
    })],
    callbacks:{
      async signIn({ user, account, profile, email, credentials }) {
        try {
          if (account.provider == 'github') {
            await connectDB();
            const currentUser = await User.findOne({ email: email });
            if (!currentUser) {
              const newUser = await User.create({
                email: user.email,
                username: user.email.split('@')[0],
              });
              await newUser.save();
            }
          }
          return true;
        } catch (error) {
          console.error("Error in signIn:", error);
          return false;
        }
      }
      ,async session({ session, user, token }) {
        const dbUser = await User.findOne({email: session.user.email})
        session.user.name = dbUser.username
        console.log(dbUser)
        return session
      },
 
    }
  
})

export{authoptions as GET, authoptions as POST}