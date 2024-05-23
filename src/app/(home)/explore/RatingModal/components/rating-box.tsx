import { Avatar } from '@/app/components/avatar'
import { Rating } from '@/app/components/rating'
import { TextArea } from '@/app/components/text-area'
import { Session } from 'next-auth'
import { useState } from 'react'

export interface RatingBoxProps {
  session: Session | null
}

export function RatingBox({ session }: RatingBoxProps) {
  const [currentRate, setCurrentRate] = useState(0)
  const [description, setDescription] = useState('')

  return (
    <div className="mb-3 space-y-6 rounded-[8px] bg-gray-700 p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Avatar
            src={session?.user?.avatar_url ?? ''}
            alt={`${session?.user.name} profile photo`}
          />
          <h1 className="flex-1 font-bold leading-short">
            {session?.user.name}
          </h1>
        </div>
        <Rating rate={currentRate} setRating={setCurrentRate} variant="lg" />
      </div>
      <div>
        <TextArea
          placeholder="Write your rating"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
      </div>
    </div>
  )
}
