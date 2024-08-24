import React from 'react';
import Carousel from '../components/Carousel';
import NewsList from '../components/NewsList';
import './HomePage.css';

function HomePage() {
  const images = [
    { src: '/images/event1.jpg', alt: 'Événement 1' },
    { src: '/images/event2.jpg', alt: 'Événement 2' },
  ];

  const articles = [
    { title: 'Titre Article 1', summary: 'Résumé article 1...', date: '01/01/2024', author: 'Auteur 1', image: '/images/news1.jpg' },
    { title: 'Titre Article 2', summary: 'Résumé article 2...', date: '02/01/2024', author: 'Auteur 2', image: '/images/news2.jpg' },
  ];

  return (
    <div className="home-page">
      <Carousel images={images} />
      <section className="latest-news">
        <h2>Dernières Actualités</h2>
        <NewsList articles={articles} />
      </section>
      <section className="quick-links">
        <h2>Liens Rapides</h2>
        <ul>
          <li><a href="/membership">Adhésion</a></li>
          <li><a href="/events">Événements</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
