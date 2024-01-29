import React from 'react'
import './home.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br /> I'm
                <img src = {LogoTitle} alt="developer"/>
                Joseph
                <br />
                Software developer
            </h1>
            <h2>Full-stack Developer / Mentor / Content writer</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home