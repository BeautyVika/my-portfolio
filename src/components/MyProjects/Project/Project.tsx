import React from "react";
import style from './Project.module.scss';

type ProjectPropsType = {
    title: string
    titleDescription: string
    style: {backgroundImage: string}
}
function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <a href='#' className={style.link}>Посмотреть</a>
            </div>

            <div className={style.projectInfo}>
                <h4 className={style.projectTitle}>{props.title}</h4>
                <span className={style.titleDescription}>{props.titleDescription}</span>
            </div>

        </div>
    );
}

export default Project;