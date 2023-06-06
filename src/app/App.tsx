import React, {useEffect, useState} from 'react'
import './App.css'
import {Header} from "../components/Header/Header"
import {SideBar} from "../components/SideBar/SideBar"
import {Navigate, Route, Routes} from "react-router-dom"
import {PATH} from "../components/Common/constants/constants"
import {Main} from "../components/Main/Main"
import {Contacts} from "../components/Contacts/Contacts"
import {Footer} from "../components/Footer/Footer"
import {Skills} from "../components/Skills/Skills"
import {MyProjects} from "../components/MyProjects/MyProjects"

function App() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open])

    return (
        <div className="App">
            <Header handleOpen={handleOpen} />
            <SideBar open={open} handleClose={handleClose}/>
            <Routes>
                <Route path='/' element={<Navigate to={PATH.MAIN}/>}/>
                <Route path={PATH.MAIN} element={<Main/>}/>
                <Route path={PATH.CONTACT} element={<Contacts/>}/>
                <Route path={PATH.PROJECTS} element={<MyProjects/>}/>
                <Route path={PATH.SKILLS} element={<Skills/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
