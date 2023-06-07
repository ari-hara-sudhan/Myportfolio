import React from 'react'
import './Footer.css'
import {useNavigate} from 'react-router-dom'
function Footer() {
    const navigate =useNavigate();
    const handlechange=()=>{
        navigate('/profile')
       
    }
    return (
        <div className='footer'>
            
         <p className='text'><a href='https://github.com/ari-hara-sudhan' target='_blank'>@ahs Sudhan</a></p>
         <p onClick={handlechange}>Profile</p>
        </div>
    )
}

export default Footer
