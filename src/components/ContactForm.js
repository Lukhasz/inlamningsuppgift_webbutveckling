import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-us" id="contact">
      <h2>Contact Me!</h2>
      <p>If you have any questions, please contact me here.</p>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />

        <input type="email" placeholder="Email" required />
        
        <textarea className="contact-textarea" placeholder="Message" rows={5} required></textarea>
        
        <button type="submit" onClick={() => alert("Thank you for contacting me, I will be in touch.")}>Send</button>
      </form>

    </div>
  )
}

export default ContactForm;