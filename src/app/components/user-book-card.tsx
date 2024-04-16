'use client'

import TextTruncate from 'react-text-truncate'
import Image from 'next/image'
import { BookCardDTO } from '../dtos/BookCardDTO'
import { Avatar } from './avatar'
import { Rating } from './rating'
import bookImg from '../../../public/images/entendendo-algoritmos.png'
import { useState } from 'react'

export interface UserBookCardProps {
  book: BookCardDTO
  userId: string
}

export function UserBookCard(props: UserBookCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="w-bookCard space-y-8 rounded-[8px] bg-gray-700 p-6">
      <div className="flex justify-around gap-4">
        <Avatar
          src="https://github.com/arthurrios.png"
          alt="User profile photo"
        />
        <div className="flex flex-1 flex-col">
          <h2>Arthur Rios</h2>
          <span className="text-sm text-gray-400">Today</span>
        </div>
        <Rating rate={4} />
      </div>
      <div className="flex w-full space-x-6">
        <Image
          alt="Book cover"
          src={bookImg}
          width={108}
          height={152}
          className="h-[9.5rem] rounded-[4px]"
        />
        <div className="flex flex-col justify-between gap-5 text-left">
          <div className="space-y-3">
            <div className="flex flex-col">
              <h1 className="font-bold leading-short">Entendendo algoritmos</h1>
              <h2 className="text-sm leading-short text-gray-400">
                Aditya Bhargava
              </h2>
            </div>
          </div>

          <div className="relative text-sm text-gray-300">
            {isExpanded ? (
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi, odio quae. Minima optio praesentium voluptatum
                accusantium quasi non ipsum illo commodi? Dolore commodi
                blanditiis sunt illo enim alias ipsa sed? Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Eligendi, odio quae. Minima
                optio praesentium voluptatum accusantium quasi non ipsum illo
                commodi? Dolore commodi blanditiis sunt illo enim alias ipsa
                sed?
              </p>
            ) : (
              <TextTruncate
                line={3}
                element="p"
                truncateText="..."
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi, odio quae. Minima optio praesentium voluptatum
                accusantium quasi non ipsum illo commodi? Dolore commodi
                blanditiis sunt illo enim alias ipsa sed? Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Eligendi, odio quae. Minima
                optio praesentium voluptatum accusantium quasi non ipsum illo
                commodi? Dolore commodi blanditiis sunt illo enim alias ipsa
                sed?"
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
