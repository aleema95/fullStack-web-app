import s from './Reviewcard.module.css'

export default function Reviewcard() {
  return (
    <div className={s.cardContainer}>
      <h2>Book Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className={s.ratingAndNameContainer}>
        <h3>4.5/5</h3>
        <h3>- Alejandro Manouellian</h3>
      </div>
    </div>
  )
}
