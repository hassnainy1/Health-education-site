import React from 'react'

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
      <small>By subscribing, you consent to our <a href="/">Privacy Policy</a>.</small>
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
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact Info</a></li>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Courses</a></li>
          <li><a href="/">Testimonials</a></li>
        </ul>
      </div>

      <div>
        <h5>Resources</h5>
        <ul>
          <li><a href="/">Blog Posts</a></li>
          <li><a href="/">Support</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms of Use</a></li>
          <li><a href="/">User Guide</a></li>
        </ul>
      </div>

      <div>
        <h5>Connect With Us</h5>
        <ul>
          <li><a href="/">Facebook</a></li>
          <li><a href="/">Instagram</a></li>
          <li><a href="/">LinkedIn</a></li>
          <li><a href="/">YouTube</a></li>
          <li><a href="/">Twitter</a></li>
        </ul>
      </div>

      <div>
        <h5>Stay Updated</h5>
        <ul>
          <li><a href="/">Newsletter</a></li>
          <li><a href="/">Course Updates</a></li>
          <li><a href="/">Special Offers</a></li>
          <li><a href="/">Feedback Form</a></li>
        </ul>
      </div>

      <div>
        <h5>Contact Us</h5>
        <ul>
          <li><a href="/">Get in Touch</a></li>
          <li><a href="/">Support</a></li>
          <li><a href="/">Help Center</a></li>
          <li><a href="/">Community Forum</a></li>
          <li><a href="/">User Stories</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2024 Tamara's Health Courses. All rights reserved.</p>
    <ul className="legal-links">
      <li><a href="/">Privacy Policy</a></li>
      <li><a href="/">Terms of Service</a></li>
      <li><a href="/">Cookie Settings</a></li>
    </ul>
  </div>
</footer>

    </div>
  )
}
