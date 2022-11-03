import Contact from './Contact/Contact'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <section className={s.mainContainer}>
      <div className={s.nameContainer}>
        <h2>Website made by Alejandro Manouellian</h2>
      </div>
      <div className={s.contactAndTitleContainer}>
        <h2>Contact</h2>
        <div className={s.contactContainer}>
          <Contact contactName='LinkedIn' iconName='linkedinIcon' redirectUrl='https://www.linkedin.com/in/alejandro-manouellian/' />
          <Contact contactName='Github' iconName='githubIcon' redirectUrl='https://github.com/aleema95' />
          <Contact contactName='Gmail' iconName='linkedinIcon' redirectUrl='mailto:alejandro.manouellian@gmail.com' />
        </div>
      </div>
    </section>
  )
}
