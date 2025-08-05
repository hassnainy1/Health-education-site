import React from 'react';

export default function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-header">
        <h2>Explore Our Healthcare Education Blog</h2>
        <p>
          Discover valuable resources and guidance to help you succeed in your healthcare journey.
          <br />
          <a href="/" className="explore-link">Explore More</a>
        </p>
      </div>

      <div className="blog-cards">
        <div className="blog-card">
          <img src="/images/blog1.jpg" alt="Diabetes tools and candy" />
          <div className="blog-info">
            <h4>Mastering Diabetes: 5 Simple Lifestyle Changes You Can Start Today</h4>
            <p>Managing diabetes doesn’t have to be overwhelming. Discover easy-to-follow lifestyle changes that can make a big difference in your health.</p>
            <a href="/">Read More</a>
          </div>
        </div>

        <div className="blog-card">
          <img src="/images/blog2.jpg" alt="Heart and healthy food" />
          <div className="blog-info">
            <h4>Healthy Eating for Heart Health: What You Need to Know</h4>
            <p>Learn how simple food choices can support a healthy heart and reduce the risk of cardiovascular disease.</p>
            <a href="/">Read More</a>
          </div>
        </div>

        <div className="blog-card">
          <img src="/images/blog3.jpg" alt="Food label and hand" />
          <div className="blog-info">
            <h4>The Power of Food Labels: What You’re Really Eating</h4>
            <p>Understanding food labels is a game-changer for better nutrition. Learn how to decode them to make smarter, healthier choices.</p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
