import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../Common/components/Title/Title";
import jsIcon from "../../assets/icons/js-icon.svg"
import htmlIcon from "../../assets/icons/html-icon.svg"
import reactIcon from "../../assets/icons/react-icon.svg"

function Skills() {
    const js = jsIcon
    const html = htmlIcon
    const react = reactIcon
    return (
        <div className={style.skillsBlock}>
           <div className={`${styleContainer.container} ${style.skillsContainer}`}>
               
               <Title mainTitle='Skills' title='My Skills'/>

               <div className={style.skills}>
                   <Skill title='HTML & CSS'
                          icon={html}
                          description={'Grid, Flex, LESS, SCSS'}/>
                   <Skill title='JAVASCRIPT / TYPESCRIPT'
                          icon={js}
                          description={'Promise, RestAPI, Unit-tests'}/>
                   <Skill title='REACT & REDUX'
                          icon={react}
                          description={'Redux-Thunk, Redux Toolkit, RTKQuery'}/>

               </div>

           </div>
        </div>
    );
}

export default Skills;