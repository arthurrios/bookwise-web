import NextAuth from 'next-auth'
import GithubProvider, { GitHubProfile } from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { PrismaAdapter } from '@/lib/auth/prisma-adapter'

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(),

  providers: [
    GithubProvider({
      profile(profile: GitHubProfile) {
        return {
          id: String(profile.id),
          name: profile.name!,
          email: profile.email,
          avatar_url: profile.avatar_url,
        }
      },
    }),
    GoogleProvider({
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name!,
          email: profile.email!,
          avatar_url: profile.picture,
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          avatar_url: user.avatar_url,
        },
      }
    },
  },
})
