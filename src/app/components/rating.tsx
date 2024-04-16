import { Star, StarHalf } from '@phosphor-icons/react'

export interface RatingProps {
  rate: number
}

export function Rating({ rate }: RatingProps) {
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
    stars.push(<Star key={i} weight="fill" className="text-purple-100" />)
  }

  // const HalfFilledStar = () => {
  //   return (
  //     <div className="relative size-4">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="8"
  //         height="16"
  //         fill="#8381D9"
  //         viewBox="0 0 128 256"
  //       >
  //         <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
  //       </svg>

  //       <Star className="absolute right-0 top-0 z-10 h-full object-cover text-purple-100" />
  //     </div>
  //   )
  // }

  // Add a half-filled star if necessary
  if (isCloseToNextHalfStep) {
    stars.push(
      <StarHalf key={filledStars} weight="fill" className="text-purple-100" />,
    )
  }

  // Fill the rest with outlined stars
  for (let i = stars.length; i < totalStars; i++) {
    stars.push(<Star key={i} className="text-purple-100" />)
  }

  return <div className="flex gap-1">{stars}</div>
}
