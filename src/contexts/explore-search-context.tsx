'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface SearchContextType {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

const SearchContext = createContext({} as SearchContextType)

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}
