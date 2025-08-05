import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import BlogPage from './pages/BlogPage';
import './style.css'
function AppContent() {
  const location = useLocation();

  // Check if current path is '/login'
  const hideFooter = location.pathname === '/login';
  const hideHeader = location.pathname === '/login';

  return (
    <>
      {!hideHeader && <Header />}
      
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
