import React, {FC} from "react"
import style from './MyProjects.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import {Project} from "./Project/Project"
import {Title} from "../Common/components/Title/Title"
import todoImg from "../../assets/img/tasksTracker.png"
import socialImg from "../../assets/img/socialnetwork.png"
import cardsTrainer from "../../assets/img/cards-trainer.png"
import {LINKS} from "../Common/constants/constants"
import {createProjectStyle} from "../Common/utils/utils"

type ProjectsType = {
    id: string
    title: string
    style: { backgroundImage: string }
    titleDescription: string
    demoLink: string
    codeLink: string
}

export const MyProjects: FC = () => {

    const projects: ProjectsType[] = [
        {
            id: 'tasks-project',
            title: 'Tasks tracker',
            style: createProjectStyle(todoImg),
            titleDescription: 'Stack: React, Redux-Toolkit, Redux-thunk, TS, Formik, MUI, Axios, ' +
                    'React-Router-dom, Prettier',
            demoLink: LINKS.TASKS_DEMO,
            codeLink: LINKS.TASKS_CODE
        },
        {
            id: 'social-network-project',
            title: 'Social network',
            style: createProjectStyle(socialImg),
            titleDescription: 'Stack: React, Redux, Redux-thunk, TS, Axios,Redux-form, Reselect, React-Router-dom',
            demoLink: LINKS.SOCIAL_NETWORK_DEMO,
            codeLink: LINKS.SOCIAL_NETWORK_CODE
        },
        {
            id: 'cards-project',
            title: 'Cards trainer',
            style: createProjectStyle(cardsTrainer),
            titleDescription: 'Stack: React, Redux-thunk, Redux-Toolkit, TS, Axios, ' +
                'React-Hook-Form, React-Router-dom, Eslint, Prettier ',
            demoLink: LINKS.CARDS_DEMO,
            codeLink: LINKS.CARDS_CODE
        },
    ]

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>

                <Title mainTitle='Portfolio' title='My Projects'/>

                <div className={style.projects}>
                    {projects.map((project) => {
                        return <Project key={project.id}
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
