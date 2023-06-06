import React, {FC} from "react"
import style from './Nav.module.scss'
import {useLocation} from "react-router-dom"
import {Links} from "../../Common/components/Links/Links"

export const Nav: FC = () => {
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <div className={style.nav}>
            <Links currentPath={currentPath}/>
        </div>
    )
}

