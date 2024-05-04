import { LinkButton } from '@/app/components/link-button'
import { FeaturedBookCard } from '../components/featured-book-card'
import { UserBookCard } from '../components/user-book-card'
import { SmallBookCard } from '../components/small-book-card'
import { api } from '@/data/api'
import { LatestUserRating, RatingDTO } from '@/data/types/ratings'
import { BookWithAvgRating } from '@/data/types/book'
import { headers } from 'next/headers'

async function getLatestRatings(): Promise<RatingDTO[]> {
  const response = await api('/ratings/latest')

  const { ratings } = await response.json()

  return ratings
}

async function getBooksWithAvgRating(): Promise<BookWithAvgRating[]> {
  const response = await api('/books/popular')

  const { books } = await response.json()

  return books
}

async function getLatestUserRating(): Promise<LatestUserRating> {
  const response = await api('/ratings/user-latest', {
    method: 'GET',
    headers: headers(),
  })

  const { rating } = await response.json()

  return rating
}

export default async function Home() {
  const ratings = await getLatestRatings()
  const books = await getBooksWithAvgRating()
  const latestUserRating = await getLatestUserRating()

  return (
    <div className="pb-12 pl-18">
      <div className="h-full max-w-main flex-1">
        <div className="flex gap-16">
          <div>
            {latestUserRating && (
              <>
                <div className="mb-4 flex min-w-mainHome items-center justify-between">
                  <span className="text-sm text-gray-100">
                    Your last reading
                  </span>
                  <LinkButton
                    variant="forward"
                    href="/profile"
                    title="See all"
                    color="purple"
                  />
                </div>
                <FeaturedBookCard rating={latestUserRating} />
              </>
            )}
            <div className={latestUserRating ? 'mt-10' : ''}>
              <span className="text-sm text-gray-100">Recent ratings</span>
              <div className="mt-4 space-y-3">
                {ratings.map((rating) => {
                  return <UserBookCard key={rating.id} rating={rating} />
                })}
              </div>
            </div>
          </div>
          <div className="w-full max-w-homePopularSection">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-gray-100">Popular books</span>
              <LinkButton
                variant="forward"
                href="/explore"
                title="See all"
                color="purple"
              />
            </div>
            <div className="space-y-3">
              {books.map((book) => {
                return <SmallBookCard key={book.id} book={book} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
