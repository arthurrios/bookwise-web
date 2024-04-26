'use client'

import Image from 'next/image'
import { ComponentProps } from 'react'
import { Rating } from './rating'
import { VariantProps, tv } from 'tailwind-variants'
import { BookWithAvgRating } from '@/data/types/book'

const smallBookCard = tv({
  slots: {
    container:
      'relative overflow-hidden w-full gap-5 rounded-[8px] bg-gray-700 px-5 py-4 duration-100 hover:border-gray-600 hover:ring-[2px]',
    image: 'h-full rounded-[4px]',
    rightContainer: 'flex flex-col justify-between text-left',
  },

  variants: {
    variant: {
      explore: {
        container: 'min-w-[19.875rem]',
        rightContainer: 'w-32 2xl:w-full',
      },
      home: {
        image: 'w-16',
      },
    },
  },
  defaultVariants: {
    variant: 'home',
  },
})

export type SmallBookCardProps = ComponentProps<'button'> &
  VariantProps<typeof smallBookCard> & {
    book: BookWithAvgRating
    alreadyRead?: boolean
  }

export function SmallBookCard({
  book,
  alreadyRead = false,
  variant,
  ...props
}: SmallBookCardProps) {
  const { container, image, rightContainer } = smallBookCard({ variant })

  return (
    <button {...props} className={container()}>
      {alreadyRead && (
        <div className="absolute right-0 top-0 rounded-bl-[4px] bg-green-300 px-3 py-1">
          <span className="text-xs font-bold uppercase text-green-100">
            read
          </span>
        </div>
      )}
      <div className="flex w-full space-x-5">
        <Image
          width={108}
          height={152}
          className={image()}
          alt={`${book.name} book cover`}
          src={book.cover_url}
        />
        <div className={rightContainer()}>
          <div className="flex flex-col">
            <h1 className="font-bold leading-short text-gray-100">
              {book.name}
            </h1>
            <span className="text-sm text-gray-400">{book.author}</span>
          </div>
          <Rating rate={book.avgRating} />
        </div>
      </div>
    </button>
  )
}
