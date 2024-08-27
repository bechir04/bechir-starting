import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h2>À Propos du Club</h2>
      <section>
        <h3>Histoire</h3>
        <p>Le club d'athlétisme a été fondé en...</p>
      </section>
      <section>
        <h3>Mission & Vision</h3>
        <p>Notre mission est de promouvoir...</p>
      </section>
      <section>
        <h3>Équipe de Direction</h3>
        <p>Présentation des membres clés...</p>
      </section>
    </div>
  );
}

export default AboutPage;
