import React, { useState } from 'react';
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import colleagues from './colleagues.jpg';
import { Col, Row } from "react-bootstrap";

const Internships = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardStyle = (index) => ({
    backgroundColor: '#a6afc5',
    transition: 'transform 0.3s, box-shadow 0.3s',
    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hoveredCard === index ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
  });

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Container className="mt-0">
        <div
          style={{
            backgroundImage: `url(${colleagues})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '50px 0',
            position: 'relative',
            color: 'white',
            marginBottom: "5%",
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '50px',
              borderRadius: '8px',
              width: '80%',
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            <MDBTypography tag="h1" variant="h1" className="mb-3 mt-3">
              <b>PATHWAY </b><b style={{ color: "#ff3131" }}>INTERNSHIP</b>
            </MDBTypography>
            <hr />
            <MDBTypography className="lead" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'white' }}>
              Gain practical experience and earn a certificate by joining our internship programs.
              <br /><br />
              <p className="fw-bold">Why Intern with Us?</p>
              Our internships provide valuable industry experience and networking opportunities. Whether you're interested in tech, marketing, or finance, we have something for everyone.
            </MDBTypography>
          </div>
        </div>

        <MDBTypography className="text-center" tag="h1">
          <b>HOW TO APPLY</b>
        </MDBTypography>
        <hr />
        <MDBTypography note noteColor='info' className="text-center mb-8">
          <strong>JUST FILL THE FORM ON THE LET’S TALK OPTION</strong>
        </MDBTypography>

        <Row className="mb-7 g-4" xs={1} sm={2} md={3} lg={4}>
          <Col>
            <Card
              border="dark"
              className="h-100 shadow-lg"
              style={cardStyle(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon fas icon="graduation-cap" style={{color:"red",padding:"2%"}}/><b>CERTIFICATES</b>
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                  Receive a certificate recognizing your successful completion of the internship.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="dark"
              className="h-100 shadow-lg"
              style={cardStyle(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon fas icon="handshake" style={{color:"red",padding:"2%"}}/><b> CAREER COUNSELING</b>
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                  Access career counseling services for job placement support and interview preparation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="dark"
              className="h-100 shadow-lg"
              style={cardStyle(3)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon fab icon="black-tie"style={{color:"red",padding:"2%"}} /><b>POTENTIAL JOB OFFER</b>
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                  Stand out for potential full-time job offers or extended internship opportunities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="dark"
              className="h-100 shadow-lg"
              style={cardStyle(4)}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon fas icon="award"style={{color:"red",padding:"2%"}} /><b>RECOGNITION AND AWARDS</b>
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                  Receive recognition and awards for outstanding performance and achievements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Internships;
