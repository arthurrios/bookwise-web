'use client'

import { SignOut } from '@phosphor-icons/react'
import Image from 'next/image'
import { ComponentProps } from 'react'

export interface LogoutButtonProps extends ComponentProps<'button'> {
  imgSrc: string
  title: string
}

export function LogoutButton({ imgSrc, title, ...props }: LogoutButtonProps) {
  return (
    <button {...props} className="z-10 flex cursor-pointer items-center gap-3">
      <div className="relative size-8 rounded-full bg-gradient-vertical">
        <Image
          src={imgSrc}
          width={20}
          height={20}
          alt="User profile image"
          className="absolute left-1/2 top-1/2 size-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      </div>
      <span className="text-sm text-gray-200">{title}</span>
      <SignOut size={28} className="text-danger-light" />
    </button>
  )
}
