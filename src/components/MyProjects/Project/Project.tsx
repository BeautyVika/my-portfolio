import React, {FC, useState} from "react"
import style from './Project.module.scss'
import {BsArrowRight} from "@react-icons/all-files/bs/BsArrowRight"
import {Fade} from "react-awesome-reveal"

type ProjectPropsType = {
    title: string
    titleDescription?: string
    style: {backgroundImage: string}
    demoLink: string
    codeLink: string
}
export const Project: FC<ProjectPropsType> = (props: ProjectPropsType) => {
    const [visible, setVisible] = useState<boolean>(false)
    const onMouseEnterHandler = () => {
        setVisible(true)
    }
    const onMouseLeaveHandler = () => {
        setVisible(false)
    }
    return (
        <Fade>
            <div className={style.project}
                 onMouseEnter={onMouseEnterHandler}
                 onMouseLeave={onMouseLeaveHandler}>

                <div className={style.imgContainer} style={props.style}>
                    {visible && <a href={props.demoLink} className={style.link}>Demo</a>}
                </div>

                <div className={style.projectInfo}>
                    <h4 className={style.projectTitle}>{props.title}</h4>
                    {visible && <span className={style.titleDescription}>{props.titleDescription}</span>}

                    <div className={style.codeContainer}>
                        <a href={props.codeLink} className={style.link}>View code</a>
                        <BsArrowRight className={style.icon}/>
                    </div>
                </div>

            </div>
        </Fade>
    )
}