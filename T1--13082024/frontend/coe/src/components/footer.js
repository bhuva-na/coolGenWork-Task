import React from 'react'
import {
    MDBFooter,

   
  } from 'mdb-react-ui-kit';
  
const Footer = () => {
  return (
    <div><MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
    
    <p class="d-flex justify-content-center align-items-center mb-1" style={{marginTop:"2%"}}>
    <i class="fas fa-envelope"></i>  <a className='text-white' href='mailto:hello@coolgentech.com' style={{marginLeft:"1%"}}>
          hello@coolgentech.com
      </a>

         
          
        
          
        </p>
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2024 Copyright:
      <a className='text-white' href='https://coolgentech.com/'>
        coolgentech.com
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer;

