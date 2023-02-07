import React from "react";
import style from './Header.module.scss';
import Nav from "../Nav/Nav";
import ContactButtonGroup from "../ContactButtonGroup/ContactButtonGroup";

function Header() {
    return (
        <div className={style.header}>
            <Nav/>
            <ContactButtonGroup/>
        </div>
    );
}

export default Header;
