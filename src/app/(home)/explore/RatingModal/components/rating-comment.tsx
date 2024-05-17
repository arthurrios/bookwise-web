import { Avatar } from '@/app/components/avatar'
import { Rating } from '@/app/components/rating'
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
  // user: {
  //   name: string
  //   avatarUrl: string
  // }
  // created_at: string
  // rate: number
  // description: string
}

export function RatingComment({ variant }: RatingCommentProps) {
  const { container } = comment({ variant })

  return (
    <div className={container()}>
      <div className="flex gap-4">
        <Avatar
          src="https://github.com/arthurrios.png"
          size="md"
          alt="User photo"
        />
        <div className="flex-1">
          <h1 className="font-bold leading-short text-gray-100">Arthur Rios</h1>
          <span className="text-sm text-gray-400">2 days ago</span>
        </div>
        <Rating rate={4} />
      </div>
      <p className="mt-5 text-sm text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
        voluptates dolor sit quis laboriosam dicta sunt odio deleniti animi
        fugiat suscipit ex deserunt, harum magni molestias a itaque illum ullam?
      </p>
    </div>
  )
}
