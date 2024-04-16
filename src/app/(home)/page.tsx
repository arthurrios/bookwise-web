import { LinkButton } from '@/app/components/link-button'
import { FeaturedBookCard } from '../components/featured-book-card'

export default function Home() {
  return (
    <div className="pl-18">
      <div className="h-full max-w-main flex-1">
        <div className="flex gap-16">
          <div>
            <div className="mb-4 flex min-w-mainHome items-center justify-between">
              Your last reading
              <LinkButton
                variant="forward"
                href="/profile"
                title="See all"
                color="purple"
              />
            </div>
            <FeaturedBookCard />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              Popular books
              <LinkButton
                variant="forward"
                href="/explore"
                title="See all"
                color="purple"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
