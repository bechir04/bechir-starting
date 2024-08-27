import React from 'react';
import NewsList from '../../components/newsList/NewsList';
import './NewsPage.css';

function NewsPage() {
  const articles = [
    { title: 'Titre Article 1', summary: 'Résumé article 1...', date: '01/01/2024', author: 'Auteur 1', image: '/images/news1.jpg' },
    { title: 'Titre Article 2', summary: 'Résumé article 2...', date: '02/01/2024', author: 'Auteur 2', image: '/images/news2.jpg' },
  ];

  return (
    <div className="news-page">
      <h2>Actualités</h2>
      <NewsList articles={articles} />
    </div>
  );
}

export default NewsPage;
