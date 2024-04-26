import { LinkButton } from '@/app/components/link-button'
import { FeaturedBookCard } from '../components/featured-book-card'
import { UserBookCard } from '../components/user-book-card'
import { SmallBookCard } from '../components/small-book-card'
import { api } from '@/data/api'
import { RatingDTO } from '@/data/types/ratings'

async function getLatestRatings(): Promise<RatingDTO[]> {
  const response = await api('/ratings/latest')

  const { ratings } = await response.json()

  return ratings
}

export default async function Home() {
  const ratings = await getLatestRatings()

  console.log(ratings)

  return (
    <div className="pb-12 pl-18">
      <div className="h-full max-w-main flex-1">
        <div className="flex gap-16">
          <div>
            <div className="mb-4 flex min-w-mainHome items-center justify-between">
              <span className="text-sm text-gray-100">Your last reading</span>
              <LinkButton
                variant="forward"
                href="/profile"
                title="See all"
                color="purple"
              />
            </div>
            <FeaturedBookCard />
            <div className="mt-10">
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
              <SmallBookCard />
              <SmallBookCard />
              <SmallBookCard />
              <SmallBookCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
