import React, {FC} from "react"
import style from './Title.module.scss'
import {Fade} from "react-awesome-reveal"

type TitlePropsType = {
    mainTitle: string,
    title: string
}

export const Title: FC<TitlePropsType> = ({title, mainTitle}) => {
    return (
        <Fade cascade>
            <div className={style.containerTitle}>
                <h2>{mainTitle}</h2>
                <p className={style.titleProjects}>
                    {title}
                    <span className={style.line}></span>
                </p>
            </div>
        </Fade>
    )
}
