import React from 'react';


export default function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav-links">
        <a href="/home">Home</a>
        <a href="/courses">Courses</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About</a>
      </nav>
      <div className="auth-buttons">
        <button className="btn start">Start Learning</button>
        <button className="btn login">Login</button>
      </div>
    </header>
  );
}
