'use client'

import Image from 'next/image'
import { Rating } from './rating'
import type {
  Book,
  CategoriesOnBooks,
  Category,
  Rating as PrismaRating,
} from '@prisma/client'

export type ProfileRating = PrismaRating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category
      }[]
  }
}

type ProfileBookCardProps = {
  rating: ProfileRating
}

export function ProfileBookCard({ rating }: ProfileBookCardProps) {
  const { book } = rating

  return (
    <div className="max-w-profileContainer space-y-6 rounded-[8px] bg-gray-700 px-5 py-4 duration-100 hover:border-gray-600 hover:ring-[2px]">
      <div className="flex w-full space-x-5">
        <Image
          width={98}
          height={134}
          className="h-full rounded-[4px]"
          alt={`${book.name} book cover`}
          src={book.cover_url}
        />
        <div className="flex flex-col justify-between text-left">
          <div className="flex flex-col space-y-[2px]">
            <h1 className="text-lg font-bold leading-short text-gray-100">
              {book.name}
            </h1>
            <span className="text-sm text-gray-400">{book.author}</span>
          </div>
          <Rating rate={rating.rate} />
        </div>
      </div>
      <p className="text-sm text-gray-300">{rating.description}</p>
    </div>
  )
}
