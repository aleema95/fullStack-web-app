import s from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {


  return (
    <div className={s.mainContainer}>
      <h1>Bookling</h1>
      <div className={s.navItemContainer}>
        <h1>Home</h1>
        <h1>Library</h1>
      </div>
       <Link className={s.navItem} to={'/login'}><h1>Log in</h1></Link>
    </div>
  )
}
