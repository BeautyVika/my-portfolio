import React from "react"
import style from './Main.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import myPhoto from '../../assets/img/myPhoto.png'
import {Particle} from "./Particle/Particle"

function Main() {
    return (
        <div className={style.mainBlock}>

            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <Particle/>
                    <span className={style.titleGreeting}>Hello! My name is</span>
                    <h1>Victoria Petuchova</h1>
                    <p>FRONT-END DEVELOPER</p>

                </div>

                <div className={style.photoContainer}>
                    <img className={style.photo} src={myPhoto} alt={'photo'}/>
                </div>

            </div>
        </div>
    );
}

export default Main;

