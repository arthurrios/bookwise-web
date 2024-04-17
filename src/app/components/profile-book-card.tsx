'use client'

import Image from 'next/image'
import { BookCardDTO } from '../dtos/BookCardDTO'
import bookImg from '../../../public/images/books/a-revolucao-dos-bichos.png'
import { Rating } from './rating'

export interface ProfileBookCardProps {
  data: BookCardDTO
}

export function ProfileBookCard({ data }: ProfileBookCardProps) {
  return (
    <div className="max-w-profileContainer space-y-6 rounded-[8px] bg-gray-700 px-5 py-4 duration-100 hover:border-gray-600 hover:ring-[2px]">
      <div className="flex w-full space-x-5">
        <Image
          width={98}
          className="h-full rounded-[4px]"
          alt="Book cover"
          src={bookImg}
        />
        <div className="flex flex-col justify-between text-left">
          <div className="flex flex-col space-y-[2px]">
            <h1 className="text-lg font-bold leading-short text-gray-100">
              A revolução dos bichos
            </h1>
            <span className="text-sm text-gray-400">George Orwell</span>
          </div>
          <Rating rate={4} />
        </div>
      </div>
      <p className="text-sm text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas numquam
        aspernatur aliquid sunt assumenda sed vero dolor! Cupiditate quibusdam
        error officiis rerum voluptatem dolor nemo dolorem, aut, debitis facilis
        tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem beatae incidunt, voluptatum iste in porro dolorum veniam
        provident harum nostrum, aut dolor laboriosam accusamus minima alias
        odit at sint ullam.
      </p>
    </div>
  )
}
