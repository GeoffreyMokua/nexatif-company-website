import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../form.scss';
import Button from '../../component/button/button';
import { useNavigate } from 'react-router-dom';

function TeamForm(props) {
  const [inputs, setInputs] = useState({
    Username: '',
    Email: '',
    PhoneNumber: '',
    Subject: '',
    Message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post('https://hi-nex-com.onrender.com/contact', {
      FullNames: inputs.Username,
      Email: inputs.Email,
      PhoneNumber: inputs.PhoneNumber,
      EnquiryType: inputs.Subject,
      EnquiryMessage: inputs.Message,
    });

    if (res.data !== 'error') {
      setSuccessMessage('Form submitted successfully!');
      setInterval(() => {
        event.target.reset();
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <>
      <div className="team-form">
        <h4>{props.title}</h4>
        <form className="pgs-form form-control" onSubmit={handleSubmit}>
          <div className="row row-gap">
            <div className="col-sm-6">
              <div className="input-control">
                <label>Full names : </label>
                <input
                  type="text"
                  name="Username"
                  // value={inputs?.Username}
                  onChange={(e) => handleChange(e)}
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-control">
                <label>Email :</label>
                <input
                  type="emal"
                  name="Email"
                  // value={inputs?.Email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-control">
                <label>Phone Number :</label>
                <input
                  type="tel"
                  name="PhoneNumber"
                  // value={inputs?.PhoneNumber}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="input-control">
                <label>Subject :</label>
                <input
                  type="text"
                  name="Subject"
                  // value={inputs?.Subject}
                  onChange={handleChange}
                  placeholder="Add Subject"
                />
              </div>
            </div>
            <div className="input-control">
              <label>Message :</label>
              <textarea
                rows={5}
                name="Message"
                // value={inputs?.Message}
                onChange={handleChange}
                placeholder="Write a Message"
              />
            </div>
            {successMessage && (
              <div className="col-sm-12">
                <div className="success-message">{successMessage}</div>
              </div>
            )}
            <div className="input-control">
              <button className="btn-primary" type="submit">
                Send a Message<i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default TeamForm;
