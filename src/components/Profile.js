import React from 'react'
import hero from './image.jpg'
import './Profile.css'
import scroll from './scrool.gif'
function Profile() {
    return (
        <div >
            <img className='image1'  src={hero}/>
            <div>
            <p className='i'>S.ahs</p>
                <img className='ima' src={scroll} />
            </div>
            
            <div className='content'> 
                <p>Hi there <span className='red'>:)</span> </p>
                <p>
                I’m a front-end engineer based in India.
                </p>
                <p>
                I’ve been working in the web industry since 2021, and I’m always inspired by the great designs of websites created by creators from all over the world every day. My recent interests are "MERN STACK" and "WORDPRESS".
                </p>
                <p>
                 And my major is B.E(COMPUTER SCIENCE)

                </p>
                <p>
                   
               Currently, I am working as a freelancer

 

                    </p>
                   
            </div>

            <div  className='content'>
                <h3 className='head'>What i can do</h3>
                <p>Coding</p>
                <p>Image Editing</p>
                <p>Client Management</p>
            </div>

            <div className='content'>
                <h3  className='head'>Skills</h3>
                <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Python</p>
            </div>
            <div className='content'>
                <h3 className='head'>Frameworks</h3>
                <p>React.js</p>
                <p>Tailwind</p>
            </div>
            <div className='content'> 
                <h3 className='head'>Contents Management System</h3>
                <p>WordPress</p>
            </div>
            <div className='content'>
                <h3 className='head'>Hosting</h3>
                <p>Vercel</p>
            </div>
            <div className='content'>
                <h3 className='head'>Tools</h3>
                <p>Visual Studio Code</p>
                <p>Git</p>
            </div>
            
        </div>
    )
}

export default Profile
