import React from "react";
import style from './ContactButtonGroup.module.scss'
import {FiMail} from "@react-icons/all-files/fi/FiMail";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaTelegram} from "@react-icons/all-files/fa/FaTelegram";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";


function ContactButtonGroup() {
    return (
        <div className={style.contactButtonGroup}>
            <a href=''>
                <AiFillLinkedin className={style.icon}/>
            </a>
            <a href=''>
                <FiMail className={style.icon}/>
            </a>
            <a href=''>
                <FaGithub className={style.icon}/>
            </a>
            <a href=''>
                <FaTelegram className={style.icon}/>
            </a>
            <a href=''>
                <SiCodewars className={style.icon}/>
            </a>

        </div>
    )
}

export default ContactButtonGroup