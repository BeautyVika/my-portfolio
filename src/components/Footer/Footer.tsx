import React from "react";
import style from './Footer.module.css'
import styleContainer from "../Common/Styles/Container.module.css";


function Footer() {
    return (
        <footer className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <p className={style.title}>Victoria Petuhova</p>

                <div className={style.contactContainer}>
                    <div className={style.contact}></div>
                    <div className={style.contact}></div>
                    <div className={style.contact}></div>
                    <div className={style.contact}></div>
                </div>

                {/*<span className={style.title}>Все права защищены.</span>*/}

            </div>
        </footer>
    );
}

export default Footer;