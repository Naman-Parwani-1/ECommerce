import "./ContactForm.css";

function ContactForm({ data }) {
  return (
    <section className="contact-form-section">

      <div className="contact-form-image">

        <img
          src={data.image}
          alt="Founders"
        />

      </div>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Name"
        />

        <input
          type="email"
          placeholder="E-mail"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <textarea
          placeholder="Message"
          rows="6"
        />

        <button type="submit">
          SUBMIT
        </button>

      </form>

    </section>
  );
}

export default ContactForm;