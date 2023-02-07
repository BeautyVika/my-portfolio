import React from "react";
import style from './Main.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container }>
                <div className={style.greeting}>
                    <span className={style.titleGreeting}>Welcome! My name is</span>
                    <h1>Victoria Petuchova</h1>
                    <p>FRONT-END DEVELOPER</p>
                    <div className={style.btn}>
                        <a href='#' >My CV</a>
                    </div>
                </div>
                <div className={style.photo}></div>

            </div>
        </div>
    );
}

export default Main;

