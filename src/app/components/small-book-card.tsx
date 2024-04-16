'use client'

import Image from 'next/image'
import { BookCardDTO } from '../dtos/BookCardDTO'
import bookImg from '../../../public/images/a-revolucao-dos-bichos.png'
import { ComponentProps } from 'react'
import { Rating } from './rating'

export interface SmallBookCardProps extends ComponentProps<'button'> {
  data: BookCardDTO
}

export function SmallBookCard({ data, ...props }: SmallBookCardProps) {
  return (
    <button
      {...props}
      className="w-full space-x-5 rounded-[8px] bg-gray-700 px-5 py-4 duration-100 hover:border-gray-600 hover:ring-[2px]"
    >
      <div className="flex w-full space-x-5">
        <Image
          width={64}
          className="h-full rounded-[4px]"
          alt="Book cover"
          src={bookImg}
        />
        <div className="flex flex-col justify-between text-left">
          <div className="flex flex-col">
            <h1 className="font-bold leading-short text-gray-100">
              A revolução dos bichos
            </h1>
            <span className="text-sm text-gray-400">George Orwell</span>
          </div>
          <Rating rate={4} />
        </div>
      </div>
    </button>
  )
}
