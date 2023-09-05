import React from 'react';
import { useState } from 'react';
import '../form.scss';

function ServiceForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(inputs);
    console.log(inputs);
  };

  return (
    <>
      <form className="pgs-form form-control" onSubmit={handleSubmit}>
        <div className="row row-gap">
          <div className="col-md-4">
            <div className="input-control">
              <label>Username : </label>
              <input
                type="text"
                name="Name"
                defaultValue={inputs.Name || ''}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-control">
              <label>Email :</label>
              <input
                type="emal"
                name="Lastname"
                defaultValue={inputs.Lastname || ''}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-control">
              <label>Email :</label>
              <input
                type="emal"
                name="Email"
                defaultValue={inputs.Email || ''}
                onChange={handleChange}
                placeholder="example@email.com"
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-control">
              <label>Message :</label>
              <textarea
                rows={5}
                name="Message"
                defaultValue={inputs.Message || ''}
                onChange={handleChange}
                placeholder="Enquiry Description"
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="checkbox-control">
              <input
                type="checkbox"
                name="Term of Service"
                onChange={handleChange}
              />{' '}
              i agree to talk about my project with hi-Nex
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-control">
              <button className="btn-primary" type="submit">
                Send a Massage<i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ServiceForm;
