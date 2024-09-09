import React, { useState } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import img25 from './girlai.jpg';
import img12 from './penaibi.jpg';
import { Col, Row } from "react-bootstrap";

const ThesisWriting = () => {
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
    <div style={{ backgroundColor: "#ffffff" }} >
      <Container className="mt-0">
        <div
          style={{
            backgroundImage: `url(${img12})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '50px 0',
            position: 'relative',
            color: 'white',
            marginBottom: "5%",
            minHeight: '400px', // Adjust the height as needed
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity as needed
              padding: '50px',
              borderRadius: '8px', // Optional: to give a rounded look
              width: '80%', // Adjust the width as needed
              maxWidth: '800px', // Optional: to set a maximum width
              textAlign: 'center',
            }}
          >
            <MDBTypography tag="h1" variant="h1" className="mb-1 mt-5">
              <b>THESIS</b> <b style={{ color: "#ff3131" }}>WRITING</b>
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-sm" tag="h4" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'white' }}>
              Develop your academic writing skills by working on comprehensive research projects.
              <br /><br />
              Enhance your ability to conduct original research and contribute to your field of study.
              <br /><br />
              Invest in your academic success by mastering the art of thesis writing, preparing you for future academic or professional endeavors.
            </MDBTypography>
          </div>
        </div>

        <Row className="mb-7 align-items-center" xs={1} md={2}>
          <Col className="text-center mb-4" style={{borderRight:"1px solid black",paddingRight:"5%"}}>
            <img
              src={img25}
              className="img-fluid rounded"
              alt="Thesis Writing Process"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center" style={{paddingLeft:"3%"}}>
            <MDBTypography tag="h1" variant="h1" className="mb-2">
              <b>HOW IT WORKS</b>
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-base" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'black' }}>
              Our thesis writing program guides you through the process of conducting and writing a research project.
              <br /><br />
              Participate by selecting a topic, working closely with an advisor, and submitting your work for evaluation.
              <br />
            </MDBTypography>
          </Col>
        </Row>

        {/* Benefits Section */}
        <Row className="mb-6 g-4" xs={1} sm={2} md={3} lg={4}>
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
                  <i className="fas fa-book" style={{color:"red" ,padding:"2%"}}></i> <b> COMPREHENSIVE RESEARCH</b>
                </Card.Title>
                <Card.Text  style={{ fontFamily: "Merriweather", fontWeight: "800", color: 'black' }}>
                  Engage in detailed research that enhances your academic credentials.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="primary"
              className="h-100 shadow-lg"
              style={cardStyle(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <i className="far fa-edit" style={{color:"red",padding:"2%"}}></i> <b> WRITING SKILLS</b> 
                </Card.Title>
                <Card.Text style={{ fontFamily:"Merriweather", fontWeight: "800", color: 'black' }}>
                  Improve your academic writing and communication skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="primary"
              className="h-100 shadow-lg"
              style={cardStyle(3)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-chalkboard-teacher" style={{color:"red",padding:"2%"}}></i> <b> EXPERT GUIDANCE</b> 
                </Card.Title>
                <Card.Text style={{ fontFamily: "Merriweather", fontWeight: "700", color: 'black' }}>
                  Receive guidance from experienced advisors throughout the process.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="primary"
              className="h-100 shadow-lg"
              style={cardStyle(4)}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-award" style={{color:"red",padding:"2%"}}></i>    <b>    ACADEMIC ACHIEVEMENT</b>
                </Card.Title>
                <Card.Text style={{ fontFamily:  "Merriweather", fontWeight: "700", color: 'black' }}>
                  Achieve academic recognition and enhance your qualifications.
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

export default ThesisWriting;
