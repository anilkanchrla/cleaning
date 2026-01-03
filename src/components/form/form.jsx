import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
  };

  return (
    <section className="contact-section">
      <h2 className="contact-heading">
        Ready for a cleaner kind of clean?<br />Get in touch now!
      </h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="2"
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="contact-btn">
          Get in Touch
        </button>
      </form>
    </section>
  );
};

export default Form;
