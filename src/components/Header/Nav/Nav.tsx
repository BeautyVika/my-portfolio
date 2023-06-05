import React from "react"
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom"
import {PATH} from "../../Common/constants/constants"
import s from './Nav.module.scss'

function Nav() {
    return (
        <div className={style.nav}>
            <NavLink to={PATH.MAIN} className={({isActive}) => isActive ? s.active : ''}>Home</NavLink>
            <NavLink to={PATH.SKILLS} className={({isActive}) => isActive ? s.active : ''}>Skills</NavLink>
            <NavLink to={PATH.PROJECTS} className={({isActive}) => isActive ? s.active : ''}>Projects</NavLink>
            <NavLink to={PATH.CONTACT} className={({isActive}) => isActive ? s.active : ''}>Contacts</NavLink>
        </div>
    )
}

export default Nav
