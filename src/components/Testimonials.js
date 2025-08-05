import React from 'react'

export default function Testimonials() {
  return (
    <div>
      
<section id="testimonials" className="testimonials-section">
  <div className="testimonial-banner">
    <img src="images/johndoe.jpg" alt="Group eating healthy food" />
  </div>

  <div className="testimonial-content">
    <h2>Success Stories from Our Participants</h2>

    <div className="testimonial-cards">
   
      <div className="testimonial-card">
        <div className="stars">★★★★★</div>
        <p>Tamara’s diabetes course completely changed how I manage my blood sugar. The resources are practical and easy to follow.</p>
        <div className="user">
          <img src="images/john.jpg" alt="John D"/>
          <div>
            <strong>John D</strong><br />
            <span>Marketing Director, HealthCo</span>
          </div>
        </div>
      </div>


      <div className="testimonial-card">
        <div className="stars">★★★★★</div>
        <p>“Tamara’s courses transformed my approach to managing diabetes. I now feel empowered and confident in my health journey!”</p>
        <div className="user">
          <img src="images/maria.jpg" alt="Maria L"/>
          <div>
            <strong>Maria L</strong><br />
            <span>Patient, Health Advocate</span>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="stars">★★★★★</div>
        <p>Tamara’s courses transformed my approach to managing diabetes. I now feel empowered and informed to make healthier choices every day.</p>
        <div className="user">
          <img src="images/johndoe.jpg" alt="John Doe"/>
          <div>
            <strong>John Doe</strong><br />
            <span>Diabetes Advocate</span>
          </div>
        </div>
      </div>
    </div>


    <div className="testimonial-footer">
      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <a href="/" className="btn-dark">Read Success Stories</a>
    </div>
  </div>
</section>
    </div>
  )
}
