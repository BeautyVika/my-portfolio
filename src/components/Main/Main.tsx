import React from "react";
import style from './Main.module.css';
import styleContainer from '../Common/Styles/Container.module.css'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container }>
                <div className={style.greeting}>
                    <span>Hi, there!</span>
                    <h1>I am Victoria Petuchova</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>

            </div>
        </div>
    );
}

export default Main;

