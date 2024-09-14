import React from 'react';
import Comment from '../../components/ForumComment/Comment'; // Import Comment Component
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Welcome to Our Blog</h1>
      <article className="blog-content">
        <h2>Introduction to Our Club's Achievements</h2>
        <p>
        Le Starting Club de Nabeul, fondé en 2017, est un club d'athlétisme dynamique. Nous avons pour mission de promouvoir l'excellence sportive et d'encourager une communauté passionnée de sport. Avec plus de 380 membres, nous formons des champions pour l'avenir tout en favorisant l'inclusion sociale à travers l'athlétisme.

        </p>
        <h2>Upcoming Events and Activities</h2>
        <p>
        Upcoming Events and Activities        </p>
      </article>

      {/* Comment Section */}
      <section className="comments-section">
        <h3>Share Your Thoughts</h3>
        <Comment />
      </section>
    </div>
  );
};

export default Blog;
