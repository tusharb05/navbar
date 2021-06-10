import React, { useState, useRef, useEffect } from 'react'
// import { FaBars, FaTwitter } from 'react-icons/fa';
import {FaBars, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linksHeight)
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`;
    }else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav>
      <div className="nav-center">
      <div className="nav-header">

        <img src={logo} className="logo" alt="" />
        <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
          <FaBars/>
        </button>
      </div>
      {/* useRef approach */}
      <div className='links-container' ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {
            links.map(link=><li key={link.id}><a href={link.url}>{link.text}</a></li>)
          }
        </ul>
      </div>

      {/* <div className={`links-container ${showLinks && 'show-container'}`}>
        <ul className="links">
          {
            links.map(link=><li key={link.id}><a href={link.url}>{link.text}</a></li>)
          }
        </ul>
      </div> */}
      {/* ----ANOTHER WAY---- */}
      {/* {showLinks ? 
      <div className="links-container show-container">
          <ul className="links">
            {
              links.map(link=><li key={link.id}><a href={link.url}>{link.text}</a></li>)
            }
          </ul>
      </div> 
      : 
      <div className="links-container">
        <ul className="links">
          {
            links.map(link=><li key={link.id}><a href={link.url}>{link.text}</a></li>)
          }
        </ul>
      </div>} */}

      <ul className="social-icons">
        {
          social.map(single=><li key={single.id}><a href={single.url}>{single.icon}</a></li>)
        }
      </ul>

      </div>
    </nav>
  )
}

export default Navbar