'use client'

import { SmallBookCard } from '@/app/components/small-book-card'
import { Tag } from '@/app/components/tag'
import { useEffect, useState } from 'react'
import { api } from '@/data/api'
import { BookWithAvgRating } from '@/data/types/book'
import { Categories } from '@/data/types/categories'
import { useSearch } from '@/contexts/explore-search-context'
import { RatingModal } from './RatingModal'

export default function Explore() {
  const [books, setBooks] = useState<BookWithAvgRating[]>([])
  const [categories, setCategories] = useState<Categories[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const { search } = useSearch()

  function handleChangeFilter(selectedCategory: string) {
    if (selectedCategories) {
      if (selectedCategories.includes(selectedCategory)) {
        setSelectedCategories((prevState) =>
          prevState.filter((category) => category !== selectedCategory),
        )
      } else {
        setSelectedCategories((prevState) => [...prevState, selectedCategory])
      }
    }
  }

  async function getBooksWithAvgRating(categoriesIds?: string[]) {
    if (categoriesIds) {
      const categoriesParams = categoriesIds.join('/')

      const response = await api(`/books/${categoriesParams}`)

      const { books } = await response.json()

      setBooks(books)
    }
  }

  async function getCategories() {
    const response = await api('/books/categories')

    const { categories } = await response.json()

    setCategories(categories)
  }

  useEffect(() => {
    getBooksWithAvgRating(selectedCategories)
    getCategories()
  }, [selectedCategories])

  const filteredBooks = books.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div className="pb-12 pl-18 pr-24 pt-3">
      <div className="h-full min-w-explore">
        <div className="mb-12 flex flex-wrap items-center gap-3">
          <Tag
            title="All"
            isSelected={selectedCategories.length === 0}
            onClick={() => setSelectedCategories([])}
          />
          {categories.map((category) => {
            return (
              <Tag
                key={category.id}
                title={category.name}
                isSelected={selectedCategories.includes(category.id)}
                onClick={() => handleChangeFilter(category.id)}
              />
            )
          })}
        </div>
        <div className="grid grid-cols-3 gap-5 2xl:grid-cols-4">
          {filteredBooks.map((book) => {
            return (
              <RatingModal key={book.id} bookId={book.id}>
                <SmallBookCard
                  variant="explore"
                  book={book}
                  alreadyRead={book.alreadyRead}
                />
              </RatingModal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
