import React, { useState } from 'react';
import './style.scss';
import '../form.scss';

function ContactForm() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(inputs);
    if (Object.keys(validationErrors).length === 0) {
      console.log(inputs); // Valid form data
      setErrors({});
      setSuccessMessage('Form submitted successfully!');
    } else {
      setErrors(validationErrors);
      setSuccessMessage('');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.Username) {
      errors.Username = 'Name is required';
    }

    if (!values.Email) {
      errors.Email = 'Email is required';
    } else if (!isValidEmail(values.Email)) {
      errors.Email = 'Invalid email address';
    }

    if (!values.PhoneNumber) {
      errors.PhoneNumber = 'Phone number is required';
    }

    if (!values.EnquiryType) {
      errors.EnquiryType = 'Enquiry Type is required';
    }

    if (!values.Message) {
      errors.Message = 'Description is required';
    }

    if (!values['Term of Service']) {
      errors['Term of Service'] = 'You must agree to the terms of service';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Email validation logic (you can use a library or regex for more complex validation)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <form className="pgs-form form-control" onSubmit={handleSubmit}>
        <div className="row row-gap">
          <div className="col-sm-12">
            <div className="input-control">
              <label>Full Names : </label>
              <input
                type="text"
                name="Username"
                value={inputs.Username || ''}
                onChange={handleChange}
                placeholder="Full Name"
              />
              {errors.Username && (
                <span className="error">{errors.Username}</span>
              )}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-control">
              <label>Email :</label>
              <input
                type="email"
                name="Email"
                value={inputs.Email || ''}
                onChange={handleChange}
                placeholder="Email Address"
              />
              {errors.Email && <span className="error">{errors.Email}</span>}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-control">
              <label>Phone Number :</label>
              <input
                type="tel"
                name="PhoneNumber"
                value={inputs.PhoneNumber || ''}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              {errors.PhoneNumber && (
                <span className="error">{errors.PhoneNumber}</span>
              )}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-control">
              <label>Enquiry Type :</label>
              <input
                type="tel"
                name="EnquiryType"
                value={inputs.EnquiryType || ''}
                onChange={handleChange}
                placeholder="Enquiry Type"
              />
              {errors.EnquiryType && (
                <span className="error">{errors.EnquiryType}</span>
              )}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-control">
              <label>Message :</label>
              <textarea
                rows={5}
                name="Message"
                value={inputs.Message || ''}
                onChange={handleChange}
                placeholder="Enquiry Description"
              />
              {errors.Message && (
                <span className="error">{errors.Message}</span>
              )}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="checkbox-control">
              <input
                type="checkbox"
                name="Term of Service"
                checked={inputs['Term of Service'] || false}
                onChange={handleChange}
              />{' '}
              I agree to talk about my project with hi-Nex
            </div>
            {errors['Term of Service'] && (
              <span className="checkbox-error">
                {errors['Term of Service']}
              </span>
            )}
          </div>
          <div className="col-sm-12">
            <div className="input-control">
              <button className="btn-primary" type="submit">
                Send a Message<i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          {successMessage && (
            <div className="col-sm-12">
              <div className="success-message">{successMessage}</div>
            </div>
          )}
        </div>
      </form>
    </>
  );
}

export default ContactForm;
