import React from "react";
import style from './MyProjects.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import Project from "./Project/Project";


function MyProjects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={'TodoLists'} titleDescription={'Project description:'}/>
                    <Project title={'Social network'} titleDescription={'Project description:'}/>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;