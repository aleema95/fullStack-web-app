import { configureStore } from '@reduxjs/toolkit'
import { booksSlice } from '../reducers/books/booksSlice'

const store = configureStore({
  reducer: {
    books: booksSlice.reducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export const getBooks = (state: RootState) => state.books.books

export type AppDispatch = typeof store.dispatch