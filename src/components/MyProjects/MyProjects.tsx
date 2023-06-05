import React from "react"
import style from './MyProjects.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import Project from "./Project/Project"
import Title from "../Common/components/Title/Title"
import todoImg from "../../assets/img/tasksTracker.png"
import socialImg from "../../assets/img/socialnetwork.png"
import cardsTrainer from "../../assets/img/cards-trainer.png"

type ProjectsType = {
    title: string
    style: { backgroundImage: string }
    titleDescription: string
    demoLink: string
    codeLink: string
}

function MyProjects() {

    const projects: ProjectsType[] = [
        {
            title: 'Tasks tracker',
            style: {backgroundImage: `url(${todoImg})`},
            titleDescription: 'Stack: React, Redux-Toolkit, Redux-thunk, TS, Formik, MUI, Axios, ' +
                    'React-Router-dom, Prettier',
            demoLink: 'https://github.com/BeautyVika/Tasks-Tracker',
            codeLink: 'https://github.com/BeautyVika/Tasks-Tracker'
        },
        {
            title: 'Social network',
            style: {backgroundImage: `url(${socialImg})`},
            titleDescription: 'Stack: React, Redux, Redux-thunk, TS, Axios,Redux-form, Reselect, React-Router-dom',
            demoLink: 'https://beautyvika.github.io/social-network/',
            codeLink: 'https://github.com/BeautyVika/social-network'
        },
        {
            title: 'Cards trainer',
            style: {backgroundImage: `url(${cardsTrainer})`},
            titleDescription: 'Stack: React, Redux-thunk, Redux-Toolkit, TS, Axios, ' +
                'React-Hook-Form, React-Router-dom, Eslint, Prettier ',
            demoLink: 'https://beautyvika.github.io/cards-training/',
            codeLink: 'https://github.com/BeautyVika/cards-training'
        },
    ]

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>

                <Title mainTitle='Portfolio' title='My Projects'/>

                <div className={style.projects}>
                    {projects.map((project, index) => {
                        return <Project key={index}
                                        title={project.title}
                                        titleDescription={project.titleDescription}
                                        demoLink={project.demoLink}
                                        codeLink={project.codeLink}
                                        style={project.style}
                        />
                    })}

                </div>
            </div>
        </div>
    );
}

export default MyProjects;