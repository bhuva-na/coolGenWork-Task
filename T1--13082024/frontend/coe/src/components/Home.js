import React from "react";
import Footer from "./footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import COEdetails from "./COEdetails"; // Ensure correct casing and path
import { MDBTypography } from "mdb-react-ui-kit";

import img15 from './img15.jpeg'
const Home = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <COEdetails />

      <Container className="mt-5">
        <Row className="mb-6" xs={1} md={2}>
          {/* Image Column */}
          <Col className="text-center mb-4 d-flex align-items-center justify-content-center">
            <img
              src={img15}
              className="img-fluid rounded"
              alt="Technology"
              style={{ width: '100%', height: 'auto', maxHeight: '500px' }} // Ensuring the image fills the container appropriately
            />
          </Col>

          {/* Text Column */}
          <Col className="d-flex flex-column justify-content-center">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <MDBTypography 
                tag="h5" 
                variant="h5" 
                className="fw-bold mb-2" 
                style={{ fontFamily: 'DM Sans, sans-serif', color: "black", textAlign: 'justify' }}>
                Who We Are
              </MDBTypography>
              <hr />

             
            

              <MDBTypography 
                tag="h5" 
                variant="h5" 
                className="fw-bold mb-2" 
                style={{ textAlign: 'justify' }}>
                Mission
              </MDBTypography>
              <MDBTypography 
              tag="h5"
                style={{ fontFamily: 'Matemasie', fontWeight: "500", color: "black", textAlign: 'justify' }}>
                We deliver cutting-edge solutions across cloud, AI, digital, branding, consulting, and sustainability to transform businesses and fuel their success.
                <br />
                <br/>
                Our commitment to budget-conscious innovation, exceptional quality, on-time delivery, and industry-leading standards ensures future-proof solutions for our clients.
              </MDBTypography>
              <hr />

              <MDBTypography 
                tag="h5" 
                variant="h5" 
                className="fw-bold mb-2" 
                style={{ textAlign: 'justify' }}>
                Vision
              </MDBTypography>
              <MDBTypography 
               tag="h5"
                style={{ fontFamily: 'Matemasie', fontWeight: "500", color: "black", textAlign: 'justify' }}>
                Empowering businesses of all sizes to thrive in the digital age
              </MDBTypography>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
