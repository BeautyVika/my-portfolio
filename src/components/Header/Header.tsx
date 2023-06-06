import React, {FC} from "react"
import style from './Header.module.scss'
import ContactButtonGroup from "../ContactButtonGroup/ContactButtonGroup"
import {Nav} from "./Nav/Nav"
import {GiHamburgerMenu} from '@react-icons/all-files/gi/GiHamburgerMenu'

type HeaderPropsType = {
    handleOpen: () => void
}

export const Header: FC<HeaderPropsType> = ({handleOpen}) => {

    return (
        <div className={style.header}>
            <div className={style.desktop}>
                <Nav/>
            </div>

            <div className={style.mobile}>
                <GiHamburgerMenu onClick={handleOpen} className={style.burger}/>
            </div>

            <ContactButtonGroup/>
        </div>
    )
}
