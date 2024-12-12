import React from 'react';
import './Contact.css'; // Import the CSS for styling

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Write your message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
