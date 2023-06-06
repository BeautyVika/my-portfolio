import React, {FC} from "react"
import style from './Main.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import myPhoto from '../../assets/img/myPhoto.png'
import {Particle} from "./Particle/Particle"
import {Fade} from 'react-awesome-reveal'
import ReactTypingEffect from "react-typing-effect"
import { Tilt } from 'react-tilt'

export const Main: FC = () => {
    return (
        <div className={style.mainBlock}>

            <div className={styleContainer.container}>
                <Particle/>
                <div className={style.greeting}>
                    <Fade cascade>
                        <span className={style.titleGreeting}>Hello! My name is</span>
                        <h1>Victoria Petuchova</h1>
                        <p>
                            <ReactTypingEffect text={'FRONT-END DEVELOPER'}/>
                        </p>
                    </Fade>
                </div>

                <div className={style.photoContainer}>
                    <Tilt options={{max: 25}}>
                        <img className={style.photo} src={myPhoto} alt={'photo'}/>
                    </Tilt>
                </div>

            </div>
        </div>
    )
}


