'use client'

import { SmallBookCard } from '@/app/components/small-book-card'
import { Tag } from '@/app/components/tag'
import { useState } from 'react'

export default function Explore() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  function handleChangeFilter(selectedCategory: string) {
    if (selectedCategories.includes(selectedCategory)) {
      setSelectedCategories((prevState) =>
        prevState.filter((category) => category !== selectedCategory),
      )
    } else {
      setSelectedCategories((prevState) => [...prevState, selectedCategory])
    }
  }

  return (
    <div className="pb-12 pl-18 pr-24 pt-3">
      <div className="h-full min-w-explore">
        <div className="mb-12 flex flex-wrap items-center gap-3">
          <Tag
            title="All"
            isSelected={selectedCategories.length === 0}
            onClick={() => setSelectedCategories([])}
          />
          {Array.from({ length: 12 }).map((_, i) => {
            return (
              <Tag
                key={i}
                title="Programming"
                isSelected={selectedCategories.includes(String(i))}
                onClick={() => handleChangeFilter(String(i))}
              />
            )
          })}
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
