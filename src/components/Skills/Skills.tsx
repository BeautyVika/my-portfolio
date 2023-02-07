import React from "react"
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import Title from "../Common/components/Title/Title"
import Skill from "./Skill/Skill";
import {AiFillHtml5} from "@react-icons/all-files/ai/AiFillHtml5";
import {DiJavascript1} from '@react-icons/all-files/di/DiJavascript1';
import {DiCss3} from '@react-icons/all-files/di/DiCss3';
import {FaReact} from '@react-icons/all-files/fa/FaReact';
import {SiRedux} from '@react-icons/all-files/si/SiRedux';
import {FaGitAlt} from '@react-icons/all-files/fa/FaGitAlt';
import {AiOutlineCloudServer} from '@react-icons/all-files/ai/AiOutlineCloudServer';
import {VscDebugConsole} from '@react-icons/all-files/vsc/VscDebugConsole';


function Skills() {

    return (
        <div className={style.skillsBlock}>
           <div className={`${styleContainer.container} ${style.skillsContainer}`}>
               
               <Title mainTitle='Skills' title='My Skills'/>

               <div className={style.skills}>
                   <Skill title='HTML'
                          icon=<AiFillHtml5/>
                          description={'semantic HTML'}/>
                   <Skill title='CSS'
                          icon=<DiCss3/>
                          description={'Grid, Flex, LESS, SCSS'}/>
                   <Skill title='JAVASCRIPT / TYPESCRIPT'
                          icon=<DiJavascript1/>
                          description={'Data types, basic syntax, functions, promises, scope, event loop, async/await'}/>
                   <Skill title='REACT'
                          icon=<FaReact/>
                          description={'Class and functional components, components\'s life-cycle methods, props, hooks, HOC'}/>
                   <Skill title='REDUX'
                          icon=<SiRedux/>
                          description={'FLUX-concepted data flow, reducer, dispatch, redux-thunk, redux-toolkit'}/>
                   <Skill title='REST API'
                          icon=<AiOutlineCloudServer/>
                          description={'HTTPS requests, URI parameters, Query parameters, status codes, axios library'}/>
                   <Skill title='Version control and Git'
                          icon=<FaGitAlt/>
                          description={'Creating new repositories, push- and pull-requets, merge, repos cloning'}/>
                   <Skill title='TESTING'
                          icon=<VscDebugConsole/>
                          description={'TDD, Story book, Snapshot, Unit tests'}/>
               </div>


           </div>
        </div>
    );
}

export default Skills;