import React, {FC} from "react"
import style from './Project.module.scss'
import {BsArrowRight} from "@react-icons/all-files/bs/BsArrowRight"
import {Fade} from "react-awesome-reveal"

type ProjectPropsType = {
    title: string
    titleDescription: string
    style: {backgroundImage: string}
    demoLink: string
    codeLink: string
}
export const Project: FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <Fade>
            <div className={style.project}>
                <div className={style.imgContainer} style={props.style}>
                    <a href={props.demoLink} className={style.link}>Demo</a>
                </div>

                <div className={style.projectInfo}>
                    <h4 className={style.projectTitle}>{props.title}</h4>
                    <span className={style.titleDescription}>{props.titleDescription}</span>
                    <div className={style.codeContainer}>
                        <a href={props.codeLink} className={style.link}>View code</a>
                        <BsArrowRight className={style.icon}/>
                    </div>
                </div>

            </div>
        </Fade>
    )
}