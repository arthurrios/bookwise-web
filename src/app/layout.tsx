/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import SessionProvider from '@/app/components/session-provider'

import './globals.css'
import { BASE_PATH, auth } from '@/lib/auth'

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
        <SessionProvider basePath={BASE_PATH} session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
