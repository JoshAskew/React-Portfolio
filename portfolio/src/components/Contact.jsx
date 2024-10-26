import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import user from '../images/user.png';
import email from '../images/email.png';
import message from '../images/message.png'


function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Email validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle input blur (when user leaves the input field)
  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Error handling for empty inputs
    if (!value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: `${name} is required` }));
    }
    // Email validation error
    else if (name === 'email' && !validateEmail(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
    }
    // Clear error if valid
    else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  return (
    <section>
      <h2 className='contact-header'>Contact</h2>
      <Row className="justify-content-center">
        <Col md={6}>
        <div className='form-container'>
          <Form className='form'>
            <Row className="align-items-center">
              <Col xs="auto">
                <img src={user} alt="User icon" style={{ width: '20px', marginBottom: '20px', marginRight: '-20px' }} />
              </Col>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mb-3 info-input"
                  />
                  {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </Form.Group>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col xs="auto">
                <img src={email} alt="User icon" style={{ width: '20px', marginBottom: '20px', marginRight: '-20px' }} />
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mb-3 info-input"
                  />
                  {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </Form.Group>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col xs="auto">
                <img src={message} alt="Message Icon" style={{ width: '40px', marginBottom: '20px', marginRight: '-20px' }} />
              </Col>
              <Col>
            <Form.Group controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="mb-3 message-input"
              />
              {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
            </Form.Group>
            </Col>
            </Row>


            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Contact;