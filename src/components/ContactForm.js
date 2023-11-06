import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isFormValid = Object.values(form).every((value) => value !== "");
    setIsFormValid(isFormValid);
  }, [form]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="contact-us" id="contact">
      <h2>Contact Me!</h2>
      {isSubmitted ? 
        <p style={{color: 'green'}}>Thank you for contacting me, I will be in touch.</p> : 
        <p>If you have any questions or business inquiries, please contact me here.</p>
      }

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />

        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        
        <textarea className="contact-textarea" name="message" placeholder="Message" rows={5} onChange={handleChange} required></textarea>
        
        <button type="submit">Send</button>
      </form>

    </div>
  )
}

export default ContactForm;