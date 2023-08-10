import React, { useState } from "react";
import '../form.scss';

function GetTouchForm(props) {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

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
      setSuccessMessage("Form submitted successfully!");
    } else {
      setErrors(validationErrors);
      setSuccessMessage("");
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.Username) {
      errors.Username = "Name is required";
    }

    if (!values.Email) {
      errors.Email = "Email is required";
    } else if (!isValidEmail(values.Email)) {
      errors.Email = "Invalid email address";
    }

    if (!values.EnquiryType) {
      errors.EnquiryType = "Enquiry Type is required";
    }

    if (!values.Message) {
      errors.Message = "Description is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Email validation logic (you can use a library or regex for more complex validation)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <div className="get-in-touch-form">
        <form
          className={`pgs-form form-control ${props.className || ''}`}
          onSubmit={handleSubmit}
        >
          <div className="row row-gap">
            <div className="col-md-6 mb-2 mb-md-0">
              <div className="input-control">
                <label>Username : </label>
                <input type="text" name="Username" value={inputs.Username || ""} onChange={handleChange} placeholder="Full Name"/>
                {errors.Username && <span className="error">{errors.Username}</span>}
              </div>
            </div>
            <div className="col-md-6 mb-2 mb-md-0">
              <div className="input-control">
                <label>Email :</label>
                <input type="email" name="Email" value={inputs.Email || ""} onChange={handleChange} placeholder="Email Address"/>
                {errors.Email && <span className="error">{errors.Email}</span>}
              </div>
            </div>
            <div className="col-sm-12 mb-2 mb-md-0">
              <div className="col-sm-12">
                <div className="input-control">
                  <label>Your inquiry about :</label>
                  <input type="tel" name="EnquiryType" value={inputs.EnquiryType || ""} onChange={handleChange} placeholder="Your inquiry about"/>
                  {errors.EnquiryType && <span className="error">{errors.EnquiryType}</span>}
                </div>
              </div>
            </div>
            <div className="input-control mb-2 mb-md-0">
              <label>Message :</label>
              <textarea rows={5} name="Message" value={inputs.Message || ""} onChange={handleChange} placeholder="Please describe what you need."/>
              {errors.Message && <span className="error">{errors.Message}</span>}
            </div>
            <div className="input-control">
              <button className="btn-primary-round text-white" type="submit">
                Send Massage<i className="fas fa-arrow-right"></i>
              </button>
            </div>
            {successMessage && (
              <div className="col-sm-12">
                <div className="success-message">{successMessage}</div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default GetTouchForm;
