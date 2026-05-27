import "../styles/contact.css";

function Contact(){

  return(
    <div className="contact-page">

      <div className="contact-box">

        <p className="contact-label">
          Get In Touch
        </p>

        <h1>Contact Us</h1>

        <p className="contact-text">
          Have questions about ShopZone or need assistance?
          Fill out the form below and we'll get back to you.
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  )
}

export default Contact;