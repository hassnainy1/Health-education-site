import React from 'react'
import { Link } from 'react-router-dom';
export default function CTA() {
  return (
    <div>
      <section className="cta">
  <h2>Ready to Take Control of Your Health?</h2>
  <p>
    Start your journey to better health today by enrolling in one of Tamara’s expert-led courses.
    Whether you're managing diabetes or learning to eat healthier, we have a course for you.
  </p>
  <div className="cta-buttons">
   <Link to="/" className="btn-light">Start Learning Today</Link>
   <Link to="/" className="btn-dark">Explore</Link>
  </div>
</section>
    </div>
  )
}
