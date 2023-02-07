import React from "react";
import style from './ContactButtonGroup.module.css'
import {FiMail} from "@react-icons/all-files/fi/FiMail";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaTelegram} from "@react-icons/all-files/fa/FaTelegram";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";


function ContactButtonGroup() {
    return (
        <div className={style.contactButtonGroup}>
            <AiFillLinkedin className={style.icon}/>
            <FiMail className={style.icon}/>
            <FaGithub className={style.icon}/>
            <FaTelegram className={style.icon}/>
            <SiCodewars className={style.icon}/>


        </div>
    )
}

export default ContactButtonGroup