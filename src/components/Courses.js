import React from 'react'
import { Link } from 'react-router-dom';
export default function Courses() {
  return (
    <div>
       <section id="courses" className="courses-section">
  <div className="courses-header">
    <div className="courses-heading">
        <link rel="stylesheet" href="style.css" />
      <h3 className="script-title">Explore Our Courses</h3>
      <h2>Comprehensive Nutrition<br/>and Health Courses</h2>
    </div>
    <div className="courses-description">
      <p>
        Whether you're managing diabetes, heart disease, or other chronic conditions, our courses are designed to help you make informed, effective lifestyle changes. All courses are taught by Tamara Herman, a licensed dietitian and diabetes care specialist.
      </p>
     <Link to="/">Explore More</Link>
    </div>
  </div>

  <div className="course-cards">

    <div className="course-card">
      <h4>Complete Diabetes<br/>Management Course</h4>
      <img src="images/diabetes.jpg" alt="Diabetes course" />
      <p>Practical recipes, meal planning, and nutrition tips to help you lead a healthier life.</p>
     <Link to="/">Explore More</Link>
    </div>

    
    <div className="course-card">
      <h4>Heart Health &<br/>Nutrition</h4>
      <img src="images/heart-health.jpg" alt="Heart health course" />
      <p>Practical recipes, meal planning, and nutrition tips to help you lead a healthier life.</p>
     <Link to="/">Explore More</Link>
    </div>

 
    <div className="course-card">
      <h4>Healthy Eating &<br/>Cooking Tips</h4>
      <img src="images/healthy-eating.jpg" alt="Healthy cooking course" />
      <p>Practical recipes, meal planning, and nutrition tips to help you lead a healthier life.</p>
     <Link to="/">Explore More</Link>
    </div>
  </div>
</section>
    </div>
  )
}
