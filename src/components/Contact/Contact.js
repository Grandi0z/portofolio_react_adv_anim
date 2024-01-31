import React, { useEffect, useRef, useState } from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
            .sendForm(
                'gmail',
                'contact_form_njpci7g',
                refForm.current,
                'iowCyNFAmwFKZDxcH'
            )
            .then(
                () => {
                    alert('message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('failed to send the message, please try again')
                }
            )
      }
  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
            <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                Ready to bring your ideas to life? <br />
                Whether it&apos;s creating a super-powered product, adding a touch of magic,
                weaving fiction into a website or creating a manga-worthy feature, I&apos;ve
                got you covered!
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required></textarea>
                            </li>
                            <li><input type='submit' className='flat-button' value='SEND'/></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
  )
}

export default Contact