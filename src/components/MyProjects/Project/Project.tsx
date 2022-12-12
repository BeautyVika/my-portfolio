import React from "react";
import style from './Project.module.css';

type ProjectPropsType = {
    title: string
    titleDescription: string
}
function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a href='#' className={style.btn}>Посмотреть</a>
            </div>

                <span className={style.title}>{props.title}</span>
                <span className={style.title}>{props.titleDescription}</span>

        </div>
    );
}

export default Project;