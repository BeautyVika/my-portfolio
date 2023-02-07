import React from "react"
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import Skill from "./Skill/Skill"
import Title from "../Common/components/Title/Title"
import jsIcon from "../../assets/icons/js-icon.svg"
import htmlIcon from "../../assets/icons/html-icon.svg"
import reactIcon from "../../assets/icons/react-icon.svg"
import gitIcon from "../../assets/icons/Git-Icon-1788C.png"
import reduxIcon from "../../assets/icons/redux-icon.png"
import unitIcon from "../../assets/icons/unit-test.png"
import restIcon from "../../assets/icons/rest.png"

function Skills() {

    return (
        <div className={style.skillsBlock}>
           <div className={`${styleContainer.container} ${style.skillsContainer}`}>
               
               <Title mainTitle='Skills' title='My Skills'/>

               <div className={style.skills}>
                   <Skill title='HTML & CSS'
                          icon={htmlIcon}
                          description={'Grid, Flex, LESS, SCSS'}/>
                   <Skill title='JAVASCRIPT / TYPESCRIPT'
                          icon={jsIcon}
                          description={'Data types, basic syntax, functions, promises, scope, event loop, async/await'}/>
                   <Skill title='REACT'
                          icon={reactIcon}
                          description={'Class and functional components, components\'s life-cycle methods, props, hooks, HOC'}/>
                   <Skill title='REDUX'
                          icon={reduxIcon}
                          description={'FLUX-concepted data flow, reducer, dispatch, redux-thunk, redux-toolkit'}/>
                   <Skill title='REST API'
                          icon={restIcon}
                          description={'HTTPS requests, URI parameters, Query parameters, status codes, axios library'}/>
                   <Skill title='Version control and Git'
                          icon={gitIcon}
                          description={'Creating new repositories, push- and pull-requets, merge, repos cloning'}/>
                   <Skill title='TESTING'
                          icon={unitIcon}
                          description={'TDD, Story book, Snapshot, Unit tests'}/>
               </div>

           </div>
        </div>
    );
}

export default Skills;