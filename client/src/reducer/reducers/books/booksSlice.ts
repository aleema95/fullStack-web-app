import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '../../../Types'

interface InitialState {
  books: Book[]
}

const initialState: InitialState = {
  books: []
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getAllBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload
    },
  }
})

export const { getAllBooks } = booksSlice.actions