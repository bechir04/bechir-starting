
import React from 'react';
import './HomePage.css';
import { bechir, affiche, ppl, Starting, run, course } from "../../assets/index";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import Slider from 'react-slick';

function HomePage() {
  const clubImages = [
    { src: run, alt: 'Club Event 1' },
    { src: affiche, alt: 'Club Event 2' },
    { src: course, alt: 'Club Event 3' },

  ];

  const partners = [
    { src: affiche, alt: 'Partner 1' },
    { src: ppl, alt: 'Partner 2' },
    { src: bechir, alt: 'Partner 3' },
  ];

  const settings = {
    dots: true,
    infinite: true, // This ensures infinite scrolling
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 1, // 3 seconds for each slide
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    speed: 10000, // Speed of the sliding transition
    
  };

  return (
    <div className="home-page">
      {/* Club Logo */}
      <div className="club-logo">
        <img src={Starting} alt="Club Logo" className="logo-hover" />
      </div>

      {/* Animated Description */}
      <section className="club-description">
        <h2>Bienvenue au Club d'Athlétisme de Nabeul</h2>
        <p className="animated-description">
          Le Starting Club de Nabeul, fondé en 2017, est un club d'athlétisme dynamique. Nous avons pour mission de promouvoir l'excellence sportive et d'encourager une communauté passionnée de sport. Avec plus de 380 membres, nous formons des champions pour l'avenir tout en favorisant l'inclusion sociale à travers l'athlétisme.
        </p>
      </section>

      {/* Club Image Carousel */}
      <section className="club-carousel">
        <h2>Nos Événements</h2>
        <Slider {...settings}>
          {clubImages.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2>Nos Partenaires</h2>
        <div className="partners-logos">
          {partners.map((partner, index) => (
            <img key={index} src={partner.src} alt={partner.alt} className="partner-logo" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
