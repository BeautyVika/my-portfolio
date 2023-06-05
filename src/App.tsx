import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from "./components/Main/Main"
import Skills from "./components/Skills/Skills"
import MyProjects from "./components/MyProjects/MyProjects"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import {Navigate, Route, Routes} from "react-router-dom"
import {PATH} from "./components/Common/constants/constants"

function App() {
    return (
        <div className="App">
            <Header/>
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
