import React from 'react'
import Logo from '../Header/Logo.png'
import "../Header/header.css"
import { Link ,useNavigate } from 'react-router-dom'
import About from '../AboutUs/About'

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" >
        <div className='container'>
          <a class="navbar-brand " href="#"><img src={Logo} alt="" id='logop' /></a>
          <button class="navbar-toggler navbar-brand" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" ></span>
          </button>
          
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav  ms-auto">
                <li class="nav-item ">
                  <Link to="/" class="nav-link active text-white">Home</Link>
                </li>
                <li class="nav-item ">
                  <a class="nav-link text-white" href="/#Ourservices" 
                  onClick={() =>navigate('',{state:{name:"Ourservices"}})}>Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href='/Careers' onClick={()=>navigate('/Careers')}>Careers</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="/#About"
                  onClick={() =>navigate('',{state:{name:"About"}})}>About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href='#con-1' onClick={() =>navigate('',{state:{name:"Contact"}})}>Contact</a>
                </li>
                <li>
                  <button class="btn btn-light" onClick={() =>navigate('',{state:{name:"Contact"}})}>Get a Quote</button>
                </li>
              </ul>
            </div>
          

        </div>
      </nav>
  
    </div>

  )
}
export default Header