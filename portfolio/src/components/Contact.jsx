import React, { useState } from 'react';

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
      <form>
        <label className='contact-name'>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* Conditionally show the error */}
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </label>
        <br />

        <label className='contact-email'>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* Conditionally show the error */}
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </label>
        <br />

        <label className='contact-message'>
          Message:
          <textarea
            className='message-input'
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* Conditionally show the error */}
          {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;