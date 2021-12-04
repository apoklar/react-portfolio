import React, { useState } from 'react';

// import { validateEmail } from '../../utils/helpers';

function Contact() {

    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // const [errorMessage, setErrorMessage] = useState('');
    // const { name, email, message } = formState;
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (!errorMessage) {
    //     setFormState({ [e.target.name]: e.target.value });
    //     console.log('Form', formState);
    //   }
    // };
  
    // const handleChange = (e) => {
    //   if (e.target.name === 'email') {
    //     const isValid = validateEmail(e.target.value);
    //     if (!isValid) {
    //       setErrorMessage('Your email is invalid.');
    //     } else {
    //       setErrorMessage('');
    //     }
    //   } else {
    //     if (!e.target.value.length) {
    //       setErrorMessage(`${e.target.name} is required.`);
    //     } else {
    //       setErrorMessage('');
    //     }
    //   }
    // };
  
    return (
      <section>
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet"></link>
          <br></br>
        <h1 data-testid="h1tag" className="title">Contact me</h1>

        <div className="about-page">
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet"></link>

          <h3 className="about">Email: a.poklar@yahoo.com</h3>
          <h3 className="about">Github and LinkedIn are linked at the bottom.</h3>
     
        </div>

        {/* <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="name" htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <label className="email" htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <label className="message" htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button className="submit" data-testid="button" type="submit">Submit</button>
        </form> */}
      </section>
    );
}

export default Contact
