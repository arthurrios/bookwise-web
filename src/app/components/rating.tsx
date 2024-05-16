import { Star, StarHalf } from '@phosphor-icons/react'

import { VariantProps, tv } from 'tailwind-variants'

const ratingComponent = tv({
  slots: {
    container: 'flex gap-1',
    icon: 'size-4 text-purple-100',
  },

  variants: {
    variant: {
      md: {
        icon: 'size-5',
      },
      sm: {
        icon: 'size-4',
      },
    },
  },

  defaultVariants: {
    variant: 'sm',
  },
})

// export type AvatarProps = ImageProps & VariantProps<typeof imageComponent>

export interface RatingProps extends VariantProps<typeof ratingComponent> {
  rate: number
}

export function Rating({ rate, variant }: RatingProps) {
  const { container, icon } = ratingComponent({ variant })
  // Calculate the number of filled stars
  const filledStars = Math.floor(rate)
  // Calculate if the rating is closer to the next half step
  const isCloseToNextHalfStep = rate - filledStars >= 0.5
  // Calculate the total number of stars to render
  const totalStars = 5
  // Create an array to store the stars
  const stars = []

  // Fill the array with filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(<Star key={i} weight="fill" className={icon()} />)
  }

  // Add a half-filled star if necessary
  if (isCloseToNextHalfStep) {
    stars.push(<StarHalf key={filledStars} weight="fill" className={icon()} />)
  }

  // Fill the rest with outlined stars
  for (let i = stars.length; i < totalStars; i++) {
    stars.push(<Star key={i} className={icon()} />)
  }

  return <div className={container()}>{stars}</div>
}
