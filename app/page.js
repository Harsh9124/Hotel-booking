"use client"
import React from 'react'

import HomeComponent from './components/Home'
import Room from './components/Room';
import Host from './components/Host';
import About from './components/About';
import Things from './components/Things';
import MoreDetails from './components/MoreDetails';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


export default function Home() {
  return (
    <>
      <div className='m-0 p-0'>
      
        {/* -----Navbar Start ----- */}
          <NavBar /> 
        {/* -----Navbar End ----- */}

        <hr style={{borderTop: '1px solid rgb(170 170 170 / 62%)', width: '100%'}} />
        
        {/* -----Home Start ----- */}
        <div id="home" className="bg-[#012533]">
          <HomeComponent />
        </div>
        {/* -----Home End ----- */}

        {/* -----Room Start ----- */}
        <div className="bg-[#3B4E55]">
          <Room />
        </div>
        {/* -----Room End ----- */}

        {/* -----Host Start ----- */}
        <div className="bg-[#012533]">
          <Host />
        </div>
        {/* -----Host End ----- */}

        {/* -----About Start ----- */}
        <div id='About' className="bg-[#3B4E55]">
          <About />
        </div>
        {/* -----About End ----- */}

        {/* -----Things Start ----- */}
        <div className="bg-[#012533]">
          <Things />
        </div>
        {/* -----Things End ----- */}


        {/* -----More Start ----- */}
        <div id='Contact' className="bg-[#3B4E55]">
          <MoreDetails />
        </div>
        {/* -----More End ----- */}

        {/* -----Footer Start ----- */}
        <div className="bg-[#012533]">
          <Footer />
        </div>
        {/* -----Footer End ----- */}
      </div>
    </>
  )
}
