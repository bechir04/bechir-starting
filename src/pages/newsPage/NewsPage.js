
import React from 'react';
import { Card, Button } from 'antd';
import './NewsPage.css'; // Add custom styles here

function NewsPage() {
  const events = [
    {
      title: 'Championnat National',
      date: '01 Jan 2024',
      description: 'Venez assister au championnat national d’athlétisme à Nabeul. Ne manquez pas les performances de nos athlètes U20!',
      image: '/images/event1.jpg',
    },
    {
      title: 'Course de Marathon',
      date: '15 Mar 2024',
      description: 'Un marathon à travers la ville de Nabeul avec la participation de nos meilleurs coureurs. Préparez-vous pour cet événement incontournable.',
      image: '/images/event2.jpg',
    },
    {
      title: 'Formation Jeunes Athlètes',
      date: '25 May 2024',
      description: 'Formation pour jeunes athlètes afin de développer leurs compétences dans diverses disciplines de l’athlétisme.',
      image: '/images/event3.jpg',
    },
  ];

  return (
    <div className="news-page">
      <h2 className="page-title">Nos Événements</h2>
      <div className="event-cards-container">
        {events.map((event, index) => (
          <Card
            key={index}
            hoverable
            className="event-card"
            cover={<img alt={event.title} src={event.image} className="event-image" />}
          >
            <h3>{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
            <Button type="primary">Lire plus</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
