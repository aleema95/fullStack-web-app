import s from './Contact.module.css'
import { ContactProps } from '../../../Types'

export default function Contact({ contactName, iconName, redirectUrl }: ContactProps) {
  return (
      <a className={s.iconAndNameContainer} href={redirectUrl}>
        <div className={s.iconContainer}>
          <span className={`${s[`${iconName}`]} ${s.svgIcon}`}></span>
        </div>
        <h3 className={s.contactName}>{contactName}</h3>
      </a>
  )
}
