import React from "react";
import style from './Project.module.scss';
import {BsArrowRight} from "@react-icons/all-files/bs/BsArrowRight";

type ProjectPropsType = {
    title: string
    titleDescription: string
    style: {backgroundImage: string}
}
function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <a href='#' className={style.link}>Demo</a>
            </div>

            <div className={style.projectInfo}>
                <h4 className={style.projectTitle}>{props.title}</h4>
                <span className={style.titleDescription}>{props.titleDescription}</span>
                <div className={style.codeContainer}>
                    <a href='#' className={style.link}>View code</a>
                    <BsArrowRight className={style.icon}/>
                </div>
            </div>

        </div>
    );
}

export default Project;