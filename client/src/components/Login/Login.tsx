
import s from './Login.module.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className={s.mainContainer}>
      <div className={s.leftSide}>
        <Link to={'/'} className={s.backBtn}><h1>{'<'} Back</h1></Link>
        <div className={s.formAndTitleContainer}>
          <h1>Log In</h1>
          <div className={s.logInFormContainer}>
            <form className={s.form}>
              <div className={s.inputLabelContainer}>
                <label>Username</label>
                <input type="text" />
              </div>
              <div className={s.inputLabelContainer}>
                <label>Password</label>
                <input type="password" />
              </div>
              <input className={s.submitBtn} type="submit" value="Log in" />
            </form>
          </div>
        </div>
      </div>
      <div className={s.rightSide}>
        <h1>asd</h1>
      </div>
    </div>
  )
}
