import { SmallBookCard } from '@/app/components/small-book-card'
import { Tag } from '@/app/components/tag'

export default function Explore() {
  return (
    <div className="pb-12 pl-18 pr-24 pt-3">
      <div className="h-full min-w-explore">
        <div className="mb-12 flex flex-wrap items-center gap-3">
          <Tag title="All" />
          <Tag title="Programming" isSelected />
          <Tag title="Education" />
          <Tag title="Fantasy" />
          <Tag title="Fiction" isSelected />
          <Tag title="Horror" isSelected />
          <Tag title="Education" />
          <Tag title="Fantasy" />
          <Tag title="Fiction" />
          <Tag title="Horror" isSelected />
          <Tag title="Education" />
          <Tag title="Fantasy" />
          <Tag title="Fiction" isSelected />
          <Tag title="Horror" />
        </div>
        <div className="grid grid-cols-3 gap-5 2xl:grid-cols-4">
          {Array.from({ length: 22 }).map((_, i) => {
            return <SmallBookCard key={i} isRateByUser variant="explore" />
          })}
        </div>
      </div>
    </div>
  )
}
