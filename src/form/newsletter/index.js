import React from 'react';
import { useState } from 'react';
import '../form.scss';

function NewsletterForm(props) {
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
      <div className={`newsletter-form ${props.className || ''}`}>
        <p className="text-light">
          Provide Your Email Address & We Will Notify You When Site Is Ready:
        </p>
        <form className="pgs-form form-control" onSubmit={handleSubmit}>
          <div className="input-control">
            <input
              type="emal"
              name="Email"
              defaultValue={inputs.Email || ''}
              onChange={handleChange}
              placeholder="example@email.com"
            />
            <button className="btn-primary text-light" type="submit">
              Subscribe <i className="far fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewsletterForm;
