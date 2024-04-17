import { SmallBookCard } from '@/app/components/small-book-card'

export default function Explore() {
  return (
    <div className="pb-12 pl-18 pr-24">
      <div className="min-w-explore h-full">
        <div className="grid grid-cols-3 gap-5 2xl:grid-cols-4">
          {Array.from({ length: 22 }).map((_, i) => {
            return <SmallBookCard key={i} isRateByUser variant="explore" />
          })}
        </div>
      </div>
    </div>
  )
}
