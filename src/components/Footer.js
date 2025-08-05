import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
      <footer className="site-footer">
  <div className="footer-top">
    <div className="footer-subscribe">
      <h4>Subscribe to Updates</h4>
      <p>Stay informed about our latest courses and offers.</p>
    </div>
    <form className="subscribe-form">
      <input type="email" placeholder="Your Email Here" />
      <button type="submit">Join</button>
      <small>By subscribing, you consent to our<Link to="/">Privacy Policy</Link>.</small>
    </form>
  </div>

  <div className="footer-links">
    <div className="footer-logo">
      <h3>Logo</h3>
    </div>

    <div className="footer-columns">
      <div>
        <h5>Quick Links</h5>
        <ul>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/">Contact Info</Link></li>
          <li><Link to="/">FAQ</Link></li>
          <li><Link to="/">Courses</Link></li>
          <li><Link to="/">Testimonials</Link></li>
        </ul>
      </div>

      <div>
        <h5>Resources</h5>
        <ul>
          <li><Link to="/">Blog Posts</Link></li>
          <li><Link to="/">Support</Link></li>
          <li><Link to="/">Privacy Policy</Link></li>
          <li><Link to="/">Terms of Use</Link></li>
          <li><Link to="/">User Guide</Link></li>
        </ul>
      </div>

      <div>
        <h5>Connect With Us</h5>
        <ul>
          <li><Link to="/">Facebook</Link></li>
          <li><Link to="/">Instagram</Link></li>
          <li><Link to="/">LinkedIn</Link></li>
          <li><Link to="/">YouTube</Link></li>
          <li><Link to="/">Twitter</Link></li>
        </ul>
      </div>

      <div>
        <h5>Stay Updated</h5>
        <ul>
          <li><Link to="/">Newsletter</Link></li>
          <li><Link to="/">Course Updates</Link></li>
          <li><Link to="/">Special Offers</Link></li>
          <li><Link to="/">Feedback Form</Link></li>
        </ul>
      </div>

      <div>
        <h5>Contact Us</h5>
        <ul>
          <li><Link to="/">Get in Touch</Link></li>
          <li><Link to="/">Support</Link></li>
          <li><Link to="/">Help Center</Link></li>
          <li><Link to="/">Community Forum</Link></li>
          <li><Link to="/">User Stories</Link></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2024 Tamara's Health Courses. All rights reserved.</p>
    <ul className="legal-links">
      <li><Link to="/">Privacy Policy</Link></li>
      <li><Link to="/">Terms of Service</Link></li>
      <li><Link to="/">Cookie Settings</Link></li>
    </ul>
  </div>
</footer>

    </div>
  )
}
