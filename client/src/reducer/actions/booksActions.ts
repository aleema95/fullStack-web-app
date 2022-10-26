import axios from 'axios'
import { getAllBooks } from '../reducers/books/booksSlice'

export const ActionGetAllBooks = () => (dispatch: any) => {
  axios.get('http://localhost:3005/books')
    .then((res) => {
      dispatch(getAllBooks(res.data))
    })
    .catch( e => console.error(e));
}