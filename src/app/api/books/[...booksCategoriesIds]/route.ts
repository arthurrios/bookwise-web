/* eslint-disable @typescript-eslint/no-unused-vars */
import { BookWithRatings } from '@/data/types/book'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

export async function GET(
  req: Request,
  { params }: { params: { booksCategoriesIds: string[] } },
) {
  const categoryIds = z.array(z.string()).parse(params.booksCategoriesIds)

  let books: BookWithRatings[] = []

  if (categoryIds.length !== 0) {
    books = await prisma.book.findMany({
      where: {
        categories: {
          some: {
            categoryId: {
              in: categoryIds,
            },
          },
        },
      },
      include: {
        ratings: true,
      },
    })
  } else {
    books = await prisma.book.findMany({
      include: {
        ratings: true,
      },
    })
  }

  const booksAvgRating = await prisma.rating.groupBy({
    by: 'book_id',
    _avg: {
      rate: true,
    },
  })

  let userBooksIds: string[] = []

  const session = await auth()

  if (session) {
    const userBooks = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            user_id: String(session.user.id),
          },
        },
      },
    })

    userBooksIds = userBooks.map((book) => book.id)
  }

  const booksWithAvgRating = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id,
    )
    const { ratings, ...bookInfo } = book

    return {
      ...book,
      ratings: ratings.length,
      avgRating: bookAvgRating?._avg.rate,
      alreadyRead: userBooksIds.includes(book.id),
    }
  })

  return Response.json({ books: booksWithAvgRating })
}
