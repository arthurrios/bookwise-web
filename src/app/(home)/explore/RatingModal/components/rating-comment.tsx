import { Avatar } from '@/app/components/avatar'
import { Rating } from '@/app/components/rating'
import { Rating as RatingProps, User } from '@prisma/client'
import { formatDistanceToNow } from 'date-fns'
import { Session } from 'next-auth'
import { VariantProps, tv } from 'tailwind-variants'

const comment = tv({
  slots: {
    container: 'rounded-[8px] bg-gray-700 p-6',
  },

  variants: {
    variant: {
      userRatedComment: {
        container: 'bg-gray-600',
      },
    },
  },
})

export interface RatingCommentProps extends VariantProps<typeof comment> {
  rating: RatingProps & {
    user: User
  }
  session: Session | null
}

export function RatingComment({
  variant,
  rating,
  session,
}: RatingCommentProps) {
  const { container } = comment({ variant })

  const isOwner = session?.user.id === rating.user_id

  return (
    <div
      className={
        isOwner ? container({ variant: 'userRatedComment' }) : container()
      }
    >
      <div className="flex gap-4">
        <Avatar
          src={rating.user?.avatar_url ?? ''}
          size="md"
          alt={`${rating.user.name} photo`}
        />
        <div className="flex-1">
          <h1 className="font-bold leading-short text-gray-100">
            {rating.user.name}
          </h1>
          <span className="text-sm text-gray-400">
            {formatDistanceToNow(rating.user.created_at, {
              addSuffix: true,
            })}
          </span>
        </div>
        <Rating rate={rating.rate} />
      </div>
      <p className="mt-5 text-sm text-gray-300">{rating.description}</p>
    </div>
  )
}
