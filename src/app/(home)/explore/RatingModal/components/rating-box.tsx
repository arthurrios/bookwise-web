import { Avatar } from '@/app/components/avatar'
import { IconButton } from '@/app/components/icon-button'
import { Rating } from '@/app/components/rating'
import { TextArea } from '@/app/components/text-area'
import { Check, X } from '@phosphor-icons/react/dist/ssr'
import { Session } from 'next-auth'
import { useState } from 'react'

export interface RatingBoxProps {
  session: Session | null
  onCancel: () => void
}

export function RatingBox({ session, onCancel }: RatingBoxProps) {
  const [currentRate, setCurrentRate] = useState(0)
  const [description, setDescription] = useState('')

  const submitDisabled = !description.trim() || !currentRate

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
      <div className="w-full">
        <TextArea
          placeholder="Write your rating"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <div className="mt-3 flex items-center justify-end space-x-2">
          <IconButton type="button" icon={X} onClick={onCancel} />
          <IconButton
            type="submit"
            icon={Check}
            variant="secondary"
            disabled={submitDisabled}
          />
        </div>
      </div>
    </div>
  )
}
