import { ReactNode } from 'react'

import authBgImg from '../../../public/loginBg.png'
import logo from '@/app/icon.png'

import Image from 'next/image'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-auth h-screen">
      <div className="flex relative p-5 max-lg:hidden">
        <Image
          src={authBgImg}
          height={912}
          width={598}
          quality={100}
          className="rounded-md"
          alt=""
          priority
        />
        <div className="flex gap-3 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src={logo} alt="" />
          <h1 className="text-[2.25rem] font-bold bg-gradient-horizontal text-[transparent] bg-clip-text">
            BookWise
          </h1>
        </div>
      </div>
      {children}
    </div>
  )
}
