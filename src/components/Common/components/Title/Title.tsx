import React from "react";
import style from './Title.module.scss'

function Title(props: {mainTitle: string, title: string}) {
    return (
        <div className={style.containerTitle}>
            <h2>{props.mainTitle}</h2>
            <p className={style.titleProjects}>{props.title}</p>
        </div>

    )
}
export default Title