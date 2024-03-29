import React, {FC} from "react"
import style from './Footer.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss"
import {ContactButtonGroup} from "../ContactButtonGroup/ContactButtonGroup"

export const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div>
                    <p className={style.title}>All Rights Reserved. Victoria Petuhova.</p>
                    <p className={style.title}>Belarus, Minsk</p>
                </div>

                <ContactButtonGroup/>
            </div>
        </footer>
    )
}
