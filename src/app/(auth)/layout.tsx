import { ReactNode } from 'react'

import authBgImg from '../../../public/loginBg.png'

import Image from 'next/image'
import { Logo } from '../components/logo'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-auth">
      <div className="relative flex p-5 max-lg:hidden">
        <Image
          src={authBgImg}
          height={912}
          width={598}
          quality={100}
          className="rounded-md"
          alt=""
          priority
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>
      </div>
      {children}
    </div>
  )
}
