import React, {FC} from "react"
import style from './Contacts.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss"
import {Title} from "../Common/components/Title/Title"
import ReactTypingEffect from "react-typing-effect"
import {ContactForm} from "../Contacts/ContactForm/ContactForm"
import {AiFillPhone} from "@react-icons/all-files/ai/AiFillPhone"
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail"

export const Contacts: FC = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title mainTitle='Contact' title='Get in touch'/>
                <ReactTypingEffect text={'I am available for freelance work.'} className={style.text}/>
                <p className={style.text}>
                    Connect with me via phone: <AiFillPhone style={{color: '#20c997', fontSize: '25px'}}/> 8029 - 667 - 23 -75
                </p>
                <p className={style.text}>
                    Email: <AiOutlineMail style={{color: '#20c997', fontSize: '25px'}}/> vikachk54@gmail.com
                </p>
                <ContactForm/>
            </div>

        </div>
    )
}
