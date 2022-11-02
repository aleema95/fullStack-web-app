import s from './Home.module.css'
// import { MouseEvent } from 'react'
// import { useSelector } from 'react-redux'
// import { getBooks } from '../../reducer/store/store';
// import { ActionGetAllBooks } from '../../reducer/actions/booksActions'
// import { useAppDispatch } from '../../reducer/hooks'
import Navbar from '../Navbar/Navbar';

export default function Home() {
  // const dispatch = useAppDispatch()
  // const books = useSelector(getBooks)

  // const getAllBooksOnClick = (e: MouseEvent) => {
  //   // const target = e.target as HTMLButtonElement
  //   dispatch(ActionGetAllBooks())
  // }

  return (
    <div>
      <div className={s.mainImg}>
        <Navbar />
        <div className={s.titlesContainer}>
          <div className={s.mainTitleContainer}>
            <h1 className={s.mainTitle}>Find the book you want in our library.</h1>
          </div>
          <div className={s.subTitleContainer}>
            <h2 className={s.subTitle}>We have the biggest review library on the internet.</h2>
          </div>
        </div>
        <div className={s.blurRectangle}>
          <h2 className={s.rectangleText}>Books from all over the world, in any language.</h2>
        </div>
        <div className={s.middleImg}></div>
      </div>
      <div className={s.bottomPlaceholder}>
      
      </div>
    </div>
  )
}
