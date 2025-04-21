import React, { useState } from "react";
import emailjs from "emailjs-com";
import { CiMail } from "react-icons/ci";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS integration
    emailjs
      .send(
        "service_5rwypej", // EmailJS Service ID
        "template_e015116", // EmailJS Template ID
        formData,
        "8TrpuWpxIgZnDySyv" // EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
          setLoading(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-me">
      <h2 className="contact-heading"><CiMail/> Contact Me</h2>
      {submitted && (
        <p className="success-message">
          Thank you for reaching out! I'll get back to you soon.
        </p>
      )}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit" disabled={loading} className="submit-button">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;