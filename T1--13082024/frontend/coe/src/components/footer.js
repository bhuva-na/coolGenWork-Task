import React from 'react'
import {
    MDBFooter,
    MDBContainer,
   
  } from 'mdb-react-ui-kit';
  
const Footer = () => {
  return (
    <div><MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
    <MDBContainer className='p-4 pb-0'>
   
    </MDBContainer>

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

