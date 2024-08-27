import React from 'react';
import ContactForm from '../../components/contactForm/ContactForm';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contactez-nous</h2>
      <ContactForm />
      <section className="contact-info">
        <h3>Informations de contact</h3>
        <p>Adresse : </p>
        <p>Téléphone : </p>
        <p>Email : </p>
       
      </section>
    </div>
  );
}

export default ContactPage;
