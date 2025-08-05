import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav-links">
        
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>

      </nav>
      <div className="auth-buttons">
        <button className="btn start">Start Learning</button>
        <button className="btn login">
        <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link> 
        </button>
       </div>
    </header>
  );
}
