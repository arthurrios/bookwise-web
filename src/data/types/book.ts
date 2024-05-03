import { AlternativeRatingDTO } from './ratings'

export interface BookDTO {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
}

export interface BookWithAvgRating extends BookDTO {
  avgRating: number
  alreadyRead: boolean
}

export interface BookWithRatings {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
  ratings: AlternativeRatingDTO[]
}
