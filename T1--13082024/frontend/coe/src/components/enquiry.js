import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

const EnquiryForm = ({ showForm, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    services: [],
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    contactNumber: '',
    email: '',
  });

  const API_URL = process.env.REACT_APP_API_URL || "https://backend-cool-14.onrender.com";

  const validateField = (name, value) => {
    let errorMsg = '';

    if (name === 'name') {
      const namePattern = /^[A-Za-z\s]+$/;
      if (!namePattern.test(value)) {
        errorMsg = 'Name should contain only letters and spaces.';
      }
    }

    if (name === 'contactNumber') {
      const contactPattern = /^\d+$/;
      if (!contactPattern.test(value)) {
        errorMsg = 'Contact number should contain only digits.';
      } else if (value.length !== 10) {
        errorMsg = 'Contact number should be exactly 10 digits.';
      }
    }

    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        errorMsg = 'Please enter a valid email address.';
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'services') {
      const selectedServices = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedServices,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      validateField(name, value);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      services: checked
        ? [...prevData.services, value]
        : prevData.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((field) => validateField(field, formData[field]));

    if (!Object.values(errors).some((error) => error)) {
      axios.post(`${API_URL}/send-enquiry`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          alert(response.data.message || 'Form submitted successfully!');
          setFormData({
            name: '',
            contactNumber: '',
            email: '',
            services: [],
            message: '',
          });
          handleClose();
        })
        .catch(error => {
          if (error.response) {
            console.error('Server responded with error:', error.response.data);
            alert(`Submission failed: ${error.response.data.message || 'Unexpected error occurred.'}`);
          } else if (error.request) {
            console.error('No response received:', error.request);
            alert('No response received from the server. Please try again later.');
          } else {
            console.error('Error:', error.message);
            alert('An error occurred during submission. Please try again.');
          }
        });
    }
  };

  if (!showForm) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ backgroundColor: 'white' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group" controlId="formName">
            <Form.Label style={{ fontFamily: 'Matemasie', fontWeight: "500" }}>NAME</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              isInvalid={!!errors.name}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="form-group" controlId="formContactNumber">
            <Form.Label style={{ fontFamily: 'Matemasie', fontWeight: "500" }}>CONTACT NUMBER</Form.Label>
            <Form.Control
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              isInvalid={!!errors.contactNumber}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="form-group" controlId="formEmail">
            <Form.Label style={{ fontFamily: 'Matemasie', fontWeight: "500" }}>EMAIL ID</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="services-group" controlId="formServices" style={{ marginTop: "5%" }}>
            <Form.Label style={{ fontFamily: 'Matemasie', fontWeight: "500" }}>SERVICES</Form.Label>
            {['RESEARCH PROJECTS', 'PATHWAY INTERNSHIP', 'PRORESUME CRAFTING', 'CAREERGUIDE CONSULTING',"THESIS WRITING","LITERATURE SURVEY","TECHNICAL WRITING", 'ALL THE ABOVE'].map((service) => (
              <Form.Check
                key={service}
                type="checkbox"
                id={`formService${service}`}
                label={service}
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleCheckboxChange}
                style={{ fontFamily: 'Matemasie', fontWeight: "500", width: '100%' }}
              />
            ))}
          </Form.Group>

          <Form.Group className="form-group" controlId="formMessage" style={{ marginTop: "5%" }}>
            <Form.Label style={{ fontFamily: 'Matemasie', fontWeight: "500" }}>MESSAGE</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              style={{ height: '100px' }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ fontFamily: 'Matemasie', backgroundColor: "#0549d4", fontWeight: "700", color: "#ffffff", marginTop: "10%" }}
          >
            SUBMIT
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EnquiryForm;
