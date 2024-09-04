import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBTypography } from 'mdb-react-ui-kit';
import { MDBCol } from 'mdb-react-ui-kit';

import background from './background.jpeg'; // Replace with your background image
import '../App.css';

import coolremovebg from './coolremovebg.png'
const COEdetails = () => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '5% 2%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay with 70% opacity
          padding: '3%',
          borderRadius: '10px',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        <Row className="align-items-center">
          <Col xs={12} md={7} className="text-center text-md-start mb-4 mb-md-0 mt-5">
            <MDBTypography
              tag="h1"
              variant="h1"
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: '#ff3131',
                fontSize: 'calc(1rem + 1vw)',
                textAlign: 'justify',
              }}
            >
              EXPLORE THE CENTER OF EXCELLENCE
            
            </MDBTypography>
            <hr className="my-4" style={{ borderColor: 'white' }} />
            <MDBTypography
              className="lead mb-0 font-dm-sans"
              style={{
                fontFamily: 'Matemasie',
                fontWeight: '500',
                color: '#DDE7FE',
                fontSize: 'calc(1rem + 0.5vw)',
                textAlign: 'justify',
              }}
            >
              Our Center of Excellence is dedicated to empowering individuals and organizations by providing expert guidance, valuable internships, professional CV writing services, career consulting, and MBA projects with competitive pay. Explore our services and start your journey towards excellence today!
              <br />
              <br />
              Turn your ideas into reality with our entrepreneurship and innovation support services. Whether you're a budding entrepreneur or an established business owner, our Centre of Excellence offers the resources, mentorship, and guidance you need to start, grow, and scale your business. Explore our entrepreneurial programs and take the first step towards building something extraordinary.
            </MDBTypography>
          </Col>
          <Col xs={12} md={5} className="text-center mt-4 mt-md-0">
          <MDBCol lg="10" md="8" sm="12" className="mx-auto">
    <img src={coolremovebg}  alt="cool" style={{ width: '100%', height: 'auto', maxHeight: '500px' }}/>
  </MDBCol>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default COEdetails;
