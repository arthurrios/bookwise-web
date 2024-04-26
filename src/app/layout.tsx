/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import SessionProvider from '@/app/components/session-provider'

import './globals.css'
import { auth } from '@/lib/auth'
import { QueryClient } from './components/query-client-provider'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'BookWise',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html className={nunitoSans.className} lang="en">
      <body className="bg-gray-800 text-gray-100 antialiased">
        <QueryClient>
          <SessionProvider session={session}>{children}</SessionProvider>
        </QueryClient>
      </body>
    </html>
  )
}
