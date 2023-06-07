import React from 'react'
import './Works.css'
import {useNavigate} from 'react-router-dom'
import up from './arrow.gif'
function Works() {

    const navigate =useNavigate()

    const handlechange=()=>{
        navigate('/freelancing')
    }
    return (
        <div className='works'>

            <div className='works__body'>
             <h1 onClick={handlechange}>MY FREELANCING</h1>
            </div>

            <p className='works__click'>click my freelancing</p>
            <img  className="works__arrow" src={up} alt='up'/>
        
         

        </div>
    )
}

export default Works
