'use client'

import { Button } from '@/app/components/button'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { RatingComment } from './components/rating-comment'
import { RatingBox } from './components/rating-box'
import { useSession } from 'next-auth/react'
import { api } from '@/data/api'
import { BookWithAvgRating } from '@/data/types/book'
import { CategoriesOnBooks, Category, Rating, User } from '@prisma/client'
import { RatedBook } from './components/rated-book'
import { usePathname, useSearchParams } from 'next/navigation'

export type BookDetails = BookWithAvgRating & {
  ratings: (Rating & {
    user: User
  })[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
  avgRating: {
    rate: number
  }
}

export interface RatingModalProps {
  bookId: string
  children: ReactNode
}

export function RatingModal({ bookId, children }: RatingModalProps) {
  const [open, setOpen] = useState(false)
  const [isUserRated, setIsUserRated] = useState<boolean>()
  const [openRateBox, setOpenRateBox] = useState(false)
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [book, setBook] = useState<BookDetails>()

  const { data: session } = useSession()

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  function handleRateBook() {
    if (session) {
      setOpenRateBox((prevState) => !prevState)
    } else {
      setOpenLoginModal(true)
    }
  }

  async function getBookDetails(bookId?: string) {
    const response = await api(`/books/details/${bookId}`)

    const { book } = await response.json()

    setBook(book)
  }

  useEffect(() => {
    if (open) {
      getBookDetails(bookId)

      const isUserRated = !!book?.ratings.find((rating) =>
        rating.user_id.includes(String(session?.user.id)),
      )

      setIsUserRated(isUserRated)
    }
  }, [bookId, open])

  useEffect(() => {
    if (searchParams.get('book') === bookId) {
      setOpen(true)
    }
  }, [bookId, searchParams])

  const onOpenChange = (open: boolean) => {
    if (open) {
      window.history.pushState(
        null,
        '',
        pathname + '?' + createQueryString('book', bookId),
      )
    } else {
      window.history.pushState(null, '', '/explore')
    }

    setOpen(open)
  }

  const sortedRatingsByDate = book?.ratings?.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-black/60" />
        <Dialog.Content className="fixed right-0 top-0 z-30 h-full w-ratingModal overflow-auto bg-gray-800 px-12 py-16 shadow-ratingModal">
          <div className="flex flex-col gap-10">
            {book ? (
              <RatedBook book={book} />
            ) : (
              <div className="h-[410px] animate-pulse rounded-md bg-gray-700 px-8 pb-4 pt-6" />
            )}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-sm text-gray-200">Ratings</h4>
                {!isUserRated && (
                  <Button title="Rate" onClick={handleRateBook} />
                )}
              </div>
              {openRateBox && (
                <RatingBox
                  session={session}
                  onCancel={() => setOpenRateBox(false)}
                />
              )}
              <div className="space-y-3">
                {book &&
                  sortedRatingsByDate?.map((rating) => {
                    return (
                      <RatingComment
                        key={rating.id}
                        rating={rating}
                        session={session}
                      />
                    )
                  })}
              </div>
            </div>
          </div>
          <Dialog.Close className="cursor-pointer">
            <X className="absolute right-12 top-6 size-6 text-gray-400" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
