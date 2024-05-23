import Image from 'next/image'

import { Rating } from '@/app/components/rating'
import { BookOpen, BookmarkSimple } from '@phosphor-icons/react/dist/ssr'
import { BookItem } from './book-item'
import { BookDetails } from '..'

export interface RatedBookProps {
  book: BookDetails
}

export function RatedBook({ book }: RatedBookProps) {
  const ratingsLength = book?.ratings?.length ?? 0

  const categories =
    book?.categories?.map((x) => x.category.name).join(', ') ?? ''

  return (
    <div className="space-y-10 rounded-md bg-gray-700 px-8 pb-4 pt-6">
      <div className="flex gap-8">
        <Image
          src={book.cover_url}
          height={242}
          width={171.65}
          className="h-full rounded-md"
          alt={`${book.name} book image`}
        />
        <div className="flex flex-1 flex-col justify-between">
          <div className="space-y-2">
            <h1 className="text-lg font-bold leading-short">{book.name}</h1>
            <h2 className="text-gray-300">{book.author}</h2>
          </div>
          <div className="space-y-1">
            <Rating rate={book.avgRating.rate} variant="md" />
            <p className="text-sm text-gray-400">
              {ratingsLength} {ratingsLength === 1 ? 'rating' : 'ratings'}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-14 border-t border-gray-600 py-6">
        <BookItem
          icon={BookmarkSimple}
          subdata={categories.length === 1 ? 'Category' : 'Categories'}
          data={categories}
        />
        <BookItem icon={BookOpen} subdata="Pages" data={book.total_pages} />
      </div>
    </div>
  )
}
