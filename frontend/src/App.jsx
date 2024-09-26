import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

import Careers from './components/Carrear/Careers'


import { BrowserRouter, Route,Routes } from 'react-router-dom'
import About from './components/AboutUs/About'
import SeeJobs from './components/seejobs/SeeJobs'





function App() {
  return (
    <>
     <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Careers' element={<Careers/>}/>
      <Route path='/SeeJobs' element={<SeeJobs/>}/>
      

      {/* <Route path='/About' element={<About/>}/> */}
     
    </Routes>
    
    
     
    
    



     
    </>
  )
}

export default App
