import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider, { GithubProfile } from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { PrismaAdapter } from '@/lib/auth/prisma-adapter'
import { NextApiRequest, NextApiResponse } from 'next'

export function buildNextAuthOptions(
  req: NextApiRequest,
  res: NextApiResponse,
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),

    providers: [
      GithubProvider({
        clientId: process.env.AUTH_GITHUB_ID ?? '',
        clientSecret: process.env.AUTH_GITHUB_SECRET ?? '',
        profile(profile: GithubProfile) {
          return {
            id: String(profile.id),
            name: profile.name!,
            email: profile.email,
            avatar_url: profile.avatar_url,
          }
        },
      }),
      GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID ?? '',
        clientSecret: process.env.AUTH_GOOGLE_SECRET ?? '',
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
          user,
        }
      },
    },

    secret: process.env.NEXTAUTH_SECRET,
  }
}

export function handler(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, buildNextAuthOptions(req, res))
}

export { handler as GET, handler as POST }
