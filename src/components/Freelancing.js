import React from 'react'
import './Freelancing.css'
import hero from './ms.png'
function Freelancing() {
    return (
        <div className='freelancing'>
            {/* floating image
            image carousel
            role
            description
            tech
             */}
           
             <div clssName='freelancing_float'>
                <img className='image' src ={hero} alt="image"/>
             </div>

             <div className='freelancing__topics'>
            <div className='topic_1'>
                <h3>Role</h3>
                <p>Logo Design</p>
                <p>Product Design</p>
                <p>  Web Design</p>
                <p>Front-end</p>
               <p>  Back-end</p>
                </div>
                <div className='topic_2'>
                <h3>Description</h3>
                <p>Method : Resposive Web Site</p>
                <p>Launch Date : 2023</p>
               <p>Publish Status : Published</p>
               <p>The website that shows the school brand and its has the 
    in built managment system in it,</p>


                </div>
                   
             <div className='topic_3'>
                <h3>Clients</h3>
                <p>  <a className='link' href="https://kadayanallurwisdomschool.com/" target='_blank'>WISDOM SCHOOL</a></p>
              <p>
              <a   className='link' href='https://joyschoolvadakarai.com/'target='_blank'>JOY SCHOOL</a>
              </p>
                <p>
                <a   className='link'href='https://sreecrackers.com/' target='_blank'>SREECRACKERS</a>
                </p>
              
            
             </div>
             </div>
         
            
        </div>
    )
}

export default Freelancing
