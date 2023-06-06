import React, {FC} from "react"
import style from '../../../Header/Nav/Nav.module.scss'
import {NavLink} from "react-router-dom"
import {PATH} from "../../constants/constants"

type LinksPropsType = {
    currentPath: string
    handleClose?: () => void
}

export const Links: FC<LinksPropsType> = ({currentPath,handleClose}) => {

    return (
        <>
            <NavLink to={PATH.MAIN}
                     onClick={handleClose}
                     className={currentPath === PATH.MAIN ? style.active : ''}>
                Home
            </NavLink>
            <NavLink to={PATH.SKILLS}
                     onClick={handleClose}
                     className={currentPath === PATH.SKILLS ? style.active : ''}>
                Skills
            </NavLink>
            <NavLink to={PATH.PROJECTS}
                     onClick={handleClose}
                     className={currentPath === PATH.PROJECTS ? style.active : ''}>
                Projects
            </NavLink>
            <NavLink to={PATH.CONTACT}
                     onClick={handleClose}
                     className={currentPath === PATH.CONTACT ? style.active : ''}>
                Contacts
            </NavLink>
        </>
    )
}
