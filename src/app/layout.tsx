/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'BookWise',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={nunitoSans.className} lang="en">
      <body className="bg-gray-800 text-gray-100 antialiased">{children}</body>
    </html>
  )
}
