import React, { useState } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import img36 from './img36.jpg'; // Replace with your literature survey image
import img11 from './img11.jpg'; // Replace with your literature survey process image
import { Col, Row } from "react-bootstrap";

const LiteratureSurvey = () => {
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
            backgroundImage: `url(${img36})`,
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
            <MDBTypography tag="h1" variant="h1" className="mb-1 mt-5">
              <b>LITERATURE</b> <b style={{ color: "#ff3131" }}>SURVEY</b>
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-sm" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'white' }}>
              Conduct a comprehensive literature survey to analyze existing research and identify gaps.
              <br /><br />
              Develop your ability to review and synthesize academic literature, preparing you for research and academic projects.
            </MDBTypography>
          </div>
        </div>

        <Row className="mb-7 align-items-center" xs={1} md={2}>
          <Col className="text-center mb-4" style={{ borderRight: "1px solid black", paddingRight: "5%" }}>
            <img
              src={img11}
              className="img-fluid rounded"
              alt="Literature Survey Process"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center" style={{ paddingLeft: "3%" }}>
          <MDBTypography tag="h1" variant="h1" className="mb-2">
              <b>HOW IT WORKS</b>
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-base" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'black' }}>
              Our literature survey program guides you through the process of analyzing and synthesizing existing research.
              <br /><br />
              Engage in a structured approach to review literature, identify research gaps, and prepare comprehensive reports.
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
                  <i className="fas fa-book"></i> Comprehensive Analysis
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'black' }}>
                  Conduct an in-depth review of existing literature to understand the current state of research.
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
                  <i className="far fa-edit"></i> Research Gap Identification
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'black' }}>
                  Identify gaps in existing research and opportunities for new studies.
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
                  <i className="fas fa-chalkboard-teacher"></i> Expert Guidance
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'black' }}>
                  Receive guidance from experienced researchers throughout the survey process.
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
                  <i className="fas fa-award"></i> Academic Recognition
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'black' }}>
                  Gain recognition for your thorough analysis and contributions to the field of study.
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

export default LiteratureSurvey;
