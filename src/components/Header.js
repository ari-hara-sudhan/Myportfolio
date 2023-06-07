import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'



function Header() {
    const navigate =useNavigate();

    const handleclick =()=>{
        navigate('/works')
    

    }
    const handleclick2 =()=>{
        navigate('/')
    

    }

    
    return (
        <div className='header'>
            <div className='header__logo'>
                <h1 onClick={handleclick2}>ahS</h1>
            </div>

            <div className='header__works'>
                <p onClick={handleclick}>Works</p>
            </div>
            
        </div>
    )
}

export default Header
