import React, { useEffect, useState } from 'react'
import './about.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
  return (
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                Joseph Lwanzo Kausi, <br />
                Hello, my name is Joseph! I'm a motivated software developer working in Goma.
                </p>
                <p>
                I'm currently working on my website, where you'll find everything I want to show the world. 
                I did 3 years of university studies in computer science, 
                which I supplemented with distance learning at a very selective school 
                where I spent months working remotely with talented developers from different 
                continents.
                </p>
                <p>
                Take a look at the projects page for an overview of my work on open source software.
                I'm active on my social media, or by email, so if you want to get in touch, don't hesitate, 
                it's always a pleasure to meet new people.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default About