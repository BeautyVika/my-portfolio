import React, {FC} from "react"
import style from './Footer.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss"
import {ContactButtonGroup} from "../ContactButtonGroup/ContactButtonGroup"
import {BsArrowRight} from "@react-icons/all-files/bs/BsArrowRight"

export const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div>
                    <p className={style.title}>All Rights Reserved. Victoria Petuhova.</p>
                    <p className={style.title}>Belarus, Minsk</p>
                </div>

                <div className={style.find}>
                    <p className={style.title}>Find me</p>
                    <BsArrowRight className={style.row}/>
                    <ContactButtonGroup/>
                </div>

            </div>
        </footer>
    )
}
