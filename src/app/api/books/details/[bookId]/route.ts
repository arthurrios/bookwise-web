/* eslint-disable @typescript-eslint/no-unused-vars */
import { BookWithRatings } from '@/data/types/book'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

export async function GET(
  req: Request,
  { params }: { params: { bookId: string } },
) {
  const bookId = z.string().parse(params.bookId)

  const book = await prisma.book.findUnique({
    where: { id: bookId },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: {
        include: {
          user: true,
        },
      },
    },
  })

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: { book_id: bookId },
    _avg: { rate: true },
  })

  const bookWithAvgRating = {
    ...book,
    avgRating: booksAvgRating[0]?._avg ?? 0,
  }

  return Response.json({ book: bookWithAvgRating })
}
