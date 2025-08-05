import React from 'react'
import { Link } from 'react-router-dom';
export default function Learn() {
  return (
    <div>
      
<section id="learn" className="learn-section">
  <div className="learn-container">
    <div className="learn-text">
      <h3 className="script-title">What You’ll Learn</h3>
      <h2>Transform Your Health<br/>with Expert Guidance</h2>
      <p>
        Take control of your health and learn how to manage chronic conditions with expert strategies designed for lasting change. Here’s what you’ll master:
      </p>

      <ul className="learn-list">
        <li><strong>Master Blood Sugar Management:</strong> Discover proven techniques to stabilize blood sugar and prevent long-term complications.</li>
        <li><strong>Delicious, Diabetes-Friendly Recipes:</strong> Learn to create healthy, mouthwatering meals that support balanced nutrition and energy.</li>
        <li><strong>Heart-Healthy Eating Habits:</strong> Understand the essential foods that promote cardiovascular health and help you manage blood pressure.</li>
        <li><strong>Effective Lifestyle Changes:</strong> Adopt simple, sustainable habits that promote overall wellness and vitality.</li>
      </ul>

      <p className="final-note">
        By the end of the course, you’ll have the tools and knowledge to not only manage chronic conditions but to <strong>transform your health and lifestyle for the better.</strong>
      </p>

     <Link to="/" className="btn btn-start">Start Learning Today</Link>
    </div>

    <div className="learn-graphic">
    
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
    </div>
  </div>
</section>
    </div>
  )
}
