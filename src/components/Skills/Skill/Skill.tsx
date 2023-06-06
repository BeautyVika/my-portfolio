import React, {FC} from "react"
import style from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    icon: any
}
export const Skill: FC<SkillPropsType> = ({title , icon, description})=>{

    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <div className={style.img}>{icon}</div>
            </div>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    )
}
