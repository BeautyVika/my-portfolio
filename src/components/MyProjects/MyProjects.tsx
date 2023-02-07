import React from "react";
import style from './MyProjects.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import Project from "./Project/Project";
import Title from "../Common/components/Title/Title";
import todoImg from "../../assets/img/todo.jpg"
import socialImg from "../../assets/img/social.jpg"


function MyProjects() {
    const todo = {
        backgroundImage: `url(${todoImg})`
    }
    const social = {
        backgroundImage: `url(${socialImg})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>

                <Title mainTitle='Portfolio' title='My Projects'/>

                <div className={style.projects}>
                    <Project title={'TodoLists'}
                             style={todo}
                             titleDescription={'Stack: React, Redux, Typescript, Javascript, Formik, MUI, Axios, React-Router-dom'}/>
                    <Project title={'Social network'}
                             style={social}
                             titleDescription={'Stack: React, Redux, Typescript, Javascript, Axios, React Hook Form, React-Router-dom '}/>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;