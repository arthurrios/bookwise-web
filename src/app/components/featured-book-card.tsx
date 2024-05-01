'use client'
import Image from 'next/image'

import { Rating } from './rating'
import { ComponentProps } from 'react'
import { LatestUserRating } from '@/data/types/ratings'
import { formatDistanceToNow } from 'date-fns'

export interface FeaturedBookCardProps extends ComponentProps<'button'> {
  rating: LatestUserRating
}

export function FeaturedBookCard({ rating, ...props }: FeaturedBookCardProps) {
  return (
    <button
      {...props}
      className="w-bookCard rounded-[8px] bg-gray-600 px-6 py-5 duration-100 hover:border-gray-500 hover:ring-[2px]"
    >
      <div className="flex w-full space-x-6">
        <Image
          alt="Book cover"
          src={rating.book.cover_url}
          width={108}
          height={152}
          className="rounded-[4px]"
        />
        <div className="flex w-full flex-col justify-between text-left">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">
                {formatDistanceToNow(rating.created_at)}
              </span>
              <Rating rate={rating.rate} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold leading-short">{rating.book.name}</h1>
              <h2 className="text-sm leading-short text-gray-400">
                {rating.book.author}
              </h2>
            </div>
          </div>

          <p className="line-clamp-2 truncate text-wrap text-sm text-gray-300">
            {rating.description}
          </p>
        </div>
      </div>
    </button>
  )
}
