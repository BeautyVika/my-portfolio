import React from "react"
import style from './Header.module.scss'
import ContactButtonGroup from "../ContactButtonGroup/ContactButtonGroup"
import Nav from "./Nav/Nav"

function Header() {
    return (
        <div className={style.header}>
            <Nav/>
            <ContactButtonGroup/>
        </div>
    )
}

export default Header
