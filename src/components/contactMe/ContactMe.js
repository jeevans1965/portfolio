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
          <li>Email: jeevan@example.com</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/jeevan1120">LinkedIn Profile</a></li>
          <li>GitHub: <a href="https://github.com/jeevans1965">GitHub Profile</a></li>
        </ul>
      </div>
    </section>
  );
};

export default ContactMe;
