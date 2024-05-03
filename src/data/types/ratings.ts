import { BookDTO } from './book'
import { UserDTO } from './user'

export interface RatingDTO {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
  book: BookDTO
  user: UserDTO
}

export interface LatestUserRating extends RatingDTO {
  book: BookDTO
}

export interface AlternativeRatingDTO {
  id: string
  rate: number
  description: string
  created_at: Date
  book_id: string
  user_id: string
}
