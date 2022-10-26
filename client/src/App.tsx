import './App.css';
import { MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from './reducer/store/store';
import { ActionGetAllBooks } from './reducer/actions/booksActions'
import { useAppDispatch } from './reducer/hooks'
 
function App() {
  const dispatch = useAppDispatch()
  const books = useSelector(getBooks)

  const getAllBooksOnClick = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement

    dispatch(ActionGetAllBooks())
  }

  return (
      <div>
        <div>
          {books.map( b => {
            return (
              <h1>{b.author}</h1>
            )
          })}
        </div>
        <button onClick={getAllBooksOnClick}>Traer Libros</button>
      </div>
  );
}

export default App;
