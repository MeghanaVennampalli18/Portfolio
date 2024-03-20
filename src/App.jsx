import React from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Navbar/Profile/Profile';
import Skills from './components/Navbar/Skills/Skills';
import WorkExperience from './components/Navbar/WorkExperience/WorkExperience';
import ContactMe from './components/Navbar/ContactMe/ContactMe';

const App = () => {
    return (
        <>
        <Navbar/>

        <div className='container'>
            <Profile/>
            <Skills/>
            <WorkExperience/>
            <ContactMe/>
        </div>
        </>
    )
}

export default App
