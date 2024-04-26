'use client'

import TextTruncate from 'react-text-truncate'
import Image from 'next/image'
import { Avatar } from './avatar'
import { Rating } from './rating'
import { useState } from 'react'
import { RatingDTO } from '@/data/types/ratings'
import { formatDistanceToNow } from 'date-fns'

export interface UserBookCardProps {
  rating: RatingDTO
}

export function UserBookCard({ rating }: UserBookCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="w-bookCard space-y-8 rounded-[8px] bg-gray-700 p-6">
      <div className="flex justify-around gap-4">
        <Avatar src={rating.user.avatar_url} alt="User profile photo" />
        <div className="flex flex-1 flex-col">
          <h2>{rating.user.name}</h2>
          <span className="text-sm text-gray-400">
            {formatDistanceToNow(rating.created_at)}
          </span>
        </div>
        <Rating rate={rating.rate} />
      </div>
      <div className="flex w-full space-x-6">
        <Image
          alt={`${rating.book.name} book cover`}
          src={rating.book.cover_url}
          width={108}
          height={152}
          className="h-[9.5rem] rounded-[4px]"
        />
        <div className="flex flex-col justify-between gap-5 text-left">
          <div className="space-y-3">
            <div className="flex flex-col">
              <h1 className="font-bold leading-short">{rating.book.name}</h1>
              <h2 className="text-sm leading-short text-gray-400">
                {rating.book.author}
              </h2>
            </div>
          </div>

          <div className="relative text-sm text-gray-300">
            {isExpanded ? (
              <p className="text-sm text-gray-300">{rating.book.summary}</p>
            ) : (
              <TextTruncate
                line={3}
                element="p"
                truncateText="..."
                text={rating.book.summary}
                textTruncateChild={
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="font-bold text-purple-100"
                  >
                    show more
                  </button>
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
