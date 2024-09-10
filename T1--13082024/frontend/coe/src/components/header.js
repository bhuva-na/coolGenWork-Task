import React, { useState } from 'react';
import '../App.css'; // Import your CSS file
import { Navbar, Nav, Container, NavDropdown, Modal} from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
import EnquiryForm from './enquiry'; // Adjust the path as needed
import internpic from './internpic.png'
import cuberroots from './cuberootslogo.png'
export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleShowEnquiryForm = () => setShowForm(true);
  const handleCloseEnquiryForm = () => setShowForm(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const dropdownItemStyle = {
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const dropdownItemHoverStyle = {
    backgroundColor: '#f8f9fa',
    color: '#007bff',
  };

  return (
    <>
      <Navbar expand="lg" expanded={expanded} sticky="top" className="custom-navbar">
        <Container style={{ backgroundColor: "#ffffff" }}>
          <Navbar.Brand href="#">
            <img
              src={cuberroots}
              height="70"
              alt="Coolgen Logo"
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} style={{ borderColor: 'black' }}>
            <MDBIcon fas icon="angle-down" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" active>
                HOME
              </Nav.Link>
              <Nav.Link href="#" onClick={handleShowModal} active>
                PRICING
              </Nav.Link>
              <NavDropdown title="SERVICES" id="services-dropdown" active>
                <NavDropdown.Item
                  href="/mbaprojects"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  RESEARCH PROJECTS
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/interships"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  PATHWAY INTERNSHIP
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/thesiswriting"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  THESIS WRITING
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/leturature"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  LITERATURE SURVEY
                  
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/technicalwriting"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  TECHNICAL WRITING
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/cvwriting"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  PRORESUME CRAFTING
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/consulting"
                  style={dropdownItemStyle}
                  onMouseEnter={(e) => (e.target.style = { ...dropdownItemStyle, ...dropdownItemHoverStyle })}
                  onMouseLeave={(e) => (e.target.style = dropdownItemStyle)}
                >
                  CAREERGUIDE CONSULTING
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" onClick={handleShowEnquiryForm} active>
                LET’S TALK
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/company/coolgen-solutions/" target="_blank">
                <MDBIcon fab icon="linkedin" style={{ color: '#0e76a8', fontSize: '1.5rem', marginLeft: '10px' }} />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/coolgen_solutions_pvt.ltd/" target="_blank">
                <MDBIcon fab icon="instagram" style={{ color: '#E4405F', fontSize: '1.5rem', marginLeft: '10px' }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Enquiry Form Modal */}
      <EnquiryForm showForm={showForm} handleClose={handleCloseEnquiryForm} />

      {/* Charges Image Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
          <img
            src={internpic} // Replace with your image URL
            alt="Charges"
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}
