import React from 'react'
import Banner from './Banner'
import Main from './Main'
import Description from './Description'
import Footer from './Footer'
import Cursor from './Cursor'
import Header from './Header'
import './Display.css'

function Display() {
    return (
    <div className='display'> 
    <Banner/>
    <Main/>
    <Description/>
    </div>
    )
}

export default Display
