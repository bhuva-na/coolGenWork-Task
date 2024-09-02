import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBTypography } from "mdb-react-ui-kit";
import Footer from "./footer";
import Container from "react-bootstrap/esm/Container";
import img32 from './img32.jpg'
const Cvwriting = () => {
  return (
    <div  style={{backgroundColor:"#FFFFFF"}}>
      {/* <Header /> */}
      <Container className="mt-0">
      
        <Row className="mb-7 align-items-center" xs={1} md={2}>
          <Col className="d-flex flex-column justify-content-center mt-5">
            <MDBTypography tag="h1" variant="h1" className="mb-3" >
             
            <b>CAREERGUIDE </b><b style={{ color: "#ff3131"}}>CONSULTING</b>
            </MDBTypography>
            <hr />
                        <MDBTypography className="lead mb-0"  style={{ fontFamily: 'Matemasie',fontWeight:"500" }}>
            Get expert advice and guidance to advance your career and achieve your goals.
              <br />
          <br></br>
              <MDBTypography class="fw-bold" style={{ fontFamily: 'Matemasie',fontWeight:"500" }}> WHAT WE OFFER?</MDBTypography>
        Our career consulting services are designed to help you navigate the complexities of your career path. Whether you're looking to switch industries, climb the corporate ladder, or find work-life balance, our experienced consultants are here to guide you.
            </MDBTypography>
          </Col>
          <Col className="text-center">
            <img
              src={img32}
              className="img-fluid rounded"
              alt="Team Collaboration"
              style={{ maxWidth: "100%" }}
            />
          </Col>
        </Row>

        {/* Section 2 */}
       
         
           <MDBTypography style={{alignItems:"center"}}><h1 >
            HOW ITS WORKS
            </h1></MDBTypography>
            <hr />
        <MDBTypography note noteColor='info' style={{alignItems:"center"}} className="mb-5" >
        
        <strong>step 1:</strong><p>Book a consultation online</p>
        <strong>step 2:</strong><p> Meet with one of our consultants to discuss your career goals.</p>
        <strong>step 3:</strong><p> Receive a personalized career strategy plan.</p>
        <strong>step 4:</strong><p> Implement the plan with ongoing support from our team.</p>
      </MDBTypography>
          
            
           
           
         

       
      </Container>

      <Footer />
    </div>
  );
};

export default Cvwriting;
