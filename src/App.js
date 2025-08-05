import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import BlogPage from './pages/BlogPage';

import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
