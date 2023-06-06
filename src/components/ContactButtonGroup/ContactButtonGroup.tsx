import React, {FC} from "react"
import style from './ContactButtonGroup.module.scss'
import {FiMail} from "@react-icons/all-files/fi/FiMail"
import {FaGithub} from "@react-icons/all-files/fa/FaGithub"
import {FaTelegram} from "@react-icons/all-files/fa/FaTelegram"
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars"
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin"
import {LINKS, PATH} from "../Common/constants/constants"
import {NavLink} from "react-router-dom";

export const ContactButtonGroup: FC = () => {
    return (
        <div className={style.contactButtonGroup}>
            {/*<a href=''>*/}
            {/*    <AiFillLinkedin className={style.icon}/>*/}
            {/*</a>*/}
            <NavLink to={PATH.CONTACT}>
                <FiMail className={style.icon}/>
            </NavLink>
            <a href={LINKS.Git}>
                <FaGithub className={style.icon}/>
            </a>
            <a href={LINKS.Telegram}>
                <FaTelegram className={style.icon}/>
            </a>
            <a href={LINKS.Codewars}>
                <SiCodewars className={style.icon}/>
            </a>

        </div>
    )
}