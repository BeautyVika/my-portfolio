import React, {FC} from "react"
import style from './Contacts.module.scss'

export const ContactForm: FC = () => {
    return (
        <>
            <form className={style.contactsForm}>
                <input type="text" className={style.input} placeholder='Name'/>
                <input type="text" className={style.input} placeholder='E-mail'/>
                <textarea className={style.text} placeholder='Tell me more about you needs...'/>
                <button type="submit" className={style.btn}>Send message</button>
            </form>
        </>
    )
}
