import React from "react";
import style from './Contacts.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Title from "../Common/components/Title/Title";


function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                <Title mainTitle='Contacts' title='Get in touch'/>
                {/*<h2 className={style.Title}>Contacts</h2>*/}

                <form className={style.contactsForm}>
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea className={style.text}/>
                    <button type="submit" className={style.btn}>Отправить</button>
                </form>

            </div>

        </div>
    );
}

export default Contacts;