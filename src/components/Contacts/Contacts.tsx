import React from "react";
import style from './Contacts.module.css'
import styleContainer from "../Common/Styles/Container.module.css";


function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                <h2 className={style.title}>Contacts</h2>

                <form className={style.contactsForm}>
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea className={style.text}/>
                </form>

                <button className={style.btn}>Отправить</button>
            </div>

        </div>
    );
}

export default Contacts;