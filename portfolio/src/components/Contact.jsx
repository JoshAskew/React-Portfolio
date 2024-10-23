import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur}></textarea>
          {errors.message && <span>{errors.message}</span>}
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;