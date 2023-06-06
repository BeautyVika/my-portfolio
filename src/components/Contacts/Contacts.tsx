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

                <h3>
                    <ReactTypingEffect text={'I am available for freelance work.'}/>
                </h3>

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
