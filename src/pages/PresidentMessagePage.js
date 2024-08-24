import React from 'react';
import './PresidentMessagePage.css';

function PresidentMessagePage() {
  return (
    <div className="president-message-page">
      <h2>Mot du Président</h2>
      <section>
        <p>Chers membres...</p>
        <p><strong>- Le Président</strong></p>
        <img src="/images/president.jpg" alt="Président" />
      </section>
    </div>
  );
}

export default PresidentMessagePage;
