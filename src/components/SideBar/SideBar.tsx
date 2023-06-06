import React, {FC} from "react"
import style from './SideBar.module.scss'
import {IoCloseSharp} from '@react-icons/all-files/io5/IoCloseSharp'
import {useLocation} from "react-router-dom"
import {Links} from "../Common/components/Links/Links"
import s from '../Header/Nav/Nav.module.scss'

type SideBarPropsType = {
    handleClose: () => void
    open: boolean
}

export const SideBar: FC<SideBarPropsType> = ({handleClose, open}) => {
    const location = useLocation()
    const currentPath = location.pathname

    const sidebarOpen = style.sidebar + (open ? ' ' + style.open : '')
    return (
        <>
            {open && <div className={style.background} onClick={handleClose}/>}


            <aside className={sidebarOpen}>
                <IoCloseSharp onClick={handleClose} className={style.closeIcon}/>
                <nav className={`${s.nav} ${style.nav}`}>
                    <Links currentPath={currentPath} handleClose={handleClose}/>
                </nav>
            </aside>
        </>
    )
}
