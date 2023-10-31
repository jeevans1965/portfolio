// ContactMe.js
import React from 'react';
import './ContactMe.css'; // Create a CSS file for styling

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          You can reach out to me through the following methods:
        </p>
        <ul>
          <li><strong>Email:</strong>  jeevanshivaraj2001@gmail.com </li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jeevan1120">LinkedIn Profile</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/jeevans1965">GitHub Profile</a></li>
        </ul>
      </div>
    </section>
  );
};

export default ContactMe;
