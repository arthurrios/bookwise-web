import { Star, StarHalf } from '@phosphor-icons/react'
import { useState } from 'react'

import { VariantProps, tv } from 'tailwind-variants'

const ratingComponent = tv({
  slots: {
    container: 'flex gap-1',
    containerPointer: 'flex gap-1 cursor-pointer',
    icon: 'size-4 text-purple-100',
  },

  variants: {
    variant: {
      lg: {
        icon: 'size-7',
      },
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
  setRating?: (rate: number) => void
}

export function Rating({ rate, variant, setRating }: RatingProps) {
  const [previewValue, setPreviewValue] = useState(0)
  const isEditable = !!setRating

  const handleMouseEnter = (value: number) => {
    if (isEditable) setPreviewValue(value)
  }

  const handleMouseLeave = () => {
    if (isEditable) setPreviewValue(rate)
  }

  const handleSetValue = () => {
    if (isEditable) setRating(previewValue)
  }

  const ratingValue = isEditable ? previewValue : rate

  const { container, containerPointer, icon } = ratingComponent({ variant })
  // Calculate the number of filled stars
  const filledStars = Math.floor(ratingValue)
  // Calculate if the rating is closer to the next half step
  const isCloseToNextHalfStep = ratingValue - filledStars >= 0.5
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

  return (
    <>
      {isEditable ? (
        <div className={containerPointer()}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={`star-${i}`}
              weight={i + 1 <= ratingValue ? 'fill' : 'regular'}
              className={icon()}
              onMouseEnter={() => handleMouseEnter(i + 1)}
              onMouseLeave={handleMouseLeave}
              onClick={handleSetValue}
            />
          ))}
        </div>
      ) : (
        <div className={container()}>{stars}</div>
      )}
    </>
  )
}
