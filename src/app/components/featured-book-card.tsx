'use client'
import Image from 'next/image'

import bookImg from '../../../public/images/books/entendendo-algoritmos.png'
import { BookCardDTO } from '../dtos/BookCardDTO'
import { ComponentProps } from 'react'
import { Rating } from './rating'

export interface FeaturedBookCardProps extends ComponentProps<'button'> {
  data: BookCardDTO
}

export function FeaturedBookCard({ data, ...props }: FeaturedBookCardProps) {
  return (
    <button
      {...props}
      className="w-bookCard rounded-[8px] bg-gray-600 px-6 py-5 duration-100 hover:border-gray-500 hover:ring-[2px]"
    >
      <div className="flex w-full space-x-6">
        <Image
          alt="Book cover"
          src={bookImg}
          width={108}
          className="rounded-[4px]"
        />
        <div className="flex flex-col justify-between text-left">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Today</span>
              <Rating rate={2.7} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold leading-short">Entendendo algoritmos</h1>
              <h2 className="text-sm leading-short text-gray-400">
                Aditya Bhargava
              </h2>
            </div>
          </div>

          <p className="line-clamp-2 truncate text-wrap text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            reiciendis tenetur asperiores voluptatum veniam repudiandae rem
            ullam eum. Accusantium numquam in cumque ea error repellendus.
            Minima laborum aliquid placeat similique.
          </p>
        </div>
      </div>
    </button>
  )
}
