import React, {FC} from "react"
import style from './Contacts.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss"
import {Title} from "../Common/components/Title/Title"
import ReactTypingEffect from "react-typing-effect"

export const Contacts: FC = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title mainTitle='Contact' title='Get in touch'/>
                <ReactTypingEffect text={'I am available for freelance work.'} className={style.text}/>
                <p className={style.text}>
                    Connect with me via phone: 8029 - 667 - 23 -75
                </p>
                <p className={style.text}>
                    Email: vikachk54@gmail.com
                </p>


                <form className={style.contactsForm}>
                    <input type="text" className={style.input} placeholder='Name'/>
                    <input type="text" className={style.input} placeholder='E-mail'/>
                    <textarea className={style.text} placeholder='Tell me more about you needs...'/>
                    <button type="submit" className={style.btn}>Send message</button>
                </form>
            </div>

        </div>
    )
}
