import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import MyProjects from "./components/MyProjects/MyProjects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
        </div>
    );
}

export default App;
