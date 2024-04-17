'use client'

import Image from 'next/image'
import { BookCardDTO } from '../dtos/BookCardDTO'
import bookImg from '../../../public/images/books/a-revolucao-dos-bichos.png'
import { ComponentProps } from 'react'
import { Rating } from './rating'
import { VariantProps, tv } from 'tailwind-variants'

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
    data: BookCardDTO
    isRateByUser?: boolean
  }

export function SmallBookCard({
  data,
  isRateByUser = false,
  variant,
  ...props
}: SmallBookCardProps) {
  const { container, image, rightContainer } = smallBookCard({ variant })

  return (
    <button {...props} className={container()}>
      {isRateByUser && (
        <div className="absolute right-0 top-0 rounded-bl-[4px] bg-green-300 px-3 py-1">
          <span className="text-xs font-bold uppercase text-green-100">
            read
          </span>
        </div>
      )}
      <div className="flex w-full space-x-5">
        <Image width={108} className={image()} alt="Book cover" src={bookImg} />
        <div className={rightContainer()}>
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
