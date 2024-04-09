'use-client'

import Image from 'next/image'
import { ComponentProps } from 'react'

interface LoginButtonProps extends ComponentProps<'button'> {
  title: string
  imgSrc: string
}

export function LoginButton({ title, imgSrc, ...props }: LoginButtonProps) {
  return (
    <button
      className="flex items-center gap-5 bg-gray-600 px-6 py-5 rounded-[8px] hover:bg-gray-500 transition duration-300"
      {...props}
    >
      <Image src={imgSrc} alt="" width={32} height={32} />
      <h2 className="font-bold text-lg text-gray-200">{title}</h2>
    </button>
  )
}
