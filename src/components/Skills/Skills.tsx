import React from "react";
import style from './Skills.module.css';
import styleContainer from '../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
           <div className={`${styleContainer.container} ${style.skillsContainer}`}>

               <h2 className={style.title}>Skills</h2>

               <div className={style.skills}>
                   <Skill title='HTML/CSS' description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                   <Skill title='JS' description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                   <Skill title='React' description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
               </div>
           </div>
        </div>
    );
}

export default Skills;