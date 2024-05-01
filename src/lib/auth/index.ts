import NextAuth, { NextAuthConfig } from 'next-auth'
import GithubProvider, { GitHubProfile } from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { PrismaAdapter } from '@/lib/auth/prisma-adapter'

export const BASE_PATH = '/api/auth'

const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(),
  basePath: BASE_PATH,

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
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
